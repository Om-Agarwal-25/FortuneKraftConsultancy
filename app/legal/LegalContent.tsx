"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const GMAIL_LINK =
  "https://mail.google.com/mail/?view=cm&to=support@fortunekraftconsultancy.com";

type NavItem = {
  id: string;
  label: string;
};

const navItems: NavItem[] = [
  { id: "terms", label: "Terms & Conditions" },
  { id: "privacy-policy", label: "Privacy Policy" },
  { id: "risk-disclosure", label: "Risk Disclosure" },
];

function SectionTitle({ number, title }: { number: string; title: string }) {
  return (
    <div className="mb-6">
      <h3 className="font-display text-2xl md:text-3xl text-[#0A1628] font-bold leading-tight">
        Clause {number} - {title}
      </h3>
      <div className="w-20 h-1 bg-gold rounded-full mt-3" />
    </div>
  );
}

function NumberedItems({ items }: { items: string[] }) {
  return (
    <ol className="flex flex-col gap-4">
      {items.map((item, index) => (
        <li key={item} className="flex items-start gap-3">
          <span className="w-7 h-7 rounded-full bg-gold/20 border border-gold text-[#0A1628] font-bold text-sm flex items-center justify-center flex-shrink-0 mt-0.5">
            {index + 1}
          </span>
          <span className="text-[#23344E] text-[15px] leading-relaxed">
            {item}
          </span>
        </li>
      ))}
    </ol>
  );
}

