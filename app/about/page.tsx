import type { Metadata } from 'next'
import Link from 'next/link'
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
          <ClientComps.FadeIn>
            <div className="text-gold text-sm font-semibold tracking-widest uppercase mb-4 flex items-center justify-center gap-2">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span className="text-white/50">&gt;</span>
              <span>About</span>
            </div>
          </ClientComps.FadeIn>

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

      {/* SECTION 2 - OUR STORY */}
      <section className="py-20 lg:py-28 bg-white container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">

          {/* Left Column (40%) */}
          <ClientComps.SlideIn direction="left" className="lg:col-span-5 relative">
            <div className="bg-[#0A1628] rounded-2xl p-12 lg:p-14 relative overflow-hidden shadow-2xl">
              <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                  backgroundImage: `repeating-linear-gradient(45deg, #F0A500 0px, #F0A500 1px, transparent 1px, transparent 40px)`,
                }}
              />
              <div className="relative z-10 flex flex-col items-center justify-center text-center">
                <span className="text-gold/60 text-sm tracking-widest uppercase font-semibold mb-2">Est.</span>
                <span className="font-display text-7xl lg:text-[96px] leading-none mb-6 font-bold"
                  style={{
                    background: 'linear-gradient(135deg, #F0A500, #FFD166, #c47f00)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  2019
                </span>
                <div className="w-16 h-px bg-gold/50 mb-6" />
                <span className="text-white uppercase tracking-[0.2em] text-sm font-medium">
                  7+ Years of Excellence
                </span>
              </div>
            </div>
          </ClientComps.SlideIn>

          {/* Right Column (60%) */}
          <ClientComps.SlideIn direction="right" className="lg:col-span-7">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-px bg-gold" />
              <span className="text-gold text-sm font-bold tracking-widest uppercase">Our Story</span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl text-[#0A1628] font-bold mb-8 leading-tight">
              From a Vision to India&apos;s Trusted Research Firm
            </h2>

            <div className="flex flex-col gap-6 text-[#2A3B54] text-base leading-relaxed">
              <p>
                FortuneKraft Consultancy was founded in 2019 by a team of seasoned market veterans with a combined experience of over 20 years in Indian equity markets. What started as a small advisory practice in Mumbai has grown into one of India&apos;s most trusted SEBI-registered research analyst firms.
              </p>
              <p>
                Our founders witnessed firsthand how retail investors struggled to navigate the complexities of the stock market without reliable, research-backed guidance. FortuneKraft was built to bridge that gap — delivering institutional-quality research to everyday investors at an accessible price.
              </p>
              <p>
                Today, we serve over 10,000 active clients across India, with a proven track record of 95%+ call accuracy and a commitment to transparency, compliance, and client success that has never wavered.
              </p>
            </div>
          </ClientComps.SlideIn>
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
      <ClientComps.StatsSection />

      {/* SECTION 6 - CTA BANNER */}
      <ClientComps.CtaBanner />
    </div>
  )
}
