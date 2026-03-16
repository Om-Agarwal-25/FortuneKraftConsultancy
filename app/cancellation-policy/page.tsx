import type { Metadata } from 'next'
import Link from 'next/link'
import { MotionSection } from '@/components/MotionSection'
import { CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Cancellation & Refund Policy | Fortune Kraft Consultancy',
  description: 'Cancellation and refund policy for Fortune Kraft Consultancy research analyst services.',
}

export default function CancellationPolicyPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* SECTION 1 - HERO */}
      <section className="relative bg-[#0A1628] text-white pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden flex flex-col items-center justify-center min-h-[380px]">
        {/* Abstract Gold Background Elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold opacity-[0.05] rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-gold opacity-[0.03] rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2" />

        <div className="container mx-auto px-6 relative z-10 text-center">
          <MotionSection>
            <div className="text-gold text-sm font-semibold tracking-widest uppercase mb-4 flex items-center justify-center gap-2">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span className="text-white/50">&gt;</span>
              <span>Cancellation Policy</span>
            </div>
          </MotionSection>

          <MotionSection delay={0.1}>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-6">
              Cancellation & Refund Policy
            </h1>
          </MotionSection>

          <MotionSection delay={0.2}>
            <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-6">
              Please read our cancellation and refund terms carefully before subscribing
            </p>
          </MotionSection>
        </div>
      </section>

      {/* SECTION 2 - CONTENT */}
      <section className="py-20 lg:py-28 container mx-auto px-6 max-w-[900px]">
        
        {/* Overview card */}
        <MotionSection className="bg-[#0A1628] rounded-2xl p-8 md:p-12 mb-16 shadow-xl relative overflow-hidden">
           <div className="relative z-10">
            <p className="text-white font-medium text-lg md:text-xl leading-relaxed mb-6">
              At Fortune Kraft Consultancy, we strive to ensure complete satisfaction with our research and advisory services. Please read our cancellation and refund policy carefully before subscribing to any of our plans.
            </p>
            <p className="text-gold/80 text-sm font-semibold tracking-wide">Last updated: January 2025</p>
          </div>
        </MotionSection>

        {/* Cancellation Policy */}
        <MotionSection delay={0.1} className="mb-16">
          <h3 className="font-display text-3xl text-[#0A1628] font-bold mb-4">Cancellation Policy</h3>
          <div className="w-16 h-1 bg-gold mb-8 rounded-full" />
          <ul className="flex flex-col gap-5">
            {[
              "Cancellation requests must be submitted via email to fortunekraftconcultancy@gmail.com or via WhatsApp before the service activation date.",
              "Once a service plan has been activated and research calls have been delivered, the subscription cannot be cancelled.",
              "For monthly plans, cancellation requests submitted within 24 hours of payment and before any calls are delivered will be considered for a full refund.",
              "Demo services are non-cancellable and non-refundable once activated."
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-gold flex-shrink-0 mt-0.5" />
                <span className="text-[#2A3B54] text-[16px] leading-relaxed font-medium">{item}</span>
              </li>
            ))}
          </ul>
        </MotionSection>

        {/* Refund Policy Table */}
        <MotionSection delay={0.1} className="mb-16">
          <h3 className="font-display text-3xl text-[#0A1628] font-bold mb-4">Refund Policy</h3>
          <div className="w-16 h-1 bg-gold mb-8 rounded-full" />
          
          <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#0A1628] text-white">
                  <th className="p-4 font-bold border-b border-gray-300">Scenario</th>
                  <th className="p-4 font-bold border-b border-gray-300">Refund Amount</th>
                  <th className="p-4 font-bold border-b border-gray-300">Processing Time</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b border-gray-100">
                  <td className="p-4 text-[#2A3B54] font-medium">Cancellation before activation</td>
                  <td className="p-4 text-[#0A1628] font-semibold">100% Refund</td>
                  <td className="p-4 text-gray-500">7–10 Business Days</td>
                </tr>
                <tr className="bg-[#f8f9fa] border-b border-gray-100">
                  <td className="p-4 text-[#2A3B54] font-medium">Cancellation within 24hrs of activation (no calls delivered)</td>
                  <td className="p-4 text-[#0A1628] font-semibold">80% Refund</td>
                  <td className="p-4 text-gray-500">7–10 Business Days</td>
                </tr>
                <tr className="bg-white border-b border-gray-100">
                  <td className="p-4 text-[#2A3B54] font-medium">Cancellation after first call delivered</td>
                  <td className="p-4 text-red-600 font-semibold">No Refund</td>
                  <td className="p-4 text-gray-500">—</td>
                </tr>
                <tr className="bg-[#f8f9fa]">
                  <td className="p-4 text-[#2A3B54] font-medium">Demo service cancellation</td>
                  <td className="p-4 text-red-600 font-semibold">No Refund</td>
                  <td className="p-4 text-gray-500">—</td>
                </tr>
              </tbody>
            </table>
          </div>
        </MotionSection>

        {/* How to Request a Refund */}
        <MotionSection delay={0.1} className="mb-16">
          <h3 className="font-display text-3xl text-[#0A1628] font-bold mb-4">How to Request a Refund</h3>
          <div className="w-16 h-1 bg-gold mb-8 rounded-full" />
          
          <div className="flex flex-col gap-6">
            {[
              "Send an email to fortunekraftconcultancy@gmail.com with subject line: 'Refund Request — [Your Name] — [Plan Name]'",
              "Include your registered phone number, payment reference number, and reason for cancellation.",
              "Our team will review your request within 2 business days and respond with the decision.",
              "Approved refunds will be processed to the original payment method within 7–10 business days."
            ].map((step, i) => (
              <div key={i} className="flex flex-col sm:flex-row gap-4 sm:items-start bg-[#f0f4f8] p-6 rounded-xl border border-gray-200">
                <div className="w-10 h-10 rounded-full bg-gold/10 text-gold flex items-center justify-center font-bold text-lg flex-shrink-0 border border-gold/20">
                  {i + 1}
                </div>
                <p className="text-[#2A3B54] text-base leading-relaxed pt-1.5 font-medium">{step}</p>
              </div>
            ))}
          </div>
        </MotionSection>

        {/* Important Notes */}
        <MotionSection delay={0.1}>
          <h3 className="font-display text-3xl text-[#0A1628] font-bold mb-4">Important Notes</h3>
          <div className="w-16 h-1 bg-gold mb-8 rounded-full" />
          
          <div className="bg-[#0A1628] rounded-xl p-8 border-l-4 border-gold shadow-lg flex flex-col gap-4">
            <p className="text-gray-300 text-base leading-relaxed">
              <span className="text-gold font-bold mr-2">•</span> Fortune Kraft Consultancy reserves the right to modify this policy at any time. Clients will be notified of significant changes via email or WhatsApp.
            </p>
            <p className="text-gray-300 text-base leading-relaxed">
              <span className="text-gold font-bold mr-2">•</span> In case of any disputes regarding refunds, the decision of Fortune Kraft Consultancy shall be final and binding.
            </p>
            <p className="text-gray-300 text-base leading-relaxed font-medium">
              <span className="text-gold font-bold mr-2">•</span> For any queries related to cancellations or refunds, please contact us at <a href="mailto:fortunekraftconcultancy@gmail.com" className="text-white hover:text-gold transition-colors">fortunekraftconcultancy@gmail.com</a> or call <a href="tel:+917030151276" className="text-white hover:text-gold transition-colors">+91 70301 51276</a>.
            </p>
          </div>
        </MotionSection>

      </section>
    </div>
  )
}
