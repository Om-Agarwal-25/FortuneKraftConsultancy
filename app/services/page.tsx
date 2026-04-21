'use client'

import { useState, useEffect, Suspense, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useSearchParams } from 'next/navigation'
import type { Service } from '@/types'
import { services } from '@/lib/servicesData'
import ServiceCard from '@/components/ServiceCard'
import ServiceModal from '@/components/ServiceModal'
import { Zap, Moon, TrendingUp, BarChart2 } from 'lucide-react'
import type { CleanProgram, CleanPlan } from '@/app/api/get-all-services/route'
import * as ClientComps from '@/app/about/ClientComps'

export type ServiceCategory = 'All' | 'Intraday Alpha' | 'BTST Alpha' | 'Positional Alpha' | 'Capital Compounders' | 'Trial Plans'
type AudienceTab = 'Trader' | 'Investor'

type FetchState =
  | { status: 'loading' }
  | { status: 'success'; programs: CleanProgram[] }
  | { status: 'error' }

const SERVICE_MAP: Record<string, { programName: string; duration: string; isDemo: boolean }> = {
  'intraday-alpha-1m': { programName: 'Intraday Alpha', duration: '30 days', isDemo: false },
  'intraday-alpha-3m': { programName: 'Intraday Alpha', duration: '3 months', isDemo: false },
  'intraday-alpha-1y': { programName: 'Intraday Alpha', duration: '12 months', isDemo: false },
  'intraday-alpha-demo': { programName: 'Intraday Alpha', duration: '7 days', isDemo: true },
  'btst-alpha-1m': { programName: 'BTST ALPHA', duration: '30 days', isDemo: false },
  'btst-alpha-3m': { programName: 'BTST ALPHA', duration: '3 months', isDemo: false },
  'btst-alpha-1y': { programName: 'BTST ALPHA', duration: '12 months', isDemo: false },
  'btst-alpha-demo': { programName: 'BTST ALPHA', duration: '7 days', isDemo: true },
  'positional-alpha-1m': { programName: 'Positional Alpha', duration: '30 days', isDemo: false },
  'positional-alpha-3m': { programName: 'Positional Alpha', duration: '3 months', isDemo: false },
  'positional-alpha-1y': { programName: 'Positional Alpha', duration: '12 months', isDemo: false },
  'positional-alpha-demo': { programName: 'Positional Alpha', duration: '7 days', isDemo: true },
  'free-demo-service': { programName: 'Free Demo Service', duration: '2 days', isDemo: true },
  // Capital Compounders — not yet on Technotron API; falls back to hardcoded prices gracefully
  'capital-compounders-1m': { programName: 'Capital Compounders', duration: '30 days', isDemo: false },
  'capital-compounders-3m': { programName: 'Capital Compounders', duration: '3 months', isDemo: false },
  'capital-compounders-1y': { programName: 'Capital Compounders', duration: '12 months', isDemo: false },
}

function getPlanForService(
  serviceId: string,
  programs: CleanProgram[]
): { plan: CleanPlan | null; program: CleanProgram | null } {
  const mapping = SERVICE_MAP[serviceId]
  if (!mapping) return { plan: null, program: null }

  const program = programs.find(
    (p) => p.programName.toLowerCase() === mapping.programName.toLowerCase()
  ) ?? null

  if (!program) return { plan: null, program: null }

  // Stage 1 — exact duration + trialPack match
  let plan = program.pricing.find(
    (p) => p.displayDuration.toLowerCase() === mapping.duration.toLowerCase()
      && (mapping.isDemo ? p.trialPack : !p.trialPack)
  ) ?? null

  // Stage 2 — partial duration match (e.g. "30" inside "30 Days")
  if (!plan) {
    const firstWord = mapping.duration.split(' ')[0]?.toLowerCase() ?? ''
    plan = program.pricing.find(
      (p) => p.displayDuration.toLowerCase().includes(firstWord)
        && (mapping.isDemo ? p.trialPack : !p.trialPack)
    ) ?? null
  }

  // Stage 3 — just find correct trial/non-trial plan
  if (!plan) {
    plan = program.pricing.find(
      (p) => mapping.isDemo ? p.trialPack : !p.trialPack
    ) ?? program.pricing[0] ?? null
  }

  return { plan, program }
}

