export interface Service {
  id: string
  title: string
  category: 'Equity Cash' | 'Equity Premium' | 'F&O' | 'Demo' | 'Investor' | 'Trial Plans'
  duration: string
  price: string
  tag: 'Most Popular' | 'Best Value' | 'Free Trial' | null
  description: string
  features: string[]
  targetAudience: 'Trader' | 'Investor'
  isTrial?: boolean
}

export interface ApiServiceResponse {
  id: string
  title: string
  description: string
  price: string
  duration: string
  features: string[]
  purchaseUrl?: string
  whatsappNumber?: string
  callNumber?: string
}

export interface ContactFormData {
  name: string
  email: string
  phone: string
  subject: ContactSubject
  message: string
}

export type ContactSubject =
  | 'General Query'
  | 'Service Inquiry'
  | 'Lodge a Complaint'
  | 'Partnership Opportunity'
  | 'Technical Support'
export type ServiceCategory = 'All' | 'Intraday Alpha' | 'BTST Alpha' | 'Positional Alpha' | 'Capital Compounders' | 'Trial Plans'
export type ModalMode = 'description' | 'buy'

export interface NavLink {
  label: string
  href: string
}

export interface Testimonial {
  quote: string
  name: string
  designation: string
  location: string
}

export interface Stat {
  value: string
  label: string
}

export interface WhyChooseCard {
  icon: string
  title: string
  description: string
}

export interface FaqItem {
  id: string
  question: string
  answer: string
  category: FaqCategory
}

export type FaqCategory =
  | 'All'
  | 'About Services'
  | 'Payments & Refunds'
  | 'How It Works'
  | 'Technical Support'
  | 'SEBI & Compliance'

export interface TeamMember {
  initials: string
  name: string
  designation: string
  bio: string
}

export type FormStatus = 'idle' | 'loading' | 'success' | 'error'

export interface ApiErrorResponse {
  error: string
}

export interface ApiSuccessResponse {
  success: true
}
