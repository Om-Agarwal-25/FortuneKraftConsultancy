import type { Metadata } from 'next'
import Link from 'next/link'
import { MotionSection } from '@/components/MotionSection'

export const metadata: Metadata = {
  title: 'Disclosure | FortuneKraft Consultancy',
  description: 'Disclosure document for FortuneKraft Consultancy as per SEBI Research Analyst Regulations 2014. Registration No. INH000025221.',
}

export default function DisclosurePage() {
  const disclosures = [
    "Research Analyst or his associate or his relative may have financial interest or actual / beneficial ownership of one per cent or more in the securities recommended in its personal portfolio at the end of the month immediately preceding the date of publication of the research report or date of the public appearance.",
    "There are no actual or potential conflicts of interest arising from any connection of or Research Analyst or his associate or his relative to or association with any issuer of products/securities, including any material information or facts that might compromise its objectivity or independence in the carrying on of Research Analyst services.",
    "Research analyst or its associates or relatives, may have actual/beneficial ownership of one per cent or more securities of the subject company, at the end of the month immediately preceding the date of publication of the research report or date of the public appearance or research recommendation.",
    "Research analyst or its associate or relatives has no connection or association of any sort with any issuer of products/securities recommended herein.",
    "Research analyst or his associate or his relative has no actual or potential conflicts of interest arising from any connection to or association with any issuer of products/securities, including any material information or facts that might compromise its objectivity or independence in the carrying on of research and recommendations services.",
    "Research analyst or its associates has not received any kind of remuneration or consideration from the products/securities recommended herein.",
    "Research analyst or its associates have not received any compensation from the subject company to the research in past 12 months.",
    "Research analyst or its associates have not managed or co-managed the public offering of Subject Company to the research in past 12 months.",
    "Research analyst or its associates have not received any compensation for investment banking or merchant banking or brokerage services from the subject company to the research in past 12 months.",
    "Research analyst or its associates have not received any compensation for products or services other than investment banking or merchant banking or brokerage services from the subject company to the research in the past twelve months.",
    "Research analyst or its associates have not received any compensation or other benefits from the subject company to the research or third party in connection with the research report or research recommendations.",
    "Research analyst or its associates have not received any compensation for products or services from the subject company to the research in past 12 months.",
    "The subject company to the research is or was not a client of Research analyst or its associates during twelve months preceding the date of distribution of the research report and recommendation services provided.",
    "Research Analysts or its associates has not served as an officer, director or employee of the subject company.",
    "Research Analysts has not been engaged in market making activity of the subject company."
  ];

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
              <span>Disclosure</span>
            </div>
          </MotionSection>

          <MotionSection delay={0.1}>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-6">
              Disclosure Document
            </h1>
          </MotionSection>

          <MotionSection delay={0.2}>
            <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-6">
              As per SEBI (Research Analyst) Regulations, 2014
            </p>
            <div className="inline-flex items-center justify-center px-4 py-2 rounded-full border border-gold bg-gold/10 text-gold text-sm font-semibold tracking-wide">
              Reg. No. INH000025221
            </div>
          </MotionSection>
        </div>
      </section>

      {/* SECTION 2 - CONTENT */}
      <section className="py-20 lg:py-28 container mx-auto px-6 max-w-[900px]">

        {/* Header info card */}
        <MotionSection className="bg-[#0A1628] rounded-2xl p-8 md:p-12 mb-16 shadow-xl">
          <h2 className="text-gold font-bold text-2xl md:text-3xl mb-2">SEBI Registered Research Analyst</h2>
          <p className="text-white font-medium text-lg mb-8 tracking-wide">Registration No. INH000025221</p>
          <div className="w-full h-px bg-white/10 mb-8" />
          <div className="flex flex-col gap-4 text-white/70 text-base leading-relaxed">
            <p>The particulars given in this Disclosure Document have been prepared in accordance with SEBI (Research Analyst) Regulations, 2014.</p>
            <p>The purpose of this Document is to provide essential information about the Research and recommendation Services in a manner to assist and enable the perspective client/client in making an informed decision for engaging in Research and recommendation Services before investing.</p>
          </div>
        </MotionSection>

        {/* About the Research Analyst */}
        <MotionSection delay={0.1} className="mb-16">
          <h3 className="font-display text-3xl text-[#0A1628] font-bold mb-4">About the Research Analyst</h3>
          <div className="w-16 h-1 bg-gold mb-8 rounded-full" />
          <p className="text-[#2A3B54] text-base leading-relaxed mb-6">
            For the purpose of this Disclosure Document, Research Analyst is Ritesh Agarwal.
          </p>
          <h4 className="text-lg text-[#0A1628] font-bold mb-3">History, Present Business and Background</h4>
          <div className="flex flex-col gap-4 text-[#2A3B54] text-base leading-relaxed">
            <p>Ritesh Agarwal is registered with SEBI as Research Analyst with Registration No. INH000025221. The firm got its registration on November 17, 2023 and is engaged in research and recommendation Services.</p>
            <p>The focus of Research Analyst is to provide research and recommendations services to the clients. Analyst aligns its interests with those of the client and seeks to provide the best suited services.</p>
          </div>
        </MotionSection>

        {/* Terms and Conditions */}
        <MotionSection delay={0.1} className="mb-16">
          <h3 className="font-display text-3xl text-[#0A1628] font-bold mb-4">Terms and Conditions of Research and Recommendation Services</h3>
          <div className="w-16 h-1 bg-gold mb-8 rounded-full" />
          <p className="text-[#2A3B54] text-base leading-relaxed mb-6">
            Terms and conditions of Research and Recommendation Services are detailed in the terms and condition document. Please refer to the same for details.
          </p>
          <Link href="/legal" className="inline-block border-2 border-gold text-gold hover:bg-gold hover:text-navy font-bold px-8 py-3 rounded-full transition-colors">
            View Terms & Conditions
          </Link>
        </MotionSection>

        {/* Disciplinary History */}
        <MotionSection delay={0.1} className="mb-16">
          <h3 className="font-display text-3xl text-[#0A1628] font-bold mb-4">Disciplinary History</h3>
          <div className="w-16 h-1 bg-gold mb-8 rounded-full" />
          <div className="bg-green-50 rounded-xl p-6 border-l-4 border-green-500 text-green-800 text-base leading-relaxed font-medium">
            There are no pending material litigations or legal proceedings, findings of inspections or investigations for which action has been taken or initiated by any regulatory authority against the Research Analyst or its associates or relatives.
          </div>
        </MotionSection>

        {/* Details of Associates */}
        <MotionSection delay={0.1} className="mb-16">
          <h3 className="font-display text-3xl text-[#0A1628] font-bold mb-4">Details of Associates</h3>
          <div className="w-16 h-1 bg-gold mb-8 rounded-full" />
          <p className="text-[#2A3B54] text-lg leading-relaxed font-medium">No Associates.</p>
        </MotionSection>

        {/* Disclosures  */}
        <MotionSection delay={0.1} className="mb-10">
          <h3 className="font-display text-3xl text-[#0A1628] font-bold mb-4">Disclosures</h3>
          <div className="w-16 h-1 bg-gold mb-8 rounded-full" />
          <ul className="flex flex-col gap-6">
            {disclosures.map((item, i) => (
              <li key={i} className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-gold mt-2 flex-shrink-0" />
                <span className="text-[#2A3B54] text-[15px] leading-relaxed opacity-90">{item}</span>
              </li>
            ))}
          </ul>
        </MotionSection>

      </section>
    </div>
  )
}