function BulletItems({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-col gap-3">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <span className="w-2.5 h-2.5 rounded-full bg-gold mt-2 flex-shrink-0" />
          <span className="text-[#23344E] text-[15px] leading-relaxed">
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}

const sectionIds = navItems.map((item) => item.id);

export default function LegalContent(): JSX.Element {
  const [activeSection, setActiveSection] = useState<string>("terms");

  useEffect(() => {
    // Set initial active section based on scroll position
    const getActiveSection = () => {
      const scrollPosition = window.scrollY + 120; // offset for navbar

      for (const id of [...sectionIds].reverse()) {
        const element = document.getElementById(id);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(id);
          return;
        }
      }
      // Default to first section if nothing matches
      setActiveSection(sectionIds[0] ?? "terms");
    };

    // Run immediately to set correct initial state
    getActiveSection();

    // Update on scroll
    window.addEventListener("scroll", getActiveSection, { passive: true });

    return () => {
      window.removeEventListener("scroll", getActiveSection);
    };
  }, []);

  return (
    <div className="bg-[#F8F9FA] min-h-screen">
      <section className="relative bg-[#0A1628] text-white pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold opacity-[0.05] rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-gold opacity-[0.03] rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-5"
          >
            Legal & Compliance
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{
              duration: 0.6,
              delay: 0.1,
              ease: [0.21, 0.47, 0.32, 0.98],
            }}
            className="text-white/75 text-lg max-w-3xl mx-auto"
          >
            Terms, disclaimer and policy references for Fortunekraft
            Consultancy.
          </motion.p>
        </div>
      </section>

      <div className="container mx-auto px-6 py-14 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[280px_minmax(0,1fr)] gap-8 lg:gap-12">
          <aside className="lg:sticky lg:top-28 h-fit">
            <motion.nav
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="bg-white border border-[#0A1628]/10 rounded-2xl p-4 shadow-sm"
            >
              <p className="text-[#0A1628] text-xs font-bold uppercase tracking-[0.2em] mb-3">
                On This Page
              </p>
              <ul className="space-y-1.5">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => {
                        const element = document.getElementById(item.id);
                        if (element) {
                          const navbarHeight = 100; // account for fixed navbar
                          const elementTop =
                            element.getBoundingClientRect().top +
                            window.scrollY -
                            navbarHeight;
                          window.scrollTo({
                            top: elementTop,
                            behavior: "smooth",
                          });
                        }
                      }}
                      className={`block w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                        activeSection === item.id
                          ? "bg-[#0A1628] text-gold font-semibold"
                          : "text-[#2A3B54] hover:bg-gold/10"
                      }`}
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.nav>
          </aside>

          <div className="space-y-10">
            <section
              id="terms"
              className="bg-white rounded-2xl p-6 md:p-10 border border-[#0A1628]/10 shadow-sm"
            >
              <div className="bg-[#0A1628] rounded-2xl p-8 md:p-10 mb-10 text-center border border-gold/40">
                <h2 className="text-gold font-bold text-2xl md:text-3xl mb-4">
                  TERMS AND CONDITIONS OF RESEARCH SERVICES
                </h2>
                <p className="text-white font-semibold text-base md:text-lg mb-3">
                  Fortunekraft Consultancy | SEBI Registered Research Analyst |
                  Reg. No. INH000025221
                </p>
                <p className="text-white/80 text-sm md:text-base">
                  Registered Office: Flat No B-1106, Urban Space Phase 1, Survey
                  No 25, NIBM Road, Mohammadwadi, Haveli, Pune, Maharashtra,
                  411060
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
                <div className="bg-[#F8F9FA] border border-[#0A1628]/10 rounded-2xl p-6">
                  <h4 className="font-display text-2xl text-[#0A1628] font-bold mb-3">
                    Research Analyst
                  </h4>
                  <p className="text-[#23344E] text-[15px] leading-relaxed">
                    Fortunekraft Consultancy | SEBI Registered Research Analyst
                    | Reg. No. INH000025221
                  </p>
                </div>
                <div className="bg-[#F8F9FA] border border-[#0A1628]/10 rounded-2xl p-6">
                  <h4 className="font-display text-2xl text-[#0A1628] font-bold mb-3">
                    Client
                  </h4>
                  <p className="text-[#23344E] text-[15px] leading-relaxed">
                    The individual or entity subscribing to or availing research
                    services provided by the Research Analyst
                  </p>
                </div>
              </div>

              <div className="space-y-10">
                <section>
                  <SectionTitle number="1" title="Availing The Services" />
                  <p className="text-[#23344E] text-[15px] leading-relaxed">
                    The Client hereby accepts the research services and confirms
                    to avail the research services on its own discretion
                    provided by the Research Analyst (&quot;RA&quot;), and the
                    Research Analyst agrees to provide such services in
                    accordance with the terms and conditions set forth
                    underneath.
                  </p>
                </section>

                <section>
                  <SectionTitle
                    number="2"
                    title="Obligations on RA and Client"
                  />
                  <p className="text-[#23344E] text-[15px] leading-relaxed">
                    The client and the Research Analyst shall be bound by all
                    applicable regulations, rules, circulars, and amendments
                    issued by SEBI, including the SEBI (Research Analysts)
                    Regulations, 2014 and all the other notifications of the
                    Government, if any from time to time.
                  </p>
                </section>

                <section>
                  <SectionTitle number="3" title="Client Information and KYC" />
                  <p className="text-[#23344E] text-[15px] leading-relaxed mb-5">
                    The client is bound, upon acceptance of services, to submit
                    all requisite documents as requested by the research analyst
                    and help the RA to complete the KYC process.
                  </p>
                  <div className="border-l-4 border-gold bg-gold/10 rounded-r-xl p-5">
                    <p className="text-[#23344E] text-[15px] leading-relaxed font-medium">
                      The client hereby gives consent to the research analyst to
                      fetch his KYC documents from the KYC Registration Agency
                      (KRA).
                    </p>
                  </div>
                </section>

                <section>
                  <SectionTitle number="4" title="Standard Terms of Service" />
                  <p className="text-[#23344E] text-[15px] leading-relaxed mb-6">
                    The Client acknowledges and gives his consent to be bound by
                    the terms set forth herewith, as well as any applicable
                    amendments or updates provided by the Research Analyst.
                  </p>

                  <h4 className="font-semibold text-[#0A1628] mb-4 text-lg">
                    Client agrees:
                  </h4>
                  <NumberedItems
                    items={[
                      "I have read and understood the terms and conditions applicable to a research analyst as defined under regulation 2(1)(u) of the SEBI (Research Analyst) Regulations, 2014, including the fee structure.",
                      "I am subscribing to the research services for my own benefit and consumption, and any reliance placed on the research report provided by the Research Analyst shall be based on my own judgment and assessment of the conclusions contained in the research report.",
                    ]}
                  />

                  <h4 className="font-semibold text-[#0A1628] mt-7 mb-4 text-lg">
                    I understand that:
                  </h4>
                  <BulletItems
                    items={[
                      "Any investment made based on the recommendations in the research report is subject to market risk.",
                      "Recommendations in the research report do not provide any assurance of returns.",
                      "There is no recourse to claim any losses incurred on investments made based on the recommendations in the research report.",
                    ]}
                  />

                  <div className="mt-8 bg-[#0A1628] rounded-2xl p-6 border border-gold">
                    <h5 className="text-gold font-bold text-xl mb-4">
                      Declaration by Research Analyst
                    </h5>
                    <NumberedItems
                      items={[
                        "It is duly registered with SEBI as an RA having Registration No.: INH000025221, Date of Registration: 02nd March, 2026.",
                        "It has registration and qualifications required to render the services contemplated under the RA Regulations, and the same are valid and subsisting.",
                        "The services provided by the RA do not conflict with or violate any provision of law, rule, regulation, contract, or other instrument to which it is a party or to which any of its property is or may be subject.",
                        "The maximum fee that may be charged by the RA is ₹1.51 lakhs per annum per family of clients.",
                        "The recommendations provided by the RA do not provide any assurance of returns.",
                        "The RA is not engaged in any additional professional or business activities on a full-time or executive capacity that may interfere with or influence the independence of the research report and/or recommendations.",
                      ]}
                    />
                  </div>
                </section>

                <section>
                  <SectionTitle
                    number="5"
                    title="Consideration And Mode of Payment"
                  />
                  <NumberedItems
                    items={[
                      "The client shall duly pay the fees to the RA of the invoice raised or for any agreed amount either written/oral within 2 days.",
                      "The Client agrees to make all payments via: UPI/Netbanking/Payment Gateway or any other verified banking channel. Client shall not pay any fees in cash.",
                      "The Client hereby agrees to pay the fees in the Bank account of Research Analyst only. The RA shall not be liable for any payment made to third party account.",
                    ]}
                  />
                </section>

                <section>
                  <SectionTitle number="6" title="Risk Factors" />
                  <p className="text-[#23344E] text-[15px] leading-relaxed mb-6">
                    The Client understands that the services provided by the
                    Research Analyst involve inherent risks, and the Client
                    agrees to bear full responsibility for any financial or
                    other consequences arising from the use of these services.
                  </p>
                  <NumberedItems
                    items={[
                      "Trading in equities, derivatives, and other securities are subject to market risks and there is no assurance or guarantee of returns.",
                      "Past performance does not indicate future performance.",
                      "Research recommendations may not always be profitable, as actual market movements may differ from anticipated trends.",
                      "The Research Analyst is not responsible or liable for any losses resulting from research recommendations.",
                      "Investment in securities market are subject to market risks. Read all the related documents carefully before investing.",
                      "Registration granted by SEBI, enlistment as RA with Exchange, and certification from NISM do not guarantee the performance of the intermediary or provide any assurance of returns to investors.",
                    ]}
                  />
                </section>

                <section>
                  <SectionTitle number="7" title="Conflict of Interest" />
                  <NumberedItems
                    items={[
                      "The Research Analyst or any of its officer/employee does not trade in securities which are subject matter of recommendation.",
                      "There are no actual or potential conflicts of interest arising from any connection to or association with any issuer of products/securities, including any material information or facts that might compromise its objectivity or independence in the carrying on of Research Analyst services.",
                      "Research Analyst or its employee or its associates have not received any compensation from the company which is subject matter of recommendation.",
                    ]}
                  />
                  <p className="text-[#23344E] text-[15px] leading-relaxed mt-4 font-medium">
                    Client is advised to refer the detailed disclosure provided
                    on our website.
                  </p>
                </section>

                <section>
                  <SectionTitle
                    number="8"
                    title="Termination of Service and Refund of Fees"
                  />
                  <div className="space-y-4 text-[#23344E] text-[15px] leading-relaxed">
                    <p>
                      The Agreement may be terminated by the client, if the
                      Research Analyst fails to provide the research
                      recommendations. However, the client cannot terminate the
                      agreement solely based on not achieving the desired
                      returns or incurring the losses from trading on the
                      recommendations or the client discontinues the services
                      without a valid reason, or in case of force majeure.
                    </p>
                    <p>
                      The RA may suspend or terminate rendering of research
                      services to client on account of suspension/cancellation
                      of registration of RA by SEBI and shall refund the
                      residual amount to the client.
                    </p>
                    <p>
                      In case of suspension of certificate of registration of
                      the RA for more than 60 (sixty) days or cancellation of
                      the RA registration, RA shall refund the fees, on a pro
                      rata basis for the period from the effective date of
                      cancellation/suspension to end of the subscription period.
                    </p>
                  </div>
                </section>

                <section>
                  <SectionTitle number="9" title="Grievance Redressal" />
                  <p className="text-[#23344E] text-[15px] leading-relaxed mb-6">
                    In the event of grievances related to non-receipt of the
                    research report, missing content, or deficiencies in
                    services, the Client may raise a grievance. The Research
                    Analyst will ensure Redressal within 7 days of such
                    complaint.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div className="rounded-2xl border border-[#0A1628]/10 bg-[#F8F9FA] p-5">
                      <div className="w-8 h-8 rounded-full bg-gold/20 border border-gold text-[#0A1628] font-bold text-sm flex items-center justify-center mb-3">
                        1
                      </div>
                      <h5 className="font-semibold text-[#0A1628] mb-2">
                        Contact the RA
                      </h5>
                      <p className="text-[#23344E] text-[15px]">
                        Contact No.:{" "}
                        <a
                          href="tel:+917030151276"
                          className="text-[#0A1628] font-semibold hover:text-gold"
                        >
                          +91 7030151276
                        </a>
                      </p>
                      <p className="text-[#23344E] text-[15px] mt-1">
                        Mail ID:{" "}
                        <a
                          href={GMAIL_LINK}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#0A1628] font-semibold hover:text-gold"
                        >
                          support@fortunekraftconsultancy.com
                        </a>
                      </p>
                    </div>

                    <div className="rounded-2xl border border-[#0A1628]/10 bg-[#F8F9FA] p-5">
                      <div className="w-8 h-8 rounded-full bg-gold/20 border border-gold text-[#0A1628] font-bold text-sm flex items-center justify-center mb-3">
                        2
                      </div>
                      <h5 className="font-semibold text-[#0A1628] mb-2">
                        SEBI SCORES
                      </h5>
                      <p className="text-[#23344E] text-[15px] mb-4">
                        Lodge a complaint with SEBI through SEBI&apos;s SCORES
                        platform
                      </p>
                      <a
                        href="https://www.scores.sebi.gov.in"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-4 py-2 rounded-lg bg-gold text-[#0A1628] font-semibold hover:bg-gold-light transition-colors"
                      >
                        Visit SCORES
                      </a>
                    </div>

                    <div className="rounded-2xl border border-[#0A1628]/10 bg-[#F8F9FA] p-5">
                      <div className="w-8 h-8 rounded-full bg-gold/20 border border-gold text-[#0A1628] font-bold text-sm flex items-center justify-center mb-3">
                        3
                      </div>
                      <h5 className="font-semibold text-[#0A1628] mb-2">
                        Smart ODR
                      </h5>
                      <p className="text-[#23344E] text-[15px] mb-4">
                        Seek resolution through Online Dispute Resolution
                      </p>
                      <a
                        href="https://smartodr.in"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-4 py-2 rounded-lg bg-gold text-[#0A1628] font-semibold hover:bg-gold-light transition-colors"
                      >
                        Visit Smart ODR
                      </a>
                    </div>
                  </div>

                  <div className="bg-[#0A1628] border-l-4 border-gold rounded-r-xl p-5 mb-5">
                    <p className="text-white text-[15px] leading-relaxed font-medium">
                      DISCLAIMER: The client is strictly required to follow the
                      procedure as mentioned above, otherwise the RA shall not
                      be liable for delay in resolution of the grievance.
                    </p>
                  </div>

                  <div className="border-l-4 border-gold bg-gold/10 rounded-r-xl p-5">
                    <p className="text-[#23344E] text-[15px] leading-relaxed">
                      NOTE: Clients are advised to read the Do&apos;s and
                      Don&apos;ts for dealing with the Research Analyst, as
                      mentioned in SEBI Master Circular No.
                      SEBI/HO/MIRSD-POD-1/P/CIR/2024/49 dated May 21, 2024, or
                      any updates provided by SEBI in the future. The clients
                      are requested to go through all the Disclaimers,
                      Disclosures, Refund Policy and information as mentioned on
                      its website.
                    </p>
                  </div>
                </section>

                <section className="bg-[#0A1628] rounded-2xl border border-gold p-6 md:p-8">
                  <SectionTitle
                    number="10"
                    title="Most Important Terms and Conditions"
                  />
                  <p className="text-white/90 text-[15px] leading-relaxed mb-6">
                    This section captures key terms that the Client is expected
                    to read and acknowledge before availing research services.
                  </p>

                  <ol className="flex flex-col gap-4">
                    {[
                      "The Client confirms that availing research services is at the Client's own discretion and judgment.",
                      "The Research Analyst does not provide any assured or guaranteed returns under any circumstances.",
                      "Investments based on recommendations are subject to market risk, including possible loss of capital.",
                      "Past performance of any recommendation is not indicative of future results.",
                      "The Client shall not transfer funds or securities to the Research Analyst for investment execution.",
                      "Fees must be paid only through verified banking channels and only to the Research Analyst's designated account.",
                      "The Research Analyst is not liable for losses arising out of client decisions, execution delay, or market volatility.",
                      "The Client must complete KYC and provide all documents required for onboarding and regulatory compliance.",
                      "In case of suspension or cancellation of registration by SEBI, fee refund shall be handled as per applicable regulations.",
                      "Grievance redressal shall be followed through the prescribed escalation process.",
                      "All services are governed by SEBI (Research Analysts) Regulations, 2014 and amendments issued from time to time.",
                      "Confidentiality and lawful use obligations under this agreement remain binding on both parties.",
                    ].map((point, index) => (
                      <li key={point} className="flex items-start gap-3">
                        <span className="w-7 h-7 rounded-full bg-gold/20 border border-gold text-gold font-bold text-sm flex items-center justify-center flex-shrink-0 mt-0.5">
                          {index + 1}
                        </span>
                        <div className="text-white/90 text-[15px] leading-relaxed">
                          {point}
                          {index === 9 && (
                            <div className="mt-3 space-y-2">
                              {[
                                "Contact the RA",
                                "SEBI SCORES",
                                "Smart ODR",
                              ].map((step, stepIndex) => (
                                <div
                                  key={step}
                                  className="flex items-start gap-2"
                                >
                                  <span className="w-6 h-6 rounded-full bg-gold text-[#0A1628] text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                                    {stepIndex + 1}
                                  </span>
                                  <span className="text-white/90 text-[14px] leading-relaxed">
                                    {step}
                                  </span>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      </li>
                    ))}
                  </ol>
                </section>

                <section>
                  <SectionTitle
                    number="11"
                    title="Optional Centralised Fee Collection Mechanism"
                  />
                  <p className="text-[#23344E] text-[15px] leading-relaxed">
                    There is an optional &quot;Centralized Fee Collection
                    Mechanism for Investment Advisors and Research
                    Analysts&quot; (CeFCoM) for fee payments. The Research
                    Analyst has presently not opted for the same and once the
                    Research Analyst gets registered for it, then thereafter
                    said mechanism will be available for the client.
                  </p>
                </section>

                <section>
                  <SectionTitle number="12" title="Confidentiality" />
                  <p className="text-[#23344E] text-[15px] leading-relaxed">
                    Client shall not share any confidential information with
                    third party without prior consent from the RA which has come
                    to its knowledge.
                  </p>
                </section>

                <section>
                  <SectionTitle number="13" title="Dispute" />
                  <div className="space-y-4 text-[#23344E] text-[15px] leading-relaxed">
                    <p>
                      Any dispute arising between the Client and the Research
                      Analyst in connection with this agreement or services
                      shall first be attempted to be resolved amicably through
                      mutual discussion and grievance redressal process.
                    </p>
                    <p>
                      In case the dispute remains unresolved, the parties shall
                      seek resolution through applicable legal and regulatory
                      mechanisms, including SCORES and Smart ODR, in accordance
                      with prevailing SEBI regulations and applicable law.
                    </p>
                  </div>
                </section>

                <section>
                  <SectionTitle number="14" title="Severability" />
                  <p className="text-[#23344E] text-[15px] leading-relaxed">
                    If any provision of this agreement is held to be invalid,
                    illegal, or unenforceable by a competent authority, such
                    provision shall be severed to that extent only and the
                    remaining provisions shall continue to remain in full force
                    and effect.
                  </p>
                </section>

                <section>
                  <SectionTitle number="15" title="Force Majeure" />
                  <p className="text-[#23344E] text-[15px] leading-relaxed">
                    The Research Analyst shall not be liable for any delay,
                    interruption, or failure in performance of obligations
                    arising out of events beyond reasonable control, including
                    natural calamity, war, government action, system failure,
                    network outages, or other force majeure events.
                  </p>
                </section>
              </div>

              <p className="text-center text-gold italic text-lg mt-12">
                The client hereby agrees to abide with the terms and conditions
                of the research services.
              </p>
            </section>



            <section
              id="privacy-policy"
              className="bg-white rounded-2xl p-6 md:p-10 border border-[#0A1628]/10 shadow-sm"
            >
              <h2 className="font-display text-3xl text-[#0A1628] font-bold mb-4">
                Privacy Policy
              </h2>
              <p className="text-[#23344E] text-[15px] leading-relaxed">
                Dummy content: This section contains placeholder privacy policy
                information and will be replaced with finalized legal copy.
              </p>
            </section>

            <section
              id="risk-disclosure"
              className="bg-white rounded-2xl p-6 md:p-10 border border-[#0A1628]/10 shadow-sm"
            >
              <h2 className="font-display text-3xl text-[#0A1628] font-bold mb-4">
                Risk Disclosure
              </h2>
              <p className="text-[#23344E] text-[15px] leading-relaxed">
                Dummy content: This section contains placeholder risk disclosure
                language and will be replaced with finalized legal copy.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
