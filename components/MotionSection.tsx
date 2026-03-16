'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'
import type { MotionStyle } from 'framer-motion'

interface MotionSectionProps {
  children: ReactNode
  className?: string
  delay?: number
  style?: MotionStyle
}

export function MotionSection({ children, className = '', delay = 0, style }: MotionSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={className}
      style={style ?? {}}
    >
      {children}
    </motion.div>
  )
}
