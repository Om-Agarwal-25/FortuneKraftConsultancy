import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";

const HeroChart = dynamic(() => import("@/components/HeroChart"), { ssr: false })
import {
  ShieldCheck,
  TrendingUp,
  Target,
  Shield,
  Clock,
  Users,
  BarChart2,
  CheckCircle2,
  ChevronRight,
  Activity,
  PieChart,
  LineChart,
} from "lucide-react";
import type { Testimonial, Stat, WhyChooseCard } from "@/types";
const StatsCounter = dynamic(() => import("@/components/StatsCounter"), { ssr: false });
import {
  HeroButtons,
  AnimatedWhyCard,
  AnimatedServicePreview,
  AnimatedStep,
  ScrollIndicator,
} from "@/components/HomeClientComps";

const WHY_CHOOSE_CARDS: WhyChooseCard[] = [
  {
    icon: "TrendingUp",
    title: "SEBI Registered",
    description:
      "Fully compliant with SEBI regulations, ensuring transparent and trustworthy advisory services.",
  },
  {
    icon: "Target",
    title: "High Accuracy Calls",
    description:
      "Our research-backed calls deliver consistent results with a 95%+ accuracy track record.",
  },
  {
    icon: "Shield",
    title: "Risk Management",
    description:
      "Every recommendation comes with defined stop-loss and target levels to protect your capital.",
  },
  {
    icon: "Clock",
    title: "Real-Time Alerts",
    description:
      "Get instant WhatsApp alerts the moment a trade opportunity is identified.",
  },
  {
    icon: "Users",
    title: "10,000+ Happy Clients",
    description:
      "A growing community of investors who have transformed their portfolios with our guidance.",
  },
  {
    icon: "BarChart2",
    title: "Equity Research",
    description:
      "Deep fundamental and technical analysis across large-cap, mid-cap, and small-cap stocks.",
  },
];

const STATS: Stat[] = [
  { value: "10K+", label: "Active Traders Enrolled" },
  { value: "95%", label: "Average Accuracy Rate" },
  { value: "50M+", label: "Wealth Crafted (INR)" },
  { value: "24/7", label: "Dedicated Support" },
];

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "FortuneKraft has completely changed how I trade. Their risk management is top-notch, and the accuracy is exactly as advertised.",
    name: "Rahul S.",
    designation: "Full-time Trader",
    location: "Mumbai",
  },
  {
    quote:
      "The daily morning reports and exact entry/exit points give me the confidence to trade even with my busy corporate job.",
    name: "Priya M.",
    designation: "IT Professional",
    location: "Bangalore",
  },
  {
    quote:
      "I was skeptical at first, but the Demo plan proved their worth. Have been on the Market insights plan for 6 months now.",
    name: "Amit K.",
    designation: "Business Owner",
    location: "Delhi",
  },
];

