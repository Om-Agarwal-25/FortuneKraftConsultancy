import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Disclosure | Fortune Kraft Consultancy',
  description: 'Disclosure document for Fortune Kraft Consultancy as per SEBI Research Analyst Regulations 2014.',
}

export default function DisclosurePage() {
  const disclosures = [
    "The Research Analyst or any of its officer/employee does not trade in securities which are subject matter of recommendation.",
    "There are no actual or potential conflicts of interest arising from any connection to or association with any issuer of products/securities, including any material information or facts that might compromise its objectivity or independence in the carrying on of Research Analyst services. Such conflict of interest shall be disclosed to the client as and when they arise.",
    "Research Analyst or its employee or its associates have not received any compensation from the company which is subject matter of recommendation.",
    "Research Analyst or its employee or its associates have not managed or co-managed the public offering of any company.",
    "Research Analyst or its employee or its associates have not received any compensation for investment banking or merchant banking of brokerage services from the subject company.",
    "Research Analyst or its employee or its associates have not received any compensation for products or services other than above from the subject company.",
    "Research Analyst or its employee or its associates have not received any compensation or other benefits from the Subject Company or 3rd party in connection with the research report/recommendation.",
    "The subject company was not a client of Research Analyst or its employee or its associates during twelve months preceding the date of recommendation services provided.",
    "Research Analysts or its employee or its associates has not served as an officer, director or employee of the subject company.",
    "Research Analysts has not been engaged in market making activity of the subject company."
  ];

  return (
    <div className="bg-[#F8F9FA] min-h-screen font-sans">
      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-b from-[#0A1628] to-[#112440] text-white pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden flex flex-col items-center justify-center min-h-[380px]">
        {/* Abstract Gold Background Elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#F0A500] opacity-[0.05] rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#F0A500] opacity-[0.03] rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2" />

        <div className="container mx-auto px-6 relative z-10 text-center">

          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-6">
            Disclosure
          </h1>
        </div>
      </section>

      {/* CONTENT SECTION */}
      <section className="py-16 lg:py-24 container mx-auto px-6 max-w-[900px]">
        {/* Header Card */}
        <div className="bg-[#0A1628] rounded-2xl p-8 md:p-12 mb-8 shadow-md">
          <p className="text-white/90 text-[15px] leading-relaxed">
            The purpose of the document is to provide essential information about the Research Services in a manner to assist and enable the prospective client/client in making an informed decision for engaging in Research services before onboarding.
          </p>
        </div>

        {/* Section 1 */}
        <div className="bg-white rounded-2xl p-8 md:p-12 mb-8 shadow-sm">
          <h3 className="font-display text-2xl text-[#0A1628] font-bold mb-4">History, Present Business and Background</h3>
          <div className="w-20 h-1 bg-[#F0A500] mb-6" />
          <p className="text-[#23344E] text-[15px] leading-relaxed">
            Ritesh Agarwal Proprietor of Fortunekraft Consultancy, is registered with SEBI as Research Analyst with registration no. INH000025221. The Research Analyst got its registration on Mar 02, 2026 and is engaged in offering research and recommendation services.
          </p>
        </div>

        {/* Section 2 */}
        <div className="bg-white rounded-2xl p-8 md:p-12 mb-8 shadow-sm">
          <h3 className="font-display text-2xl text-[#0A1628] font-bold mb-4">Terms and Conditions of Research Services</h3>
          <div className="w-20 h-1 bg-[#F0A500] mb-6" />
          <div className="flex flex-col gap-6 w-full">
            <div className="bg-[#F8F9FA] rounded-xl p-6 border border-gray-100">
              <p className="text-[#23344E] text-[15px] leading-relaxed">
                The Research Services will be limited to providing independent research recommendation and shall not be involved in any advisory or portfolio allocation services.
              </p>
            </div>
            <div className="bg-[#F8F9FA] rounded-xl p-6 border border-gray-100">
              <p className="text-[#23344E] text-[15px] leading-relaxed">
                The Research Analyst never guarantees the returns on the recommendation provided. Investor shall take note that Investment/trading in stocks/Index or other securities is always subject to market risk. Past performance is never a guarantee of same future results. The Research Analyst shall not be responsible for any loss to the Investors.
              </p>
            </div>
          </div>
        </div>

        {/* Section 3 */}
        <div className="bg-white rounded-2xl p-8 md:p-12 mb-8 shadow-sm">
          <h3 className="font-display text-2xl text-[#0A1628] font-bold mb-4">Disciplinary History</h3>
          <div className="w-20 h-1 bg-[#F0A500] mb-6" />
          <div className="bg-green-50 rounded-xl p-6 border-l-4 border-green-500 text-green-800 text-[15px] leading-relaxed font-medium">
            There are no pending material litigations or legal proceedings against the Research Analyst. As on date, no penalties / directions have been issued by SEBI under the SEBI Act or Regulations made there under against the Research Analyst relating to Research Analyst services.
          </div>
        </div>

        {/* Section 4 */}
        <div className="bg-white rounded-2xl p-8 md:p-12 mb-8 shadow-sm">
          <h3 className="font-display text-2xl text-[#0A1628] font-bold mb-4">Details of Associates</h3>
          <div className="w-20 h-1 bg-[#F0A500] mb-6" />
          <p className="text-[#23344E] text-[15px] leading-relaxed">No associates.</p>
        </div>

        {/* Section 5 */}
        <div className="bg-white rounded-2xl p-8 md:p-12 mb-8 shadow-sm">
          <h3 className="font-display text-2xl text-[#0A1628] font-bold mb-4">Disclosures with respect to Research and Recommendations Services</h3>
          <div className="w-20 h-1 bg-[#F0A500] mb-6" />
          <ul className="flex flex-col gap-4">
            {disclosures.map((item, i) => (
              <li key={i} className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-[#F0A500] mt-2 flex-shrink-0" />
                <span className="text-[#23344E] text-[15px] leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Standard Warning */}
        <div className="bg-[#0A1628] rounded-2xl p-8 md:p-12 mb-8 shadow-md border-l-4 border-[#F0A500]">
          <p className="text-[#F0A500] text-[15px] leading-relaxed font-medium">
            Investment in securities market are subject to market risks. Read all the related documents carefully before investing.
          </p>
        </div>

        {/* Disclaimer */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border-l-4 border-[#F0A500]">
          <p className="text-[#23344E] text-[15px] leading-relaxed font-medium">
            Registration granted by SEBI, enlistment as RA with Exchange and certification from NISM in no way guarantee performance of the intermediary or provide any assurance of returns to investors.
          </p>
        </div>

      </section>
    </div>
  )
}
