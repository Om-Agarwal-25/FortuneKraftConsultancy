import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms & Conditions | Fortune Kraft Consultancy',
  description: 'Terms and conditions for using Fortune Kraft Consultancy research services.',
}

export default function TermsAndConditionsPage() {
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
            <span>Terms & Conditions</span>
          </div>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-6">
            Terms & Conditions
          </h1>
        </div>
      </section>

      {/* CONTENT SECTION */}
      <section className="py-16 lg:py-24 container mx-auto px-6 max-w-[900px]">
        {/* Header Card */}
        <div className="bg-[#0A1628] rounded-2xl p-8 md:p-12 mb-12 shadow-md">
          <h2 className="text-[#F0A500] font-display font-bold text-2xl md:text-3xl mb-4">Terms & Conditions — Ritesh Agarwal Proprietor of Fortunekraft Consultancy</h2>
          <div className="w-20 h-1 bg-[#F0A500] mb-6" />
          <p className="text-white/90 text-[15px] leading-relaxed">
            By accessing and using this website or availing any of our services, you agree to be bound by the following terms and conditions.
          </p>
        </div>

        {/* Section 1 */}
        <div className="bg-white rounded-2xl p-8 md:p-12 mb-8 shadow-sm">
          <h3 className="font-display text-2xl text-[#0A1628] font-bold mb-4">1. Use of Website and Services</h3>
          <div className="w-20 h-1 bg-[#F0A500] mb-6" />
          <p className="text-[#23344E] text-[15px] leading-relaxed">
            The free trial services offered by Ritesh Agarwal Proprietor of Fortunekraft Consultancy are intended solely for demonstration purposes. Any action taken based on such trial recommendations is at the sole discretion and risk of the user.
          </p>
        </div>

        {/* Section 2 */}
        <div className="bg-white rounded-2xl p-8 md:p-12 mb-8 shadow-sm">
          <h3 className="font-display text-2xl text-[#0A1628] font-bold mb-4">2. Research and Recommendations</h3>
          <div className="w-20 h-1 bg-[#F0A500] mb-6" />
          <p className="text-[#23344E] text-[15px] leading-relaxed">
            All research-based recommendations are provided based on the subscription package chosen by the client. Our research team employs thorough technical and fundamental analysis to offer these insights. However, clients are advised to exercise their own judgment. The firm bears no responsibility for any gains or losses incurred as a result of acting upon these recommendations.
          </p>
        </div>

        {/* Section 3 */}
        <div className="bg-white rounded-2xl p-8 md:p-12 mb-8 shadow-sm">
          <h3 className="font-display text-2xl text-[#0A1628] font-bold mb-4">3. Market Risk Disclaimer</h3>
          <div className="w-20 h-1 bg-[#F0A500] mb-6" />
          <p className="text-[#23344E] text-[15px] leading-relaxed mb-4">
            Stock market investment and trading inherently involve risks.
          </p>
          <ul className="flex flex-col gap-3 mb-4">
            {["Market fluctuations", "Delays in receiving recommendations", "Technical or communication issues", "Inaccuracies or omissions in the shared information"].map((item, i) => (
              <li key={i} className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-[#F0A500] mt-2 flex-shrink-0" />
                <span className="text-[#23344E] text-[15px] leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-[#23344E] text-[15px] leading-relaxed">
            Clients are expected to make informed decisions and assume full responsibility for their trading activities.
          </p>
        </div>

        {/* Section 4 */}
        <div className="bg-white rounded-2xl p-8 md:p-12 mb-8 shadow-sm">
          <h3 className="font-display text-2xl text-[#0A1628] font-bold mb-4">4. Confidentiality and Data Sharing</h3>
          <div className="w-20 h-1 bg-[#F0A500] mb-6" />
          <p className="text-[#23344E] text-[15px] leading-relaxed">
            All research reports, strategies, and communication are strictly confidential. Sharing or distributing this content in any form is prohibited. Any such act will be considered a breach of confidentiality and may invite legal action.
          </p>
        </div>

        {/* Section 5 */}
        <div className="bg-white rounded-2xl p-8 md:p-12 mb-8 shadow-sm">
          <h3 className="font-display text-2xl text-[#0A1628] font-bold mb-4">5. Code of Conduct – Staff and Clients</h3>
          <div className="w-20 h-1 bg-[#F0A500] mb-6" />
          <p className="text-[#23344E] text-[15px] leading-relaxed">
            No employee or associate of the company is permitted to solicit or accept personal gifts, benefits, or payments from clients. All payments related to services must be made only to the official bank account listed on our website. Personal transfers are not authorized and will not be recognized.
          </p>
        </div>

        {/* Section 6 */}
        <div className="bg-white rounded-2xl p-8 md:p-12 mb-8 shadow-sm">
          <h3 className="font-display text-2xl text-[#0A1628] font-bold mb-4">6. Account Security</h3>
          <div className="w-20 h-1 bg-[#F0A500] mb-6" />
          <p className="text-[#23344E] text-[15px] leading-relaxed">
            Ritesh Agarwal Proprietor of Fortunekraft Consultancy does not operate or manage client Demat or trading accounts. Clients must not share their login credentials, including User ID, password, security questions, or OTPs with any of our representatives. We disclaim liability for any loss or misuse resulting from the disclosure of such information.
          </p>
        </div>

        {/* Section 7 */}
        <div className="bg-white rounded-2xl p-8 md:p-12 mb-8 shadow-sm">
          <h3 className="font-display text-2xl text-[#0A1628] font-bold mb-4">7. Policy Updates</h3>
          <div className="w-20 h-1 bg-[#F0A500] mb-6" />
          <p className="text-[#23344E] text-[15px] leading-relaxed">
            We reserve the right to update, amend, or revise these terms and conditions at any time without prior notice. Updated terms will be effective immediately upon being posted on the website. Continued use of the website implies acceptance of the updated terms.
          </p>
        </div>

        {/* Section 8 Disclaimer */}
        <div className="bg-white rounded-2xl p-8 md:p-12 mb-8 shadow-sm border-l-4 border-[#F0A500]">
          <h3 className="font-display text-2xl text-[#0A1628] font-bold mb-4">8. Disclaimer</h3>
          <div className="w-20 h-1 bg-[#F0A500] mb-6" />
          <p className="text-[#23344E] text-[15px] leading-relaxed">
            The content, research reports, and investment ideas shared on this website are for general informational purposes only. Nothing contained herein shall be construed as financial advice or a solicitation to buy or sell any securities. Users are solely responsible for their investment decisions and outcomes.
          </p>
        </div>

        {/* Section 9 */}
        <div className="bg-white rounded-2xl p-8 md:p-12 mb-8 shadow-sm">
          <h3 className="font-display text-2xl text-[#0A1628] font-bold mb-4">9. Intellectual Property</h3>
          <div className="w-20 h-1 bg-[#F0A500] mb-6" />
          <p className="text-[#23344E] text-[15px] leading-relaxed">
            All research material, content, and recommendations available on this website are intended for personal use only. Unauthorized reproduction, distribution, or commercial use of any content without prior written consent from Ritesh Agarwal Proprietor of Fortunekraft Consultancy is strictly prohibited.
          </p>
        </div>

        {/* Section 10 */}
        <div className="bg-[#0A1628] rounded-2xl p-8 md:p-12 shadow-md">
          <h3 className="font-display text-2xl text-[#F0A500] font-bold mb-4">10. Acceptance</h3>
          <div className="w-20 h-1 bg-[#F0A500] mb-6" />
          <p className="text-white/90 text-[15px] leading-relaxed">
            By continuing to access and use this website, you confirm that you have read, understood, and agree to abide by these Terms & Conditions, including your acknowledgment of the risks involved in trading and investment activities.
          </p>
        </div>

      </section>
    </div>
  )
}
