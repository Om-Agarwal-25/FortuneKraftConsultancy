'use client'

import { motion } from 'framer-motion'
import type { MotionStyle } from 'framer-motion'
import * as LucideIcons from 'lucide-react'
import Link from 'next/link'
import StatsCounter from '@/components/StatsCounter'
import React from 'react'

export function FadeIn({ children, className = '', delay = 0 }: { children: React.ReactNode, className?: string, delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function SlideIn({ children, className = '', direction = 'left', delay = 0 }: { children: React.ReactNode, className?: string, direction?: 'left' | 'right', delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: direction === 'left' ? -40 : 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.7, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function ScaleIn({ children, className = '', delay = 0, style }: { children: React.ReactNode, className?: string, delay?: number, style?: MotionStyle }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={className}
      style={style ?? {}}
    >
      {children}
    </motion.div>
  )
}

export function Icon({ name, className }: { name: keyof typeof LucideIcons, className?: string }) {
  const IconComponent = LucideIcons[name] as React.ElementType
  if (!IconComponent) return null
  return <IconComponent className={className} />
}

export function FeatureCard({ icon, title, description, delay = 0 }: { icon: string, title: string, description: string, delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] p-8 border-t-[3px] border-transparent hover:border-gold transition-all duration-300"
    >
      <div className="w-14 h-14 rounded-lg bg-[#0A1628] flex items-center justify-center mb-6">
        <Icon name={icon as keyof typeof LucideIcons} className="w-7 h-7 text-gold" />
      </div>
      <h3 className="text-[#0A1628] font-bold text-xl mb-4">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </motion.div>
  )
}

const staggerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05
    }
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const itemVariants: any = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] } }
}

export function StaggerContainer({ children, className = '' }: { children: React.ReactNode, className?: string }) {
  return (
    <motion.div
      variants={staggerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({ children, className = '' }: { children: React.ReactNode, className?: string }) {
  return (
    <motion.div variants={itemVariants} className={className}>
      {children}
    </motion.div>
  )
}

export function CheckFeature({ title, description }: { title: string, description: string }) {
  return (
    <motion.div variants={itemVariants} className="flex gap-4">
      <div className="flex-shrink-0 mt-1">
        <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center border border-gold/30">
          <LucideIcons.Check className="w-4 h-4 text-gold" strokeWidth={3} />
        </div>
      </div>
      <div>
        <h3 className="text-white font-bold text-lg mb-2">{title}</h3>
        <p className="text-gray-400 leading-relaxed text-sm">{description}</p>
      </div>
    </motion.div>
  )
}

// Reuse StatsCounter
export function StatsSection() {
  const stats = [
    // { value: '10000', label: 'Active Investors Served', suffix: '+' },
    { value: '21', label: 'Day Grievance Resolution', suffix: '' },
    { value: '7', label: 'Years in the Market', suffix: '+' },
    { value: '3', label: 'Premium Services', suffix: '' },
  ]

  return (
    <section className="py-20 bg-[#0A1628] border-b border-white/10 relative overflow-hidden">
      <div className="absolute inset-0 bg-gold/5 opacity-5" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: idx * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gold mb-2">
                <StatsCounter target={`${stat.value}${stat.suffix}`} label={stat.label} />
              </div>
              <div className="text-white/80 text-sm md:text-base font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function CtaBanner() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <ScaleIn className="bg-navy rounded-3xl p-12 lg:p-20 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] pointer-events-none mix-blend-overlay" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-gold opacity-10 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 leading-tight">
              Ready to Trade Smarter?
            </h2>
            <p className="text-lg text-gray-300 mb-10">
              Join investors who trust FortuneKraft for their financial growth.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/services"
                className="w-full sm:w-auto px-8 py-4 bg-gold hover:bg-gold-light text-navy font-bold rounded-xl transition-all hover:scale-105 active:scale-95"
              >
                Explore Services
              </Link>
              <Link
                href="/contact"
                className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-gold text-gold hover:bg-gold/10 font-bold rounded-xl transition-all hover:scale-105 active:scale-95"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </ScaleIn>
      </div>
    </section>
  )
}
