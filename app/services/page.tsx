'use client'

import { useState, useEffect, Suspense } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useSearchParams } from 'next/navigation'
import type { Service, ServiceCategory, ModalMode } from '@/types'
import { services } from '@/lib/servicesData'
import ServiceCard from '@/components/ServiceCard'
import ServiceModal from '@/components/ServiceModal'
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'

const CATEGORIES: ServiceCategory[] = ['All', 'Equity Research', 'Market insights', 'Investment recommendations', 'Demo']

function ServicesContent(): JSX.Element {
  const searchParams = useSearchParams()
  const initialTab = searchParams.get('tab') as ServiceCategory | null

  const [activeCategory, setActiveCategory] = useState<ServiceCategory>('All')
  const [selectedService, setSelectedService] = useState<Service | null>(null)
  const [modalMode, setModalMode] = useState<ModalMode>('description')

  useEffect(() => {
    if (initialTab && CATEGORIES.includes(initialTab)) {
      setActiveCategory(initialTab)
    }
  }, [initialTab])

  const filteredServices: Service[] = activeCategory === 'All'
    ? services
    : services.filter((s) => s.category === activeCategory)

  const handleDescriptionClick = (service: Service): void => {
    setModalMode('description')
    setSelectedService(service)
  }

  const handleBuyClick = (service: Service): void => {
    setModalMode('buy')
    setSelectedService(service)
  }

  const closeModal = (): void => {
    setSelectedService(null)
  }

  return (
    <div className="min-h-screen bg-[#F8F9FA] pb-24">
      <section className="bg-gradient-to-br from-[#0A1628] to-[#1a3a5c] pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(240,165,0,0.4) 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="text-gold text-sm font-semibold tracking-widest uppercase mb-4 flex items-center justify-center gap-2">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="text-white/50">&gt;</span>
            <span>Our Services</span>
          </div>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-6">Our Services</h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">Explore our tailored advisory plans, designed to match your trading style and risk appetite.</p>
        </div>
      </section>

      <div className="sticky top-[72px] lg:top-[88px] z-40 bg-[#F8F9FA]/90 backdrop-blur-md border-b border-gray-200 py-4 shadow-sm">
        <div className="container mx-auto px-6">
          <div className="flex overflow-x-auto pb-2 gap-2" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            <style jsx>{`
              div::-webkit-scrollbar {
                display: none;
              }
            `}</style>
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`relative px-6 py-2.5 rounded-full text-sm font-semibold transition-colors flex-shrink-0 ${activeCategory === cat ? 'text-navy' : 'text-gray-500 hover:text-navy hover:bg-gray-100'
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
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 pt-12">
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service) => (
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
                  onDescriptionClick={handleDescriptionClick}
                  onBuyClick={handleBuyClick}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {selectedService && (
        <ServiceModal
          service={selectedService}
          mode={modalMode}
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

