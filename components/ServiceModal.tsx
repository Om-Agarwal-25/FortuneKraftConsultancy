'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Check, Zap, Users, AlertTriangle, Info, Star, Bell } from 'lucide-react'
import type { Service, ApiServiceResponse, ModalMode } from '@/types'
import { serviceDescriptions } from '@/lib/serviceDescriptions'

interface ServiceModalProps {
  service: Service
  mode: ModalMode
  onClose: () => void
}

type FetchState =
  | { status: 'loading' }
  | { status: 'success'; data: ApiServiceResponse }
  | { status: 'error' }

export default function ServiceModal({ service, mode, onClose }: ServiceModalProps): JSX.Element {
  const [fetchState, setFetchState] = useState<FetchState>({ status: 'loading' })

  // Get the service family name for description lookup
  const familyName = service.title.split(' — ')[0] ?? ''
  const desc = serviceDescriptions[familyName]

  // Only fetch API for buy mode
  useEffect(() => {
    if (mode !== 'buy') return
    async function fetchData(): Promise<void> {
      try {
        const res = await fetch(`/api/get-service?serviceId=${encodeURIComponent(service.id)}`)
        if (!res.ok) throw new Error('Failed')
        const data: ApiServiceResponse = await res.json() as ApiServiceResponse
        setFetchState({ status: 'success', data })
      } catch {
        setFetchState({ status: 'error' })
      }
    }
    void fetchData()
  }, [mode, service.id])

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
                {/* Buy Mode — API fetch */}
                {fetchState.status === 'loading' && (
                  <div className="flex flex-col gap-4 animate-pulse">
                    <div className="h-8 bg-gray-100 rounded-lg w-3/4" />
                    <div className="h-4 bg-gray-100 rounded w-full" />
                    <div className="h-4 bg-gray-100 rounded w-5/6" />
                    <div className="h-12 bg-gray-100 rounded-xl w-full" />
                  </div>
                )}
                {fetchState.status === 'error' && (
                  <div className="text-center py-8">
                    <p className="text-navy font-semibold mb-2">Unable to load purchase details</p>
                    <p className="text-gray-500 text-sm mb-6">Please contact us directly to subscribe to this plan.</p>
                    <div className="flex gap-3 justify-center">
                      <a
                        href="https://mail.google.com/mail/?view=cm&to=support@fortunekraftconsultancy.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gold text-navy font-bold px-6 py-3 rounded-full hover:bg-gold-light transition-colors"
                      >
                        Email Us
                      </a>
                      <a
                        href="https://wa.me/917030151276"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-navy text-white font-bold px-6 py-3 rounded-full hover:bg-navy-light transition-colors"
                      >
                        WhatsApp Us
                      </a>
                    </div>
                  </div>
                )}
                {fetchState.status === 'success' && (
                  <div className="space-y-6">
                    <p className="text-[#23344E] text-[15px] leading-relaxed">{fetchState.data.description}</p>
                    {fetchState.data.features && (
                      <div className="grid grid-cols-1 gap-2">
                        {fetchState.data.features.map((f) => (
                          <div key={f} className="flex items-center gap-3 p-3 bg-[#F8F9FA] rounded-lg">
                            <Check size={14} className="text-gold flex-shrink-0" />
                            <p className="text-[#23344E] text-[14px]">{f}</p>
                          </div>
                        ))}
                      </div>
                    )}
                    <div className="flex gap-3">
                      {fetchState.data.whatsappNumber && (
                        <a
                          href={`https://wa.me/${fetchState.data.whatsappNumber}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 bg-gold text-navy font-bold py-3 rounded-full text-center hover:bg-gold-light transition-colors"
                        >
                          WhatsApp to Buy
                        </a>
                      )}
                      {fetchState.data.purchaseUrl && (
                        <a
                          href={fetchState.data.purchaseUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 bg-navy text-white font-bold py-3 rounded-full text-center hover:bg-navy-light transition-colors"
                        >
                          Subscribe Now
                        </a>
                      )}
                    </div>
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
