export interface TechnotronPricingPlan {
  planId: number
  planIdOrder: number
  displayDuration: string
  actualPrice: number
  discountedPrice: number
  publishToWebsite: boolean
  trialPack: boolean
  gstToBeApplied: boolean
  gstPercentage: number
  planPurchaseLink: string
}

export interface TechnotronProgram {
  programId: number
  programName: string
  programIdOrder: number
  programShortDetails: string
  programDescription: string
  otherDetails: string
  publishToWebsite: boolean
  hasTrialPack: boolean
  preferredDisplayPrice: number
  gstToBeApplied: boolean
  trialPackPrice: number
  pricing: TechnotronPricingPlan[]
  pricePageLink: string
}

export interface TechnotronSuccessResponse {
  status: true
  data: TechnotronProgram[]
}

export interface TechnotronErrorResponse {
  status: false
  message: string
}

export type TechnotronApiResponse = TechnotronSuccessResponse | TechnotronErrorResponse
