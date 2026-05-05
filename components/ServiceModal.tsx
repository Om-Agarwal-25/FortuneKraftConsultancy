'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Check, Zap, Users, AlertTriangle, Info, Star, Bell } from 'lucide-react'
import type { Service, ModalMode } from '@/types'
import type { TechnotronProgram, TechnotronPricingPlan } from '@/types/api'
import { serviceDescriptions } from '@/lib/serviceDescriptions'

import type { CleanProgram, CleanPlan } from '@/app/api/get-all-services/route'

interface ServiceModalProps {
  service: Service
  mode: ModalMode
  realPlan: CleanPlan | null
  realProgram: CleanProgram | null
  onClose: () => void
}

type BuyFetchState =
  | { status: 'loading' }
  | { status: 'success'; program: TechnotronProgram }
  | { status: 'error'; message?: string }

export default function ServiceModal({ service, mode, realPlan, realProgram, onClose }: ServiceModalProps): JSX.Element {
  const [buyState, setBuyState] = useState<BuyFetchState>({ status: 'loading' })
  const [selectedPlan, setSelectedPlan] = useState<TechnotronPricingPlan | CleanPlan | null>(null)

  // Get the service family name for description lookup
  const familyName = service.title.split(' — ')[0] ?? ''
  const desc = serviceDescriptions[familyName]

  // Only fetch API for buy mode
  useEffect(() => {
    if (mode !== 'buy') return

    // If we already have the data from the page, use it directly
    if (realPlan && realProgram) {
      setBuyState({ status: 'success', program: realProgram as unknown as TechnotronProgram })
      setSelectedPlan(realPlan)
      return
    }

    async function fetchData(): Promise<void> {
      try {
        const res = await fetch(`/api/get-service?serviceId=${encodeURIComponent(service.id)}`)
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        const data = await res.json() as { matched: boolean; program?: TechnotronProgram; programs?: TechnotronProgram[] }

        if (data.matched && data.program) {
          setBuyState({ status: 'success', program: data.program })
          // Auto-select first non-trial plan
          const firstPlan = data.program.pricing.find((p) => !p.trialPack) ?? data.program.pricing[0] ?? null
          setSelectedPlan(firstPlan)
        } else {
          setBuyState({ status: 'error', message: 'Service details not available at this time.' })
        }
      } catch (error) {
        console.error('Buy fetch error:', error)
        setBuyState({ status: 'error' })
      }
    }
    void fetchData()
  }, [mode, service.id, realPlan, realProgram])

  // Close on Escape key
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent): void {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [onClose])

  // Prevent background scroll
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [])

  return (
    <AnimatePresence>
      {/* Backdrop */}
      <motion.div
        className="fixed inset-0 z-[9998] overflow-hidden"
        style={{ background: 'rgba(10,22,40,0.85)', backdropFilter: 'blur(4px)' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      />

      {/* Modal */}
      <motion.div
        className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        onClick={onClose}
      >
        <div
          className="bg-white rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto overscroll-contain"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="bg-navy sticky top-0 z-10 px-6 py-5 flex items-start justify-between rounded-t-2xl">
            <div>
              <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-1">
                {familyName}
              </p>
              <h2 className="font-display text-white text-2xl font-bold">
                {mode === 'description' ? 'Service Overview' : 'Subscribe to ' + service.title}
              </h2>
              <p className="text-white/60 text-sm mt-1">{service.duration} Plan — {service.price}</p>
            </div>
            <button
              onClick={onClose}
              className="text-white/60 hover:text-gold transition-colors mt-1 flex-shrink-0"
            >
              <X size={22} />
            </button>
          </div>

          {/* Body */}
          <div className="p-6 space-y-8">
            {mode === 'description' && desc ? (
              <>
                {/* Tagline */}
                <p className="text-gold font-semibold text-lg italic">{desc.tagline}</p>

                {/* Quick Stats Row */}
                <div className="grid grid-cols-3 gap-3">
                  <div className="bg-[#F8F9FA] rounded-xl p-4 text-center border border-[#0A1628]/10">
                    <p className="text-navy font-bold text-xl font-display">{desc.frequency}</p>
                    <p className="text-gray-500 text-xs mt-1">Trades</p>
                  </div>
                  <div className="bg-[#F8F9FA] rounded-xl p-4 text-center border border-[#0A1628]/10">
                    <p className="text-navy font-bold text-xl font-display">{desc.holdingPeriod}</p>
                    <p className="text-gray-500 text-xs mt-1">Holding Period</p>
                  </div>
                  <div className="bg-[#F8F9FA] rounded-xl p-4 text-center border border-[#0A1628]/10">
                    <p className="text-navy font-bold text-xl font-display">Cash Market</p>
                    <p className="text-gray-500 text-xs mt-1">Segment</p>
                  </div>
                </div>

                {/* Overview */}
                <div>
                  <h3 className="font-display text-navy text-xl font-bold mb-3 flex items-center gap-2">
                    <Info size={18} className="text-gold" /> Service Overview
                  </h3>
                  <div className="w-12 h-0.5 bg-gold rounded mb-4" />
                  <p className="text-[#23344E] text-[15px] leading-relaxed">{desc.overview}</p>
                </div>

                {/* Why Choose */}
                <div>
                  <h3 className="font-display text-navy text-xl font-bold mb-3 flex items-center gap-2">
                    <Star size={18} className="text-gold" /> Why Choose This Service?
                  </h3>
                  <div className="w-12 h-0.5 bg-gold rounded mb-4" />
                  <div className="grid grid-cols-1 gap-4">
                    {desc.whyChoose.map((item) => (
                      <div key={item.title} className="flex gap-3 p-4 bg-[#F8F9FA] rounded-xl border border-[#0A1628]/10">
                        <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check size={14} className="text-gold-dark" />
                        </div>
                        <div>
                          <p className="text-navy font-semibold text-[15px] mb-1">{item.title}</p>
                          <p className="text-[#23344E] text-[14px] leading-relaxed">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Key Highlights */}
                <div>
                  <h3 className="font-display text-navy text-xl font-bold mb-3 flex items-center gap-2">
                    <Zap size={18} className="text-gold" /> Key Highlights
                  </h3>
                  <div className="w-12 h-0.5 bg-gold rounded mb-4" />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {desc.keyHighlights.map((item) => (
                      <div key={item.title} className="p-4 bg-[#F8F9FA] rounded-xl border border-[#0A1628]/10">
                        <p className="text-navy font-semibold text-[15px] mb-1">{item.title}</p>
                        <p className="text-[#23344E] text-[14px] leading-relaxed">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Mobile Notifications / Delivery */}
                <div className="bg-navy rounded-xl p-5 flex gap-4 items-start">
                  <Bell size={22} className="text-gold flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-white font-semibold mb-1">Mobile Notifications</p>
                    <p className="text-white/75 text-[14px] leading-relaxed">{desc.delivery}</p>
                  </div>
                </div>

                {/* How Recommendations Work */}
                <div>
                  <h3 className="font-display text-navy text-xl font-bold mb-3 flex items-center gap-2">
                    <Info size={18} className="text-gold" /> {desc.howRecommendationsWork.title}
                  </h3>
                  <div className="w-12 h-0.5 bg-gold rounded mb-4" />
                  <p className="text-[#23344E] text-[14px] mb-3">Trade alerts are delivered with clear execution levels, typically including:</p>
                  <div className="grid grid-cols-1 gap-2">
                    {desc.howRecommendationsWork.points.map((point) => (
                      <div key={point} className="flex items-center gap-3 p-3 bg-[#F8F9FA] rounded-lg border border-[#0A1628]/10">
                        <div className="w-2 h-2 rounded-full bg-gold flex-shrink-0" />
                        <p className="text-[#23344E] text-[14px]">{point}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Who Is This For */}
                <div>
                  <h3 className="font-display text-navy text-xl font-bold mb-3 flex items-center gap-2">
                    <Users size={18} className="text-gold" /> Who Is This Service For?
                  </h3>
                  <div className="w-12 h-0.5 bg-gold rounded mb-4" />
                  <div className="grid grid-cols-1 gap-2">
                    {desc.whoIsItFor.map((item) => (
                      <div key={item} className="flex items-center gap-3 p-3 bg-[#F8F9FA] rounded-lg border border-[#0A1628]/10">
                        <Check size={14} className="text-gold flex-shrink-0" />
                        <p className="text-[#23344E] text-[14px]">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Important Note */}
                <div className="border-l-4 border-gold bg-gold/10 rounded-r-xl p-5 flex gap-3">
                  <AlertTriangle size={18} className="text-gold-dark flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-navy font-semibold mb-1">Important Note</p>
                    <p className="text-[#23344E] text-[14px] leading-relaxed">{desc.importantNote}</p>
                  </div>
                </div>

                {/* Risk Note */}
                <div className="bg-[#F8F9FA] border border-[#0A1628]/10 rounded-xl p-4">
                  <p className="text-gray-500 text-xs leading-relaxed">{desc.riskNote}</p>
                </div>
              </>
            ) : mode === 'buy' ? (
              <>
                {/* Loading skeleton */}
                {buyState.status === 'loading' && (
                  <div className="flex flex-col gap-4 animate-pulse">
                    <div className="h-6 bg-gray-100 rounded-lg w-2/3" />
                    <div className="h-4 bg-gray-100 rounded w-full" />
                    <div className="grid grid-cols-2 gap-3">
                      {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="h-24 bg-gray-100 rounded-xl" />
                      ))}
                    </div>
                    <div className="h-12 bg-gray-100 rounded-xl" />
                  </div>
                )}

                {/* Error state */}
                {buyState.status === 'error' && (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 rounded-full bg-red-50 flex items-center justify-center mx-auto mb-4">
                      <AlertTriangle size={28} className="text-red-400" />
                    </div>
                    <p className="text-navy font-semibold mb-2">Unable to load purchase details</p>
                    <p className="text-gray-500 text-sm mb-6">
                      {buyState.message ?? 'Please contact us directly to subscribe to this plan.'}
                    </p>
                    <div className="flex gap-3 justify-center flex-wrap">
                      <a
                        href="https://t.me/fortunekraftconsultancy"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gold text-navy font-bold px-6 py-3 rounded-full hover:bg-gold-light transition-colors"
                      >
                        Telegram
                      </a>
                      <a
                        href="https://mail.google.com/mail/?view=cm&to=support@fortunekraftconsultancy.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-navy text-white font-bold px-6 py-3 rounded-full hover:bg-navy-light transition-colors"
                      >
                        Email Us
                      </a>
                    </div>
                  </div>
                )}

                {/* Success state */}
                {buyState.status === 'success' && (
                  <div className="space-y-6">
                    {/* Program short details */}
                    <p className="text-[#23344E] text-[15px] leading-relaxed">
                      {buyState.program.programShortDetails}
                    </p>

                    {/* Plan selector */}
                    <div>
                      <h3 className="text-navy font-bold text-lg mb-3">Select Your Plan</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {buyState.program.pricing.map((plan) => {
                          const isSelected = selectedPlan?.planId === plan.planId
                          const isGstApplied = 'gstApplied' in plan ? plan.gstApplied : plan.gstToBeApplied
                          const finalPrice = Number('finalPrice' in plan 
                            ? plan.finalPrice 
                            : (isGstApplied 
                                ? Math.round(plan.discountedPrice * (1 + plan.gstPercentage / 100))
                                : plan.discountedPrice))
                          const originalPrice = isGstApplied
                            ? Math.round(plan.actualPrice * (1 + plan.gstPercentage / 100))
                            : plan.actualPrice
                          const hasDiscount = plan.actualPrice !== plan.discountedPrice
                          const discountPct = Number('discountPercent' in plan
                            ? plan.discountPercent
                            : (hasDiscount
                                ? Math.round(((plan.actualPrice - plan.discountedPrice) / plan.actualPrice) * 100)
                                : 0))

                          return (
                            <button
                              key={plan.planId}
                              onClick={() => setSelectedPlan(plan)}
                              className={`relative p-4 rounded-xl border-2 text-left transition-all ${
                                isSelected
                                  ? 'border-gold bg-gold/10'
                                  : 'border-[#0A1628]/10 bg-[#F8F9FA] hover:border-gold/50'
                              }`}
                            >
                              {plan.trialPack && (
                                <span className="absolute top-2 right-2 text-xs bg-green-100 text-green-700 font-semibold px-2 py-0.5 rounded-full">
                                  Trial
                                </span>
                              )}
                              {hasDiscount && !plan.trialPack && (
                                <span className="absolute top-2 right-2 text-xs bg-gold/20 text-gold-dark font-semibold px-2 py-0.5 rounded-full">
                                  {discountPct}% OFF
                                </span>
                              )}
                              <p className="text-navy font-bold text-lg">
                                ₹{finalPrice.toLocaleString('en-IN')}
                              </p>
                              {hasDiscount && (
                                <p className="text-gray-400 text-xs line-through">
                                  ₹{originalPrice.toLocaleString('en-IN')}
                                </p>
                              )}
                              <p className="text-gray-600 text-sm mt-1">{plan.displayDuration}</p>
                              {Boolean('gstApplied' in plan ? plan.gstApplied : plan.gstToBeApplied) && (
                                <p className="text-gray-400 text-xs mt-0.5">Incl. {plan.gstPercentage}% GST</p>
                              )}
                            </button>
                          )
                        })}
                      </div>
                    </div>

                    {/* Selected plan CTA */}
                    {selectedPlan && (
                      <div className="bg-navy rounded-xl p-5 space-y-3">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-white/60 text-sm">{selectedPlan.displayDuration} Plan</p>
                            <p className="text-gold font-bold text-2xl font-display">
                              ₹{Number('finalPrice' in selectedPlan 
                                ? selectedPlan.finalPrice 
                                : (
                                  ('gstApplied' in selectedPlan ? selectedPlan.gstApplied : selectedPlan.gstToBeApplied)
                                    ? Math.round(selectedPlan.discountedPrice * (1 + selectedPlan.gstPercentage / 100))
                                    : selectedPlan.discountedPrice
                                  )
                                ).toLocaleString('en-IN')}
                            </p>
                            {Boolean('gstApplied' in selectedPlan ? selectedPlan.gstApplied : selectedPlan.gstToBeApplied) && (
                              <p className="text-white/40 text-xs">Inclusive of {selectedPlan.gstPercentage}% GST</p>
                            )}
                          </div>
                          <a
                            href={
                              ('planPurchaseLink' in selectedPlan && selectedPlan.planPurchaseLink)
                                ? selectedPlan.planPurchaseLink
                                : (buyState.status === 'success' ? buyState.program.pricePageLink : '#')
                            }
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-gold text-navy font-bold px-6 py-3 rounded-full hover:bg-gold-light transition-colors text-sm"
                          >
                            Subscribe Now →
                          </a>
                        </div>
                      </div>
                    )}

                    {/* Trial pack note if available */}
                    {buyState.program.hasTrialPack && (
                      <div className="border border-green-200 bg-green-50 rounded-xl p-4 flex gap-3">
                        <Check size={16} className="text-green-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-green-800 font-semibold text-sm">Trial Pack Available</p>
                          <p className="text-green-700 text-xs mt-0.5">
                            Try this service for ₹{buyState.program.trialPackPrice} before committing to a full plan.
                          </p>
                        </div>
                      </div>
                    )}

                    {/* Risk disclaimer */}
                    <p className="text-gray-400 text-xs leading-relaxed text-center">
                      Investment in securities market are subject to market risks. Read all related documents carefully before investing. Past performance is not indicative of future results.
                    </p>
                  </div>
                )}
              </>
            ) : (
              <p className="text-gray-500 text-center py-8">Service details not available.</p>
            )}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
