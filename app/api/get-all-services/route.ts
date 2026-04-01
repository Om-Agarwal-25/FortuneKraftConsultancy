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
}

export async function GET(): Promise<Response> {
  const apiUrl = process.env.TECHNOTRON_API_URL
  const apiId = process.env.TECHNOTRON_API_ID
  const apiKey = process.env.TECHNOTRON_API_KEY

  if (!apiUrl || !apiId || !apiKey) {
    return NextResponse.json<ApiErrorResponse>(
      { error: 'Missing API configuration' },
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
            }
          }),
      }))

    return NextResponse.json({ programs: cleanPrograms })

  } catch (error) {
    console.error('get-all-services error:', error instanceof Error ? error.message : error)
    return NextResponse.json<ApiErrorResponse>(
      { error: 'Failed to fetch services' },
      { status: 500 }
    )
  }
}
