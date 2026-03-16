import type { Metadata } from 'next'
import Link from 'next/link'
import { Eye, Target, CheckCircle2, XCircle } from 'lucide-react'
import { MotionSection } from '@/components/MotionSection'

export const metadata: Metadata = {
  title: 'Investor Charter | Fortune Kraft Consultancy',
  description: 'Investor Charter for Fortune Kraft Consultancy — SEBI registered Research Analyst. Know your rights, responsibilities and grievance redressal mechanism.',
}

export default function InvestorCharterPage() {
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
              <span>Investor Charter</span>
            </div>
          </MotionSection>

          <MotionSection delay={0.1}>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-6">
              Investor Charter
            </h1>
          </MotionSection>

          <MotionSection delay={0.2}>
            <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-6">
              As mandated by SEBI for registered Research Analysts
            </p>
            <div className="inline-flex items-center justify-center px-4 py-2 rounded-full border border-gold bg-gold/10 text-gold text-sm font-semibold tracking-wide">
              SEBI Registered | Reg. No. INH000025221
            </div>
          </MotionSection>
        </div>
      </section>

      {/* SECTION 2 - CONTENT */}
      <section className="py-20 lg:py-28 container mx-auto px-6 max-w-[900px]">
        
        {/* Vision & Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <MotionSection className="bg-[#0A1628] rounded-2xl p-10 relative overflow-hidden shadow-xl flex flex-col items-start h-full">
            <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-6 border border-white/10">
              <Eye className="w-8 h-8 text-gold" />
            </div>
            <h3 className="font-display text-2xl text-white font-bold mb-4">Vision</h3>
            <p className="text-gray-300 text-base leading-relaxed">
              Invest with knowledge & safety.
            </p>
          </MotionSection>

          <MotionSection delay={0.1} className="rounded-2xl p-10 relative overflow-hidden shadow-xl flex flex-col items-start h-full"
            style={{ background: 'linear-gradient(135deg, #F0A500, #FFD166)' }}
          >
            <div className="w-16 h-16 rounded-2xl bg-[#0A1628]/10 flex items-center justify-center mb-6 border border-[#0A1628]/10">
              <Target className="w-8 h-8 text-[#0A1628]" />
            </div>
            <h3 className="font-display text-2xl text-[#0A1628] font-bold mb-4">Mission</h3>
            <p className="text-[#0A1628]/80 text-base leading-relaxed font-medium">
              Every investor should be able to invest in right investment products based on their needs, manage and monitor them to meet their goals, access reports and enjoy financial wellness.
            </p>
          </MotionSection>
        </div>

        {/* Details of Business */}
        <MotionSection delay={0.1} className="mb-16">
          <h2 className="font-display text-3xl text-[#0A1628] font-bold mb-4">Details of Business</h2>
          <div className="w-16 h-1 bg-gold mb-8 rounded-full" />
          <ul className="flex flex-col gap-4">
            {[
              "To publish research report based on the research activities of the RA.",
              "To provide an independent unbiased view on securities.",
              "To offer unbiased recommendation, disclosing the financial interests in recommended securities.",
              "To provide research recommendation, based on analysis of publicly available information and known observations.",
              "To conduct audit annually."
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-gold flex-shrink-0 mt-0.5" />
                <span className="text-[#2A3B54] text-base leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </MotionSection>

        {/* Services Provided */}
        <MotionSection delay={0.1} className="mb-16">
          <h2 className="font-display text-3xl text-[#0A1628] font-bold mb-2">Details of Services Provided to Investors</h2>
          <p className="text-gray-500 text-sm italic mb-6">(No Indicative Timelines)</p>
          <div className="w-16 h-1 bg-gold mb-8 rounded-full" />
          <ul className="flex flex-col gap-4">
            {[
              "Onboarding of Clients.",
              "Disclosure to Clients.",
              "To distribute research reports and recommendations to the clients without discrimination.",
              "To maintain confidentiality w.r.t publication of the research report until made available in the public domain."
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-gold flex-shrink-0 mt-0.5" />
                <span className="text-[#2A3B54] text-base leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </MotionSection>

        {/* Grievance Redressal Mechanism */}
        <MotionSection delay={0.1} className="mb-20">
          <h2 className="font-display text-3xl text-[#0A1628] font-bold mb-4">Grievance Redressal Mechanism</h2>
          <div className="w-16 h-1 bg-gold mb-8 rounded-full" />
          
          <div className="bg-[#0A1628] rounded-xl p-8 mb-8 border-l-4 border-gold shadow-lg">
            <p className="text-white text-lg leading-relaxed font-medium">
              In case of any grievance / complaint, an investor should approach the concerned Research Analyst and shall ensure that the grievance is resolved within 30 days.
            </p>
          </div>

          <p className="text-[#2A3B54] text-base leading-relaxed mb-8">
            If the investor&apos;s complaint is not redressed satisfactorily, one may lodge a complaint with SEBI on SEBI&apos;s SCORES portal which is a centralized web-based complaints redressal system. SEBI takes up the complaints registered via SCORES with the concerned intermediary for timely redressal. SCORES facilitates tracking the status of the complaint.
          </p>

          <a href="https://scores.sebi.gov.in" target="_blank" rel="noopener noreferrer" className="inline-block bg-gold text-navy font-bold px-8 py-4 rounded-full hover:bg-gold-light transition-colors mb-8 shadow-md">
            Visit SEBI SCORES Portal
          </a>

          <div className="bg-[#f0f4f8] rounded-xl p-8 border border-gray-200">
            <h4 className="font-bold text-[#0A1628] mb-2 uppercase tracking-wide text-sm">Physical Complaints Address</h4>
            <p className="text-[#2A3B54] text-base leading-relaxed">
              Office of Investor Assistance and Education, Securities and Exchange Board of India, SEBI Bhavan, Plot No. C4-A, &apos;G&apos; Block, Bandra-Kurla Complex, Bandra (E), Mumbai – 400 051.
            </p>
          </div>
        </MotionSection>

        {/* Expectations from Investors */}
        <MotionSection delay={0.1}>
          <h2 className="font-display text-3xl text-[#0A1628] font-bold mb-4">Responsibilities of Investors</h2>
          <div className="w-16 h-1 bg-gold mb-10 rounded-full" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Do's Card */}
            <div className="bg-[#0A1628] rounded-2xl p-8 lg:p-10 shadow-xl border-t-4 border-green-500">
              <div className="flex items-center gap-3 mb-8">
                <CheckCircle2 className="w-8 h-8 text-green-500" />
                <h3 className="font-display text-2xl text-white font-bold">Do&apos;s</h3>
              </div>
              <ol className="flex flex-col gap-5 text-gray-300 list-decimal list-outside ml-4">
                <li className="pl-2 leading-relaxed">Always deal with SEBI registered Research Analyst.</li>
                <li className="pl-2 leading-relaxed">Ensure that the Research Analyst has a valid registration certificate.</li>
                <li className="pl-2 leading-relaxed">Check for SEBI registration number.</li>
                <li className="pl-2 leading-relaxed">Always pay attention towards disclosures made in the research reports before investing.</li>
                <li className="pl-2 leading-relaxed">Pay your Research Analyst through banking channels only and maintain duly signed receipts mentioning the details of your payments.</li>
                <li className="pl-2 leading-relaxed">Before buying securities or applying in public offer, check for the research recommendation provided by your Research Analyst.</li>
                <li className="pl-2 leading-relaxed">Ask all relevant questions and clear your doubts with your Research Analyst before acting on the recommendation.</li>
                <li className="pl-2 leading-relaxed">Inform SEBI about Research Analyst offering assured or guaranteed returns.</li>
              </ol>
            </div>

            {/* Don'ts Card */}
            <div className="bg-[#0A1628] rounded-2xl p-8 lg:p-10 shadow-xl border-t-4 border-red-500">
              <div className="flex items-center gap-3 mb-8">
                <XCircle className="w-8 h-8 text-red-500" />
                <h3 className="font-display text-2xl text-white font-bold">Don&apos;ts</h3>
              </div>
              <ol className="flex flex-col gap-5 text-gray-300 list-decimal list-outside ml-4">
                <li className="pl-2 leading-relaxed">Do not provide funds for investment to the Research Analyst.</li>
                <li className="pl-2 leading-relaxed">Don&apos;t fall prey to luring advertisements or market rumours.</li>
                <li className="pl-2 leading-relaxed">Do not get attracted to limited period discount or other incentive, gifts, etc. offered by Research Analyst.</li>
                <li className="pl-2 leading-relaxed">Do not share login credentials and password of your trading and demat accounts with the Research Analyst.</li>
              </ol>
            </div>
          </div>
        </MotionSection>

      </section>
    </div>
  )
}