function ServicesContent(): JSX.Element {
  const searchParams = useSearchParams()

  const [activeAudience, setActiveAudience] = useState<AudienceTab>('Trader')
  const [activeCategory, setActiveCategory] = useState<ServiceCategory>('All')
  const [selectedService, setSelectedService] = useState<Service | null>(null)
  const [fetchState, setFetchState] = useState<FetchState>({ status: 'loading' })

  // Derive available sub-categories from the active audience tab
  const availableCategories = useMemo<ServiceCategory[]>(() => {
    const families = Array.from(
      new Set(
        services
          .filter((s) => s.targetAudience === activeAudience && s.tag !== 'Free Trial')
          .map((s) => s.title.split(' — ')[0] as ServiceCategory)
      )
    )
    // Trader audience always has Trial Plans as the last chip
    const trialChip: ServiceCategory[] = activeAudience === 'Trader' ? ['Trial Plans'] : []
    return ['All', ...families, ...trialChip]
  }, [activeAudience])

  // When the audience tab changes, reset sub-category to 'All'
  useEffect(() => {
    setActiveCategory('All')
  }, [activeAudience])

  // Resolve active audience + category from URL ?tab= param; programmatic scroll on arrival
  useEffect(() => {
    const tab = searchParams.get('tab')

    let shouldScroll = true

    if (!tab || tab === 'All') {
      setActiveAudience('Trader')
      setActiveCategory('All')
      shouldScroll = false
    } else if (tab === 'Capital Compounders') {
      setActiveAudience('Investor')
      setActiveCategory('Capital Compounders')
    } else if (tab === 'Trial Plans') {
      setActiveAudience('Trader')
      setActiveCategory('Trial Plans')
    } else if (['Intraday Alpha', 'BTST Alpha', 'Positional Alpha'].includes(tab)) {
      setActiveAudience('Trader')
      setActiveCategory(tab as ServiceCategory)
    } else {
      setActiveAudience('Trader')
      setActiveCategory('All')
      shouldScroll = false
    }

    if (shouldScroll) {
      setTimeout(() => {
        const el = document.getElementById('services-grid')
        if (el) {
          window.scrollTo({
            top: el.getBoundingClientRect().top + window.scrollY - 150,
            behavior: 'smooth',
          })
        }
      }, 100)
    }
  }, [searchParams])

  // Fetch live API pricing
  useEffect(() => {
    async function loadServices(): Promise<void> {
      try {
        const res = await fetch('/api/get-all-services')
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        const data = await res.json() as { programs: CleanProgram[] }
        setFetchState({ status: 'success', programs: data.programs })
      } catch (error) {
        console.error('Failed to load services:', error)
        setFetchState({ status: 'error' })
      }
    }
    void loadServices()
  }, [])

  // Filter services by audience tab, then by sub-category chip
  const filteredServices: Service[] = useMemo(() => {
    const byAudience = services.filter((s) => s.targetAudience === activeAudience)
    if (activeCategory === 'All') return byAudience
    // Trial Plans: any service with isTrial flag (covers Free Demo + all 7-day trials)
    if (activeCategory === 'Trial Plans') return byAudience.filter((s) => s.isTrial === true)
    // Named family chip: include both paid plans AND trial variants for that family
    return byAudience.filter((s) => s.title.startsWith(activeCategory))
  }, [activeAudience, activeCategory])


  const handleDescriptionClick = (service: Service): void => {
    setSelectedService(service)
  }

  function handleBuy(_service: Service, plan: CleanPlan | null, program: CleanProgram | null): void {
    if (plan?.planPurchaseLink) {
      window.open(plan.planPurchaseLink, '_blank', 'noopener,noreferrer')
    } else if (program?.pricePageLink) {
      window.open(program.pricePageLink, '_blank', 'noopener,noreferrer')
    } else {
      window.open('https://services.fortunekraftconsultancy.com', '_blank', 'noopener,noreferrer')
    }
  }

  const closeModal = (): void => {
    setSelectedService(null)
  }

  return (
    <div className="min-h-screen bg-[#F8F9FA] pb-24">
      {/* ── Hero ── */}
      <section className="relative bg-[#0A1628] text-white pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden flex flex-col items-center justify-center min-h-[380px]">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold opacity-[0.05] rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-gold opacity-[0.03] rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2" />

        <div className="container mx-auto px-6 relative z-10 text-center">
          <ClientComps.FadeIn delay={0.1}>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-6">
              Our Services
            </h1>
          </ClientComps.FadeIn>
          <ClientComps.FadeIn delay={0.2}>
            <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Explore our research service plans, designed to match your trading style and risk appetite.
            </p>
          </ClientComps.FadeIn>
        </div>
      </section>

      {/* ── Overview Cards ── */}
      <section className="bg-[#F8F9FA] py-16 -mt-8 relative z-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Intraday Alpha */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="bg-[#0A1628] rounded-2xl p-8 border-t-[4px] border-t-gold shadow-lg flex flex-col cursor-pointer"
              onClick={() => { setActiveAudience('Trader'); setActiveCategory('Intraday Alpha') }}
            >
              <div className="flex justify-between items-start mb-6">
                <Zap size={40} className="text-gold" />
                <span className="bg-gold/20 text-gold text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Same Day Exit</span>
              </div>
              <h3 className="text-white font-display text-2xl font-bold mb-4">Intraday Alpha</h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-8 flex-grow">
                Cash-market intraday research service for active traders. Capture short-term opportunities within the same trading day with 1–2 research-backed trade ideas daily.
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                <span className="text-xs text-white/70 bg-white/5 border border-white/10 px-2 py-1 rounded">1–2 Trades/Day</span>
                <span className="text-xs text-white/70 bg-white/5 border border-white/10 px-2 py-1 rounded">Same Day Exit</span>
                <span className="text-xs text-white/70 bg-white/5 border border-white/10 px-2 py-1 rounded">WhatsApp Alerts</span>
              </div>
            </motion.div>

            {/* BTST Alpha */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="bg-[#0A1628] rounded-2xl p-8 border-t-[4px] border-t-gold shadow-lg flex flex-col cursor-pointer"
              onClick={() => { setActiveAudience('Trader'); setActiveCategory('BTST Alpha') }}
            >
              <div className="flex justify-between items-start mb-6">
                <Moon size={40} className="text-gold" />
                <span className="bg-gold/20 text-gold text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Overnight Momentum</span>
              </div>
              <h3 className="text-white font-display text-2xl font-bold mb-4">BTST Alpha</h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-8 flex-grow">
                Buy Today Sell Tomorrow research service for traders seeking overnight momentum opportunities. 1 research-backed trade issued daily between 2:45–3:15 PM.
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                <span className="text-xs text-white/70 bg-white/5 border border-white/10 px-2 py-1 rounded">1 Trade/Day</span>
                <span className="text-xs text-white/70 bg-white/5 border border-white/10 px-2 py-1 rounded">Exit Next Morning</span>
                <span className="text-xs text-white/70 bg-white/5 border border-white/10 px-2 py-1 rounded">WhatsApp Alerts</span>
              </div>
            </motion.div>

            {/* Positional Alpha */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              whileHover={{ scale: 1.02 }}
              className="bg-[#0A1628] rounded-2xl p-8 border-t-[4px] border-t-gold shadow-lg flex flex-col cursor-pointer"
              onClick={() => { setActiveAudience('Trader'); setActiveCategory('Positional Alpha') }}
            >
              <div className="flex justify-between items-start mb-6">
                <TrendingUp size={40} className="text-gold" />
                <span className="bg-gold/20 text-gold text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">2 Week Holding</span>
              </div>
              <h3 className="text-white font-display text-2xl font-bold mb-4">Positional Alpha</h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-8 flex-grow">
                Short-term positional research service for traders who prefer holding stocks for days to weeks. 3–4 carefully researched opportunities per month.
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                <span className="text-xs text-white/70 bg-white/5 border border-white/10 px-2 py-1 rounded">3–4 Trades/Month</span>
                <span className="text-xs text-white/70 bg-white/5 border border-white/10 px-2 py-1 rounded">~2 Week Hold</span>
                <span className="text-xs text-white/70 bg-white/5 border border-white/10 px-2 py-1 rounded">WhatsApp Alerts</span>
              </div>
            </motion.div>

            {/* Capital Compounders */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              whileHover={{ scale: 1.02 }}
              className="bg-[#0A1628] rounded-2xl p-8 border-t-[4px] border-t-gold shadow-lg flex flex-col cursor-pointer"
              onClick={() => { setActiveAudience('Investor'); setActiveCategory('Capital Compounders') }}
            >
              <div className="flex justify-between items-start mb-6">
                <BarChart2 size={40} className="text-gold" />
                <span className="bg-gold/20 text-gold text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">12–24 Month Hold</span>
              </div>
              <h3 className="text-white font-display text-2xl font-bold mb-4">Capital Compounders</h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-8 flex-grow">
                Medium-term equity strategy focusing on fundamentally strong companies for consistent compounding. 1 high-conviction recommendation per month.
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                <span className="text-xs text-white/70 bg-white/5 border border-white/10 px-2 py-1 rounded">1 Trade/Month</span>
                <span className="text-xs text-white/70 bg-white/5 border border-white/10 px-2 py-1 rounded">25–35% Target</span>
                <span className="text-xs text-white/70 bg-white/5 border border-white/10 px-2 py-1 rounded">WhatsApp Alerts</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Sticky Filter Bar ── */}
      <div className="sticky top-[72px] lg:top-[88px] z-40 bg-[#F8F9FA]/90 backdrop-blur-md border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-6 py-4 flex flex-col gap-3">

          {/* Audience Tab Toggle */}
          <div className="flex justify-center">
            <div className="relative flex items-center bg-navy rounded-full p-1 gap-0.5">
              {(['Trader', 'Investor'] as AudienceTab[]).map((tab) => (
                <button
                  key={tab}
                  id={`audience-tab-${tab.toLowerCase()}`}
                  onClick={() => setActiveAudience(tab)}
                  className="relative px-6 py-2 rounded-full text-sm font-semibold transition-colors z-10"
                  style={{
                    color: activeAudience === tab ? '#0A1628' : 'rgba(255,255,255,0.6)',
                  }}
                >
                  {activeAudience === tab && (
                    <motion.div
                      layoutId="audience-indicator"
                      className="absolute inset-0 rounded-full"
                      style={{ backgroundColor: '#F0A500' }}
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{tab} Services</span>
                </button>
              ))}
            </div>
          </div>

          {/* Sub-Category Chips */}
          <div className="flex w-full overflow-x-auto justify-start md:justify-center gap-2 px-4 py-2 [&::-webkit-scrollbar]:hidden" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            <AnimatePresence mode="popLayout">
              {availableCategories.map((cat) => (
                <motion.button
                  layout
                  type="button"
                  key={cat}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.15 }}
                  onClick={() => setActiveCategory(cat)}
                  className={`relative px-5 py-2 rounded-full text-sm font-semibold transition-colors flex-shrink-0 ${
                    activeCategory === cat ? 'text-navy' : 'text-gray-500 hover:text-navy hover:bg-gray-100'
                  }`}
                >
                  {activeCategory === cat && (
                    <motion.div
                      layoutId="tab-indicator"
                      className="absolute inset-0 bg-gold rounded-full"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{cat}</span>
                </motion.button>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* ── Service Cards Grid ── */}
      <div id="services-grid" className="container mx-auto px-6 pt-12">
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {/* Live-priced cards */}
            {fetchState.status !== 'loading' && filteredServices.map((service) => {
              const programs = fetchState.status === 'success' ? fetchState.programs : []
              const { plan, program } = getPlanForService(service.id, programs)
              return (
                <motion.div
                  layout
                  key={service.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                >
                  <ServiceCard
                    service={service}
                    realPlan={plan}
                    realProgram={program}
                    onDescriptionClick={handleDescriptionClick}
                    onBuyClick={(srv) => handleBuy(srv, plan, program)}
                    isLoadingPrices={false}
                  />
                </motion.div>
              )
            })}

            {/* Skeleton cards while loading */}
            {fetchState.status === 'loading' && filteredServices.map((service) => (
              <motion.div
                layout
                key={service.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2 }}
              >
                <ServiceCard
                  service={service}
                  realPlan={null}
                  realProgram={null}
                  onDescriptionClick={handleDescriptionClick}
                  onBuyClick={() => { }}
                  isLoadingPrices={true}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* ── Modal ── */}
      {selectedService && (
        <ServiceModal
          service={selectedService}
          mode="description"
          realPlan={null}
          realProgram={null}
          onClose={closeModal}
        />
      )}
    </div>
  )
}

export default function ServicesPage(): JSX.Element {
  return (
    <Suspense fallback={<div className="min-h-screen bg-navy flex items-center justify-center text-white">Loading Services...</div>}>
      <ServicesContent />
    </Suspense>
  )
}
