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
    const response = await fetch(apiUrl, {
      method: 'POST',
      cache: 'no-store',
      headers: {
        'Content-Type': 'application/json',
        'apiId': apiId,
        'apiKey': apiKey
      },
      body: JSON.stringify({ scope: 'fetchAll' })
    });

    const rawText = await response.text();

    let data: TechnotronApiResponse;
    try {
      data = JSON.parse(rawText) as TechnotronApiResponse;
    } catch {
      console.error("TECHNOTRON API RETURNED NON-JSON TEXT:", rawText);
      return NextResponse.json(
        { success: false, message: "API returned invalid JSON format." }, 
        { status: 502 }
      );
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
    console.error("API FETCH FAILED COMPLETELY:", error);
    return NextResponse.json(
      { success: false, message: "Server fetch error." }, 
      { status: 500 }
    );
  }
}
