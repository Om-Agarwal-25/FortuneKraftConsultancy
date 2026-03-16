'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function HeroChart(): JSX.Element {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return <div className="w-full max-w-[500px] h-[350px]"></div>

  // Create SVG path for line chart
  const pathData = "M 50 250 Q 80 200 120 220 T 180 150 T 260 170 T 340 90 T 400 110 T 450 40"
  const filledPathData = `${pathData} L 450 300 L 50 300 Z`

  // Candlesticks (x, y, h, up)
  const candles = [
    { x: 70, y: 220, h: 30, up: true },
    { x: 100, y: 210, h: 25, up: false },
    { x: 130, y: 200, h: 40, up: true },
    { x: 160, y: 160, h: 35, up: true },
    { x: 190, y: 155, h: 20, up: false },
    { x: 220, y: 160, h: 25, up: false },
    { x: 250, y: 140, h: 45, up: true },
    { x: 280, y: 110, h: 30, up: true },
    { x: 310, y: 115, h: 20, up: false },
    { x: 340, y: 80, h: 50, up: true },
    { x: 370, y: 85, h: 15, up: false },
    { x: 400, y: 95, h: 20, up: false },
    { x: 430, y: 50, h: 55, up: true },
  ]

  return (
    <div className="relative w-full max-w-[500px] h-[400px]">
      <svg viewBox="0 0 500 300" className="w-full h-full drop-shadow-2xl">
        <defs>
          <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(240,165,0,0.4)" />
            <stop offset="100%" stopColor="rgba(240,165,0,0)" />
          </linearGradient>
        </defs>

        {/* Grid lines */}
        {[50, 100, 150, 200, 250].map(y => (
          <line key={y} x1="50" y1={y} x2="480" y2={y} stroke="rgba(255,255,255,0.1)" strokeWidth="1" strokeDasharray="4 4" />
        ))}

        {/* Y Axis Labels */}
        {['₹2000', '₹1800', '₹1600', '₹1400', '₹1200'].map((label, i) => (
          <text key={label} x="40" y={(i * 50) + 55} fill="rgba(255,255,255,0.4)" fontSize="10" textAnchor="end">{label}</text>
        ))}

        {/* X Axis Labels */}
        {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'].map((label, i) => (
          <text key={label} x={80 + (i * 70)} y="280" fill="rgba(255,255,255,0.4)" fontSize="10" textAnchor="middle">{label}</text>
        ))}

        {/* Candlesticks */}
        {candles.map((c, i) => (
          <motion.g 
            key={i}
            initial={{ opacity: 0, scaleY: 0 }}
            animate={{ opacity: 1, scaleY: 1 }}
            transition={{ duration: 0.6, delay: 0.5 + (i * 0.05) }}
            style={{ transformOrigin: `center ${c.y + c.h/2}px` }}
          >
            {/* Wick */}
            <line x1={c.x} y1={c.y - 10} x2={c.x} y2={c.y + c.h + 10} stroke={c.up ? '#22c55e' : '#ef4444'} strokeWidth="1" />
            {/* Body */}
            <rect x={c.x - 3} y={c.y} width="6" height={c.h} fill={c.up ? '#22c55e' : '#ef4444'} rx="1" />
          </motion.g>
        ))}

        {/* Filled Area */}
        <motion.path
          d={filledPathData}
          fill="url(#chartFill)"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        />

        {/* Line Chart */}
        <motion.path
          d={pathData}
          fill="none"
          stroke="#F0A500"
          strokeWidth="2.5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut', delay: 0.5 }}
        />
        
        {/* Glowing End Dot */}
        <motion.circle
          cx="450" cy="40" r="4" fill="#F0A500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        />
        <motion.circle
          cx="450" cy="40" r="4" fill="#F0A500"
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: [0.8, 0], scale: [1, 3] }}
          transition={{ duration: 2, repeat: Infinity, delay: 2.1 }}
        />
      </svg>

      {/* Floating Cards */}
      <motion.div 
        className="absolute top-8 right-6 bg-white rounded-lg shadow-xl p-2.5 border border-gray-100 flex flex-col gap-1 z-10"
        animate={{ y: [0, -8, 0] }}
        transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
      >
        <span className="text-[10px] font-bold text-navy uppercase tracking-wider">NIFTY 50</span>
        <span className="text-sm font-bold text-green-500">▲ 2.4%</span>
      </motion.div>

      <motion.div 
        className="absolute top-[40%] left-4 bg-white rounded-lg shadow-xl p-2.5 border border-gray-100 flex flex-col gap-1 z-10"
        animate={{ y: [0, -6, 0] }}
        transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut', delay: 0.5 }}
      >
        <span className="text-[10px] font-bold text-navy uppercase tracking-wider">SENSEX</span>
        <span className="text-sm font-bold text-green-500">▲ 1.8%</span>
      </motion.div>

      <motion.div 
        className="absolute bottom-16 right-16 bg-navy rounded-lg shadow-xl p-3 border border-white/10 flex flex-col gap-1 z-10"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut', delay: 1 }}
      >
        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Portfolio</span>
        <span className="text-base font-bold text-gold">+₹24,500</span>
      </motion.div>
    </div>
  )
}
