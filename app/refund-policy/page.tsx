import type { Metadata } from 'next';
import Link from 'next/link';
import { Phone, Mail } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Refund Policy | Fortune Kraft Consultancy',
  description: 'Refund policy for Fortune Kraft Consultancy research analyst services.',
}

export default function RefundPolicyPage() {
  const policyPoints = [
    "All sales are final, and we do not offer refunds for the paid period of services already availed by the client. Complaints or dissatisfaction regarding the quality of services during the paid period shall not entitle the client to any refund or compensation.",
    "As per SEBI guidelines, if a client requests to cancel the subscription, a refund shall only be issued for the unused portion of the subscription period. The refund will be calculated on a pro-rata basis, deducting the charges for the services already availed, including applicable taxes and administrative fees.",
    "Refunds will not be provided for the period of services already availed, irrespective of the client's satisfaction with the recommendations or the outcome of trades.",
    "Investment in securities markets are subject to market risks. Profits and losses incurred due to the use of our recommendations are solely the responsibility of the client."
  ];

  return (
    <div className="bg-[#F8F9FA] min-h-screen font-sans">
      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-b from-[#0A1628] to-[#112440] text-white pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden flex flex-col items-center justify-center min-h-[380px]">
        {/* Abstract Gold Background Elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#F0A500] opacity-[0.05] rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#F0A500] opacity-[0.03] rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2" />

        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="text-[#F0A500] text-sm font-semibold tracking-widest uppercase mb-4 flex items-center justify-center gap-2">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="text-white/50">&gt;</span>
            <span>Refund Policy</span>
          </div>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-6">
            Refund Policy
          </h1>
        </div>
      </section>

      {/* CONTENT SECTION */}
      <section className="py-16 lg:py-24 container mx-auto px-6 max-w-[900px]">
        {/* Header Card */}
        <div className="bg-[#0A1628] rounded-2xl p-8 md:p-12 mb-12 shadow-md">
          <p className="text-[#F0A500] text-lg md:text-xl font-medium leading-relaxed text-center">
            All sales are final, and we do not offer refunds for the paid period of services already availed by the client.
          </p>
        </div>

        {/* Policy Cards */}
        <div className="flex flex-col gap-6 mb-12">
          {policyPoints.map((text, i) => (
            <div key={i} className="bg-white rounded-xl p-8 shadow-sm border-l-4 border-[#F0A500] flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-[#F0A500]/10 text-[#F0A500] font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                {i + 1}
              </div>
              <p className="text-[#23344E] text-[15px] leading-relaxed">
                {text}
              </p>
            </div>
          ))}
        </div>

        {/* Acceptance Card */}
        <div className="bg-[#0A1628] rounded-2xl p-8 md:p-12 mb-12 shadow-md border border-[#F0A500]/30">
          <p className="text-white/90 text-[15px] leading-relaxed text-center">
            By subscribing to our services and making payment, the client acknowledges that they have read, understood, and agreed to the refund policy, as well as the disclaimer, disclosure, and other terms mentioned on our website.
          </p>
        </div>

        {/* Contact Section */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm text-center">
          <h3 className="font-display text-2xl text-[#0A1628] font-bold mb-4">Need Assistance?</h3>
          <div className="w-16 h-1 bg-[#F0A500] mx-auto mb-6" />
          <p className="text-[#23344E] text-[15px] leading-relaxed mb-8">
            For any questions or assistance regarding our refund policy, please contact us:
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a href="tel:+917030151276" className="flex items-center gap-3 text-[#0A1628] hover:text-[#F0A500] transition-colors font-medium bg-[#F8F9FA] px-6 py-3 rounded-full border border-gray-100">
              <Phone className="w-5 h-5 text-[#F0A500]" />
              +91 7030151276
            </a>
            <a href="https://mail.google.com/mail/?view=cm&to=foturnkraftconsultancy@gmail.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-[#0A1628] hover:text-[#F0A500] transition-colors font-medium bg-[#F8F9FA] px-6 py-3 rounded-full border border-gray-100">
              <Mail className="w-5 h-5 text-[#F0A500]" />
              foturnkraftconsultancy@gmail.com
            </a>
          </div>
        </div>

      </section>
    </div>
  )
}
