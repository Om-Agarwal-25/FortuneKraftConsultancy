import { NextResponse } from 'next/server'
import type { TechnotronApiResponse } from '@/types/api'

export interface CleanProgram {
  programId: string
  programName: string
  programShortDetails: string
  pricePageLink: string
  hasTrialPack: boolean
  trialPackPrice: number
  pricing: CleanPlan[]
}

export interface CleanPlan {
  planId: string
  displayDuration: string
  actualPrice: number
  discountedPrice: number
  finalPrice: number
  trialPack: boolean
  gstApplied: boolean
  gstPercentage: number
  discountPercent: number
  planPurchaseLink: string
}

export async function GET(): Promise<Response> {
  const apiUrl = process.env.TECHNOTRON_API_URL
  const apiId  = process.env.TECHNOTRON_API_ID
  const apiKey = process.env.TECHNOTRON_API_KEY

  if (!apiUrl || !apiId || !apiKey) {
    return NextResponse.json({
      status: false,
      message: 'Missing environment variables',
      hasUrl: !!apiUrl,
      hasId:  !!apiId,
      hasKey: !!apiKey,
    }, { status: 500 })
  }

  try {
    // ── 1. Fetch from Technotron ──────────────────────────────────────────────
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apiId':  apiId,
        'apiKey': apiKey,
      },
      body: JSON.stringify({ scope: 'fetchAll', showPrice: 'min' }),
      cache: 'no-store',
    })

    console.log('Technotron HTTP status:  ', response.status)
    console.log('Technotron Content-Type: ', response.headers.get('content-type'))

    // ── 2. HTML guard ─────────────────────────────────────────────────────────
    //    Technotron returns an HTML error page when the IP is not whitelisted
    //    or the credentials are wrong. Detect this BEFORE calling .json() so
    //    we never crash on unexpected markup.
    const contentType = response.headers.get('content-type') ?? ''
    if (contentType.includes('text/html')) {
      const htmlText = await response.text()
      console.error(
        '\n⚠️  TECHNOTRON API RETURNED HTML INSTEAD OF JSON ⚠️\n' +
        'Likely cause: IP not whitelisted or invalid API credentials.\n' +
        'TECHNOTRON HTML ERROR:\n',
        htmlText,
      )
      return NextResponse.json({
        status: false,
        message: 'API returned HTML instead of JSON. Check API Key/IP.',
      }, { status: 502 })
    }

    // ── 3. Parse JSON ─────────────────────────────────────────────────────────
    const rawText = await response.text()
    console.log('Technotron raw length:  ', rawText.length)
    console.log('Technotron raw preview: ', rawText.substring(0, 300))

    if (!rawText || rawText.trim() === '') {
      return NextResponse.json({
        status: false,
        message: 'Technotron returned an empty response.',
        httpStatus: response.status,
      }, { status: 502 })
    }

    let data: TechnotronApiResponse
    try {
      data = JSON.parse(rawText) as TechnotronApiResponse
    } catch (parseError) {
      console.error('Technotron JSON parse error:', parseError)
      return NextResponse.json({
        status: false,
        message: 'Technotron returned invalid JSON.',
        rawPreview: rawText.substring(0, 200),
      }, { status: 502 })
    }

    // ── 4. Business-logic check ───────────────────────────────────────────────
    if (!data.status) {
      return NextResponse.json({
        status: false,
        message: data.message ?? 'Technotron API returned status: false',
      }, { status: 502 })
    }

    // ── 5. Shape the response ─────────────────────────────────────────────────
    const cleanPrograms: CleanProgram[] = data.data
      .filter((p) => p.publishToWebsite)
      .map((p) => ({
        programId:           String(p.programId),
        programName:         p.programName,
        programShortDetails: p.programShortDetails,
        pricePageLink:       p.pricePageLink,
        hasTrialPack:        p.hasTrialPack,
        trialPackPrice:      p.trialPackPrice ?? 0,
        pricing: p.pricing
          .filter((plan) => plan.publishToWebsite)
          .sort((a, b) => a.planIdOrder - b.planIdOrder)
          .map((plan) => {
            const finalPrice = plan.gstToBeApplied
              ? Math.round(plan.discountedPrice * (1 + plan.gstPercentage / 100))
              : plan.discountedPrice
            const discountPercent = plan.actualPrice > plan.discountedPrice
              ? Math.round(((plan.actualPrice - plan.discountedPrice) / plan.actualPrice) * 100)
              : 0
            return {
              planId:           String(plan.planId),
              displayDuration:  plan.displayDuration,
              actualPrice:      plan.actualPrice,
              discountedPrice:  plan.discountedPrice,
              finalPrice,
              trialPack:        plan.trialPack,
              gstApplied:       plan.gstToBeApplied,
              gstPercentage:    plan.gstPercentage,
              discountPercent,
              planPurchaseLink: plan.planPurchaseLink ?? '',
            }
          }),
      }))

    return NextResponse.json({ programs: cleanPrograms })

  } catch (error) {
    // ── Network / runtime failure ─────────────────────────────────────────────
    const message = error instanceof Error ? error.message : String(error)
    console.error('get-all-services fetch failed:', message)
    return NextResponse.json({
      status: false,
      message: 'Failed to reach the Technotron API.',
      details: message,
    }, { status: 502 })
  }
}
