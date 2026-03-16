import type { Metadata } from 'next'
import { Construction } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Legal | FortuneKraft Consultancy',
  description: 'Legal policies, terms of service, and SEBI compliance information for FortuneKraft Consultancy.',
}

export default function LegalPage(): JSX.Element {
  return (
    <div className="min-h-screen bg-[#F8F9FA] pb-24 flex flex-col">
      <section className="bg-gradient-to-br from-[#0A1628] to-[#1a3a5c] pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(240,165,0,0.4) 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-6">Legal & Compliance</h1>
        </div>
      </section>
      
      <div className="flex-grow flex items-center justify-center p-6">
        <div className="bg-white p-12 rounded-2xl shadow-lg border border-gray-100 flex flex-col items-center text-center max-w-md">
          <div className="w-16 h-16 bg-navy/5 rounded-full flex items-center justify-center mb-6">
            <Construction size={32} className="text-gold" />
          </div>
          <h2 className="text-2xl font-display font-bold text-navy mb-3">Coming Soon</h2>
          <p className="text-gray-500">Legal documents and SEBI compliance disclosures are being updated and will be available here shortly.</p>
        </div>
      </div>
    </div>
  )
}
