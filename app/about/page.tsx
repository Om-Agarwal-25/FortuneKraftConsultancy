import type { Metadata } from 'next'
import Image from 'next/image'
import * as ClientComps from './ClientComps'

export const metadata: Metadata = {
  title: 'About Us | FortuneKraft Consultancy',
  description: "Learn about FortuneKraft Consultancy — our story, mission, vision, and the team behind India's most trusted SEBI registered research analyst firm.",
}

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* SECTION 1 - HERO */}
      <section className="relative bg-[#0A1628] text-white pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden flex flex-col items-center justify-center min-h-[380px]">
        {/* Abstract Gold Background Elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold opacity-[0.05] rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-gold opacity-[0.03] rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2" />

        <div className="container mx-auto px-6 relative z-10 text-center">

          <ClientComps.FadeIn delay={0.1}>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-6">
              About FortuneKraft
            </h1>
          </ClientComps.FadeIn>

          <ClientComps.FadeIn delay={0.2}>
            <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              The story behind India&apos;s most trusted equity research firm
            </p>
          </ClientComps.FadeIn>
        </div>
      </section>

      {/* SECTION 2 - OUR STORY / MEET THE FOUNDER */}
      <section className="py-20 lg:py-28 pb-10 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-start gap-16 lg:gap-12">

            {/* Left column — photo + credentials */}
            <ClientComps.SlideIn direction="left" className="relative w-full lg:w-[45%] flex-shrink-0">
              <div className="relative max-w-[380px] mx-auto rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/ritesh-agarwal.jpg"
                  alt="Ritesh Agarwal — Founder, Fortune Kraft Consultancy"
                  width={380}
                  height={440}
                  className="w-full object-cover object-top"
                  priority
                />
                {/* Dark gradient overlay at bottom */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-32"
                  style={{ background: 'linear-gradient(to top, rgba(10,22,40,0.9), transparent)' }}
                />
                {/* Name overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-white font-display font-bold text-2xl">Ritesh Agarwal</p>
                  <p className="text-gold text-sm tracking-wide">Founder &amp; Research Analyst</p>
                </div>
              </div>

              {/* Credentials card */}
              <ClientComps.ScaleIn delay={0.3} className="absolute bottom-[-24px] right-[0px] lg:right-[-24px] bg-white rounded-2xl p-5 shadow-xl border border-[#0A1628]/10 w-[180px]">
                <p className="text-navy font-bold text-sm mb-3">Credentials</p>
                <div className="space-y-2">
                  {['BBA Graduate', 'CWM Certified', 'CMT Certified', 'SEBI Registered RA'].map((cred) => (
                    <div key={cred} className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-gold flex-shrink-0" />
                      <p className="text-[#23344E] text-xs">{cred}</p>
                    </div>
                  ))}
                </div>
              </ClientComps.ScaleIn>
            </ClientComps.SlideIn>

            {/* Right column — bio content */}
            <ClientComps.SlideIn direction="right" className="w-full lg:w-[55%] flex flex-col justify-center pt-8 lg:pt-0">
              {/* Section label */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-px bg-gold" />
                <p className="text-gold text-xs font-semibold uppercase tracking-[0.2em]">Meet the Founder</p>
              </div>

              <h2 className="font-display text-3xl md:text-4xl text-navy font-bold mb-2 leading-tight">
                Ritesh Agarwal
              </h2>
              <p className="text-gold font-medium mb-6 tracking-wide">
                Founder &amp; SEBI Registered Research Analyst
              </p>

              <div className="w-16 h-1 bg-gold rounded-full mb-6" />

              <div className="space-y-4 text-[#23344E] text-[15px] leading-relaxed mb-8">
                <p>
                  Ritesh Agarwal is a finance professional with over 7 years of experience in the financial markets. He holds a Bachelor&apos;s degree in Business Administration and is a Chartered Wealth Manager (CWM) as well as a Chartered Market Technician (CMT).
                </p>
                <p>
                  He has previously worked as a Research Analyst on Dalal Street and as a proprietary trader at Gemscap Global, gaining hands-on expertise in market analysis and trading strategies.
                </p>
                <p>
                  In addition to his financial background, Ritesh is also a Reiki practitioner and a Vipassana meditator, bringing a balanced and disciplined approach to decision-making.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { value: '7+', label: 'Years in Financial Markets' },
                  { value: '2', label: 'Professional Certifications' },
                  { value: 'CWM', label: 'Chartered Wealth Manager' },
                  { value: 'CMT', label: 'Chartered Market Technician' },
                ].map((stat) => (
                  <div key={stat.label} className="bg-[#F8F9FA] rounded-xl p-4 border border-[#0A1628]/10">
                    <p className="text-navy font-bold text-2xl font-display">{stat.value}</p>
                    <p className="text-[#23344E] text-sm">{stat.label}</p>
                  </div>
                ))}
              </div>

              <div>
                <p className="text-navy font-semibold text-sm mb-3">Previous Experience</p>
                <div className="flex flex-wrap gap-2">
                  {[
                    { label: 'Research Analyst — Dalal Street', dark: true },
                    { label: 'Proprietary Trader — Gemscap Global', dark: true },
                    { label: 'Reiki Practitioner', dark: false },
                    { label: 'Vipassana Meditator', dark: false },
                  ].map((tag) => (
                    <span
                      key={tag.label}
                      className={`px-3 py-1.5 text-xs font-semibold rounded-full ${tag.dark
                        ? 'bg-navy text-gold'
                        : 'bg-[#F8F9FA] text-navy border border-[#0A1628]/10'
                        }`}
                    >
                      {tag.label}
                    </span>
                  ))}
                </div>
              </div>
            </ClientComps.SlideIn>

          </div>
        </div>
      </section>

      {/* SECTION 3 - MISSION & VISION */}
      <section className="py-20 lg:py-28 bg-[#f0f4f8]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">

            {/* Mission Card */}
            <ClientComps.ScaleIn className="bg-[#0A1628] rounded-2xl p-10 lg:p-14 relative overflow-hidden shadow-xl flex flex-col items-start">
              <div className="w-20 h-20 rounded-2xl bg-white/5 flex items-center justify-center mb-8 border border-white/10">
                <ClientComps.Icon name="Target" className="w-10 h-10 text-gold" />
              </div>
              <h3 className="font-display text-3xl text-white font-bold mb-6">Our Mission</h3>
              <div className="w-10 h-px bg-gold mb-8" />
              <p className="text-gray-300 text-lg leading-relaxed mb-12 flex-grow">
                To cut through market noise and deliver clear, high-conviction research that enables investors to act with confidence and control.
              </p>
              <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-gold/10 border border-gold/20 text-gold text-sm font-semibold tracking-wide">
                Client First
              </div>
            </ClientComps.ScaleIn>

            {/* Vision Card */}
            <ClientComps.ScaleIn delay={0.1} className="rounded-2xl p-10 lg:p-14 relative overflow-hidden shadow-xl flex flex-col items-start"
              style={{ background: 'linear-gradient(135deg, #F0A500, #FFD166)' }}
            >
              <div className="w-20 h-20 rounded-2xl bg-[#0A1628]/10 flex items-center justify-center mb-8 border border-[#0A1628]/10">
                <ClientComps.Icon name="Eye" className="w-10 h-10 text-[#0A1628]" />
              </div>
              <h3 className="font-display text-3xl text-[#0A1628] font-bold mb-6">Our Vision</h3>
              <div className="w-10 h-px bg-[#0A1628] mb-8" />
              <p className="text-[#0A1628]/80 text-lg leading-relaxed mb-12 flex-grow font-medium">
                To redefine how investors engage with financial markets through clarity, discipline, and research-led thinking.
              </p>
              <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-[#0A1628]/10 border border-[#0A1628]/20 text-[#0A1628] text-sm font-bold tracking-wide">
                Market Leaders
              </div>
            </ClientComps.ScaleIn>

          </div>
        </div>
      </section>

      {/* SECTION 4 - WHAT WE DO / STAND OUT */}
      <section className="bg-white">
        {/* Top Half - What We Do */}
        <div className="container mx-auto px-6 py-20 lg:py-24">
          <ClientComps.FadeIn className="text-center mb-16">
            <h2 className="font-display text-4xl text-[#0A1628] font-bold mb-6">What We Do</h2>
            <div className="w-16 h-1 bg-gold mx-auto rounded-full" />
          </ClientComps.FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ClientComps.FeatureCard
              icon="TrendingUp"
              title="Equity Research"
              description="Deep fundamental and technical analysis across NSE and BSE listed equities, delivering actionable buy and sell calls daily."
              delay={0}
            />
            <ClientComps.FeatureCard
              icon="BarChart2"
              title="Market Insights"
              description="Futures and Options strategies crafted for both conservative hedgers and aggressive traders seeking higher returns."
              delay={0.1}
            />
            <ClientComps.FeatureCard
              icon="BookOpen"
              title="Investment recommendations"
              description="Weekly sector reports and company deep-dives that give our clients a genuine information edge in the market."
              delay={0.2}
            />
          </div>
        </div>

        {/* Bottom Half - What Makes Us Stand Out */}
        <div className="bg-[#0A1628] py-20 lg:py-24 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-full h-full bg-[url('/noise.png')] opacity-[0.03] pointer-events-none mix-blend-overlay" />
          <div className="container mx-auto px-6 relative z-10">
            <ClientComps.FadeIn className="text-center mb-16">
              <h2 className="font-display text-4xl text-white font-bold mb-6">What Makes Us Stand Out</h2>
              <div className="w-16 h-1 bg-gold mx-auto rounded-full" />
            </ClientComps.FadeIn>

            <ClientComps.StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
              <ClientComps.CheckFeature
                title="SEBI Registered & Fully Compliant"
                description="Every recommendation we make is governed by SEBI Research Analyst Regulations 2014. Your trust and safety is our top priority."
              />
              <ClientComps.CheckFeature
                title="Research-Backed Every Time"
                description="We never make a call without full research backing. Every trade recommendation comes with entry, target, stop-loss and rationale."
              />
              <ClientComps.CheckFeature
                title="Real-Time Delivery"
                description="Trade alerts reach you via SMS and WhatsApp within seconds of our analysts identifying an opportunity — never a delayed call."
              />
              <ClientComps.CheckFeature
                title="Transparent Track Record"
                description="Our historical accuracy rate is published and verifiable. We believe in full transparency with our clients at all times."
              />
            </ClientComps.StaggerContainer>
          </div>
        </div>
      </section>

      {/* SECTION 5 - ACHIEVEMENTS / STATS */}
      {/* <ClientComps.StatsSection /> */}

      {/* SECTION 6 - CTA BANNER */}
      <ClientComps.CtaBanner />
    </div>
  )
}
