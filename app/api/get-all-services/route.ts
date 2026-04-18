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
  const apiId = process.env.TECHNOTRON_API_ID
  const apiKey = process.env.TECHNOTRON_API_KEY

  if (!apiUrl || !apiId || !apiKey) {
    return Response.json({
      error: 'Missing environment variables',
      hasUrl: !!apiUrl,
      hasId: !!apiId,
      hasKey: !!apiKey,
    }, { status: 500 })
  }

  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apiId': apiId,
        'apiKey': apiKey,
      },
      body: JSON.stringify({
        scope: 'fetchAll',
        showPrice: 'min',
      }),
      cache: 'no-store',
    })

    console.log('Technotron HTTP status:', response.status)
    console.log('Technotron content-type:', response.headers.get('content-type'))

    const rawText = await response.text()
    console.log('Technotron raw response length:', rawText.length)
    console.log('Technotron raw response preview:', rawText.substring(0, 500))

    if (!rawText || rawText.trim() === '') {
      return Response.json({
        error: 'Technotron returned empty response',
        httpStatus: response.status,
        contentType: response.headers.get('content-type'),
      }, { status: 500 })
    }

    let data: TechnotronApiResponse
    try {
      data = JSON.parse(rawText) as TechnotronApiResponse
    } catch (parseError) {
      return Response.json({
        error: 'Technotron returned invalid JSON',
        httpStatus: response.status,
        rawPreview: rawText.substring(0, 200),
        parseError: parseError instanceof Error ? parseError.message : String(parseError),
      }, { status: 500 })
    }

    if (!data.status) {
      return Response.json({
        error: data.message,
        httpStatus: response.status,
      }, { status: response.status })
    }

    const cleanPrograms: CleanProgram[] = data.data
      .filter((p) => p.publishToWebsite)
      .map((p) => ({
        programId: String(p.programId),
        programName: p.programName,
        programShortDetails: p.programShortDetails,
        pricePageLink: p.pricePageLink,
        hasTrialPack: p.hasTrialPack,
        trialPackPrice: p.trialPackPrice ?? 0,
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
              planId: String(plan.planId),
              displayDuration: plan.displayDuration,
              actualPrice: plan.actualPrice,
              discountedPrice: plan.discountedPrice,
              finalPrice,
              trialPack: plan.trialPack,
              gstApplied: plan.gstToBeApplied,
              gstPercentage: plan.gstPercentage,
              discountPercent,
              planPurchaseLink: plan.planPurchaseLink ?? '',
            }
          }),
      }))

    return Response.json({ programs: cleanPrograms })

  } catch (error) {
    const message = error instanceof Error ? error.message : String(error)
    console.error('get-all-services error:', message)
    return Response.json({
      error: 'Failed to fetch services',
      details: message,
    }, { status: 500 })
  }
}
