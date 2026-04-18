import { NextResponse } from 'next/server'
import type { TechnotronApiResponse } from '@/types/api'
import type { ApiErrorResponse } from '@/types'

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
    return NextResponse.json(
      {
        error: 'Missing environment variables',
        hasUrl: !!apiUrl,
        hasId: !!apiId,
        hasKey: !!apiKey,
        urlValue: apiUrl ?? 'NOT SET',
      },
      { status: 500 }
    )
  }

  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apiId': apiId,
        'apiKey': apiKey,
      },
      body: JSON.stringify({ scope: 'fetchAll', showPrice: 'min' }),
      cache: 'no-store',
    })

    const rawText = await response.text()
    const data = JSON.parse(rawText) as TechnotronApiResponse

    if (!data.status) {
      return NextResponse.json<ApiErrorResponse>(
        { error: data.message },
        { status: response.status }
      )
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

    return NextResponse.json({ programs: cleanPrograms })

  } catch (error) {
    const message = error instanceof Error ? error.message : String(error)
    const stack = error instanceof Error ? error.stack : undefined
    console.error('get-all-services full error:', { message, stack })
    return NextResponse.json(
      {
        error: 'Failed to fetch services',
        details: message,
        hint: 'Check if TECHNOTRON_API_URL, TECHNOTRON_API_ID, TECHNOTRON_API_KEY are set in environment variables',
      },
      { status: 500 }
    )
  }
}