export default function Home(): JSX.Element {
  return (
    <div className="flex flex-col min-h-screen">
      {/* SECTION 1: HERO */}
      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-32 pb-24 md:pt-36">
        {/* Stock market background image */}
        <div className="absolute inset-0 z-0 min-h-full">
          <Image
            src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1920&q=80"
            alt="Stock market trading"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
          {/* Dark overlay so text remains readable */}
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(135deg, rgba(10,22,40,0.92) 0%, rgba(10,22,40,0.85) 50%, rgba(10,22,40,0.75) 100%)',
            }}
          />
        </div>

        {/* Hero inner layout */}
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
            {/* Left — text content */}
            <div className="flex-1 flex flex-col items-center text-center pb-8 mt-8 md:mt-0">

              <div className="flex flex-col items-center w-full mb-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold bg-gold/10">
                  <ShieldCheck className="text-gold" size={19} />
                  <span className="text-gold font-medium text-sm">
                    SEBI Registered Research Analyst
                  </span>
                </div>
                <p className="text-gold text-sm tracking-wider mt-2">
                  SEBI Reg. No: INH000025221
                </p>
              </div>
              <h1 className="font-display text-4xl md:text-6xl lg:text-7xl text-white font-bold leading-tight mb-6 max-w-4xl">
                Craft Your <span className="text-gradient">Financial</span> Future
              </h1>
              <p className="font-sans text-lg text-gray-300 max-w-[600px] mb-8 leading-relaxed">
                FortuneKraft Consultancy delivers expert equity research,
                high-accuracy trade calls, and real-time alerts to help you navigate
                Indian markets with confidence.
              </p>

              <HeroButtons />

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 mt-16 pt-8 border-t border-white/10 w-full max-w-3xl">
                <div className="flex items-center gap-2 text-white">
                  <CheckCircle2 className="text-gold" size={20} />
                  <span className="text-sm font-medium">95%+ Accuracy</span>
                </div>
                <div className="flex items-center gap-2 text-white">
                  <CheckCircle2 className="text-gold" size={20} />
                  <span className="text-sm font-medium">SEBI Regulated</span>
                </div>
                <div className="flex items-center gap-2 text-white">
                  <CheckCircle2 className="text-gold" size={20} />
                  <span className="text-sm font-medium">Real-time Support</span>
                </div>
              </div>
            </div>

            {/* Right — chart visual (desktop only) */}
            <div className="hidden lg:flex flex-1 items-center justify-center">
              <HeroChart />
            </div>
          </div>
        </div>

        <div className="absolute bottom-6 left-0 right-0 flex justify-center z-10">
          <ScrollIndicator />
        </div>
      </section>

      {/* SECTION 3: WHY CHOOSE US */}
      <section className="py-24 bg-[#F8F9FA]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl text-navy font-bold mb-4">
              Why Choose FortuneKraft?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We blend advanced market analytics with disciplined risk
              management to provide you the edge you need.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {WHY_CHOOSE_CARDS.map((card, i) => (
              <AnimatedWhyCard key={card.title} index={i}>
                <div className="w-14 h-14 bg-navy rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-navy/20">
                  {card.icon === "TrendingUp" && (
                    <TrendingUp className="text-gold" size={26} />
                  )}
                  {card.icon === "Target" && (
                    <Target className="text-gold" size={26} />
                  )}
                  {card.icon === "Shield" && (
                    <Shield className="text-gold" size={26} />
                  )}
                  {card.icon === "Clock" && (
                    <Clock className="text-gold" size={26} />
                  )}
                  {card.icon === "Users" && (
                    <Users className="text-gold" size={26} />
                  )}
                  {card.icon === "BarChart2" && (
                    <BarChart2 className="text-gold" size={26} />
                  )}
                </div>
                <h3 className="text-navy font-bold text-xl mb-3">
                  {card.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {card.description}
                </p>
              </AnimatedWhyCard>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: KEY SERVICES PREVIEW */}
      <section className="py-24 bg-[#f0f4f8]">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="font-display text-4xl text-navy font-bold mb-4">
                Our Elite Services
              </h2>
              <p className="text-gray-600 max-w-xl">
                Tailored advisory plans designed for different trading styles
                and risk appetites.
              </p>
            </div>
            <Link
              href="/services"
              className="text-navy font-medium hover:text-gold transition-colors flex items-center gap-1 group"
            >
              View All Services{" "}
              <ChevronRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Equity Research",
                desc: "High momentum intraday and short-term delivery calls in NSE cash segment.",
                icon: (
                  <Activity size={48} className="text-gold mb-8 stroke-1" />
                ),
              },
              {
                title: "Market insights",
                desc: "Strategic Nifty/BankNifty index options and stock futures recommendations.",
                icon: (
                  <PieChart size={48} className="text-gold mb-8 stroke-1" />
                ),
              },
              {
                title: "Investment recommendations",
                desc: "Exclusive holding recommendations with deep fundamental analysis.",
                icon: (
                  <LineChart size={48} className="text-gold mb-8 stroke-1" />
                ),
              },
            ].map((srv, i) => (
              <AnimatedServicePreview key={srv.title} index={i}>
                {srv.icon}
                <h3 className="text-2xl font-display text-white mb-4 relative z-10">
                  {srv.title}
                </h3>
                <p className="text-gray-400 mb-8 leading-relaxed relative z-10">
                  {srv.desc}
                </p>
                <Link
                  href={`/services?tab=${srv.title}`}
                  className="text-gold font-medium flex items-center gap-2 group relative z-10 inline-flex"
                >
                  Learn More{" "}
                  <ChevronRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>
              </AnimatedServicePreview>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: HOW IT WORKS */}
      <section id="how-it-works" className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <h2 className="font-display text-4xl text-navy font-bold text-center mb-16">
            How It Works
          </h2>
          <div className="relative">
            {/* Connector line - desktop only */}
            <div className="hidden md:block absolute top-[28px] left-[10%] right-[10%] h-px border-t-2 border-dashed border-gold/40 z-0"></div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-6">
              {[
                {
                  step: "01",
                  title: "Choose a Plan",
                  desc: "Select an advisory service that matches your capital and risk profile.",
                },
                {
                  step: "02",
                  title: "Get Onboarded",
                  desc: "Complete KYC and risk profiling as per SEBI compliance guidelines.",
                },
                {
                  step: "03",
                  title: "Receive Alerts",
                  desc: "Get clear Entry, Target, and Stop-Loss alerts via WhatsApp/SMS.",
                },
                {
                  step: "04",
                  title: "Execute & Profit",
                  desc: "Place the trades in your broker account and manage your wealth.",
                },
              ].map((stepInfo, i) => (
                <AnimatedStep key={stepInfo.step} index={i}>
                  <div className="w-14 h-14 bg-navy text-gold rounded-full flex items-center justify-center font-display text-2xl font-bold mb-6 border-4 border-white shadow-md relative z-10">
                    {stepInfo.step}
                  </div>
                  <h3 className="text-navy font-bold text-xl mb-3">
                    {stepInfo.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{stepInfo.desc}</p>
                </AnimatedStep>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: STATS BANNER */}
      <section className="py-20 bg-gradient-to-r from-[#0A1628] to-[#1a3a5c] relative">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {STATS.map((stat) => (
              <StatsCounter
                key={stat.label}
                target={stat.value}
                label={stat.label}
              />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: TESTIMONIALS */}
      <section className="py-24 bg-[#F8F9FA]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl text-navy font-bold mb-4">
              What Our Clients Say
            </h2>
            <p className="text-gray-600">
              The trust of over 10,000 active traders fuels our commitment.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative"
              >
                <div className="text-gold text-6xl font-serif absolute top-4 left-6 opacity-20">
                  &quot;
                </div>
                <div className="flex text-gold mb-6 relative z-10">
                  {[...Array(5)].map((_, idx) => (
                    <svg
                      key={idx}
                      className="w-5 h-5 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-navy/80 italic mb-8 relative z-10 text-[15px] leading-relaxed">
                  &quot;{t.quote}&quot;
                </p>
                <div className="border-t border-gray-100 pt-4">
                  <h4 className="text-navy font-bold">{t.name}</h4>
                  <p className="text-sm text-gray-500">
                    {t.designation}, {t.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8: CTA BANNER */}
      <section className="py-24 bg-gradient-to-br from-[#0A1628] to-[#0d213b]">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-display text-4xl md:text-5xl text-white font-bold mb-6">
            Ready to Transform Your Trading?
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-10 text-lg">
            Join India&apos;s most trusted SEBI registered advisory and start
            your journey towards disciplined wealth creation today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/services">
              <button className="bg-gold text-navy font-bold px-8 py-4 rounded-full w-full sm:w-auto hover:bg-gold-light transition-colors">
                View Advisory Plans
              </button>
            </Link>
            <Link href="/contact">
              <button className="bg-transparent border border-white/20 text-white font-bold px-8 py-4 rounded-full w-full sm:w-auto hover:bg-white/5 transition-colors">
                Contact an Expert
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
