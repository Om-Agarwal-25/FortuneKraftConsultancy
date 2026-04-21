import type { Metadata } from 'next'
import { ExternalLink } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Payment Information | Fortune Kraft Consultancy',
  description: 'SEBI-validated UPI ID and payment information for Fortune Kraft Consultancy.',
}

const FAQS = [
  {
    question: 'Is it compulsory for the investors to use the new handle only?',
    answer:
      'The investors can choose their preferred mode of payment, such as UPI, IMPS, NEFT, RTGS, or Cheques. If an investor opts to use UPI for the payment to registered intermediaries, then they have to do so only using the new UPI IDs allotted to registered intermediaries.',
  },
  {
    question: 'What should I check while making payment using the new UPI IDs/QR Code?',
    answer:
      'Investors need to keep the following things into consideration: 1. The UPI ID should properly show the name of the intermediary, followed by the short abbreviation of their category. 2. On the right side of the "@", the new and exclusive handle "@valid" should be present, followed by the bank name. 3. On the confirmation screen, the app should show a white thumbs-up icon inside a green triangle. 4. The QR code generated using the utility will have a white thumbs-up icon inside a green triangle.',
  },
  {
    question: 'Do investors also need to obtain new UPI handles to transact in the securities market?',
    answer:
      'No, the new UPI IDs are only for intermediaries to obtain and investors can continue to use their existing UPI IDs.',
  },
  {
    question: 'Whom to approach if my transaction/payment fails with the new UPI ID?',
    answer:
      'The secure validated UPI ID of intermediaries will use the same banking channel as the earlier generic UPI handles. In case of any technical difficulty, investors are requested to approach their respective bank.',
  },
]

export default function PaymentInfoPage() {
  return (
    <div className="bg-[#F8F9FA] min-h-screen font-sans">
      {/* HERO */}
      <section className="relative bg-gradient-to-b from-[#0A1628] to-[#112440] text-white pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden flex flex-col items-center justify-center min-h-[380px]">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#F0A500] opacity-[0.05] rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#F0A500] opacity-[0.03] rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2" />
        <div className="container mx-auto px-6 relative z-10 text-center">

          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-6">
            Payment Information
          </h1>
          <p className="text-gray-300 max-w-xl mx-auto text-lg">
            SEBI-validated UPI ID and secure payment instructions.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-16 lg:py-24 container mx-auto px-6 max-w-[880px]">

        {/* Important Announcement */}
        <div className="bg-[#0A1628] border border-[#F0A500]/30 rounded-2xl p-8 md:p-10 mb-10">
          <h2 className="font-display text-2xl text-[#F0A500] font-bold mb-6">Dear Investors,</h2>
          <p className="text-white/90 text-[15px] leading-relaxed mb-4">
            We would like to inform you that we have obtained a SEBI-validated UPI ID handle for secure payment collection, as mandated by SEBI.
          </p>
          <p className="text-white/90 text-[15px] leading-relaxed">
            For any UPI payment, you can make the payment on the following validated UPI ID:
          </p>
        </div>

        {/* UPI ID Box */}
        <div className="border-2 border-[#F0A500] rounded-2xl p-8 text-center bg-white mb-10 shadow-sm">
          <p className="text-[#0A1628]/50 text-sm mb-2 uppercase tracking-widest font-semibold">SEBI Validated UPI ID</p>
          <p className="font-display text-2xl md:text-3xl text-[#0A1628] font-bold my-4">
            [UPI ID — to be updated by client]
          </p>
          <p className="text-[#0A1628]/50 text-xs mt-2">This UPI ID is validated by SEBI</p>
        </div>

        {/* FAQs */}
        <div className="bg-white rounded-2xl p-8 md:p-10 shadow-sm mb-10">
          <h3 className="font-display text-2xl text-[#0A1628] font-bold mb-4">Frequently Asked Questions</h3>
          <div className="w-20 h-1 bg-[#F0A500] mb-8" />
          <div className="flex flex-col divide-y divide-gray-100">
            {FAQS.map((faq, index) => (
              <div key={index} className="py-6">
                <p className="text-[#0A1628] font-semibold text-[15px] mb-3">{faq.question}</p>
                <p className="text-[#23344E] text-[14px] leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* SEBI Verification */}
        <div className="bg-white rounded-2xl p-8 md:p-10 shadow-sm border-t-4 border-[#F0A500]">
          <h3 className="font-display text-2xl text-[#0A1628] font-bold mb-4">Verify Our UPI ID</h3>
          <div className="w-20 h-1 bg-[#F0A500] mb-6" />
          <p className="text-[#23344E] text-[15px] leading-relaxed mb-8">
            For complete transparency, investors may verify whether the UPI ID shared by us is official and SEBI-validated by visiting the link below:
          </p>
          <a
            href="https://siportal.sebi.gov.in/intermediary/sebi-check"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#F0A500] text-[#0A1628] font-bold px-8 py-3 rounded-full hover:bg-[#d99500] transition-colors"
          >
            Verify on SEBI Portal <ExternalLink size={16} />
          </a>
        </div>

      </section>
    </div>
  )
}
