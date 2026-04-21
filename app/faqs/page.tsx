import type { Metadata } from 'next'
import Link from 'next/link'
import FaqAccordion from '@/components/FaqAccordion'
import { faqs } from '@/lib/faqsData'
import { MessageCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'FAQs | FortuneKraft Consultancy',
  description: 'Frequently asked questions about FortuneKraft Consultancy services, payments, SEBI compliance, and how our equity research works.',
}

export default function FaqsPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* SECTION 1 - HERO */}
      <section className="relative bg-[#0A1628] text-white pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden flex flex-col items-center justify-center min-h-[380px]">
        {/* Abstract Gold Background Elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold opacity-[0.05] rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-gold opacity-[0.03] rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2" />
        
        <div className="container mx-auto px-6 relative z-10 text-center">

          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-6">
            Frequently Asked Questions
          </h1>

          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about FortuneKraft Consultancy
          </p>
        </div>
      </section>

      {/* SECTION 2 - FAQ ACCORDION */}
      <section className="bg-[#f0f4f8] py-20 lg:py-28">
        <div className="container mx-auto px-6 max-w-4xl">
          <FaqAccordion faqs={faqs} />
        </div>
      </section>

      {/* SECTION 3 - STILL HAVE QUESTIONS CTA */}
      <section className="bg-white py-20 lg:py-28 text-center">
        <div className="container mx-auto px-6 max-w-2xl">
          <h2 className="font-display text-3xl md:text-4xl text-[#0A1628] font-bold mb-4">
            Still Have Questions?
          </h2>
          <p className="text-gray-600 text-lg mb-10">
            Can&apos;t find what you&apos;re looking for? Our team is happy to help.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-4 bg-gold hover:bg-gold-light text-[#0A1628] font-bold rounded-xl transition-all hover:scale-105 active:scale-95 text-center"
            >
              Contact Us
            </Link>
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-[#0A1628] hover:bg-[#11233F] text-white font-bold rounded-xl flex items-center justify-center gap-3 transition-all hover:scale-105 active:scale-95"
            >
              <MessageCircle className="w-5 h-5 text-gold" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
