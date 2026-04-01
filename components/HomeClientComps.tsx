"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function HeroButtons(): JSX.Element {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
      <Link href="/services">
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="bg-gold text-navy font-semibold px-8 py-4 rounded-full min-w-[200px]"
        >
          Explore Services
        </motion.button>
      </Link>
      <Link href="/services?tab=Trial+Plans">
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="bg-transparent text-gold border-2 border-gold font-semibold px-8 py-4 rounded-full min-w-[200px] hover:bg-gold/10"
        >
          Book a Free Demo
        </motion.button>
      </Link>
    </div>
  );
}

export function AnimatedWhyCard({
  children,
  index,
}: {
  children: React.ReactNode;
  index: number;
}): JSX.Element {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ delay: index * 0.05, duration: 0.5 }}
      whileHover={{ y: -4 }}
      className="bg-white rounded-xl p-8 transition-colors duration-300 border border-transparent hover:border-gold/30"
      style={{ boxShadow: "0 4px 24px rgba(10,22,40,0.08)" }}
    >
      {children}
    </motion.div>
  );
}

export function AnimatedServicePreview({
  children,
  index,
}: {
  children: React.ReactNode;
  index: number;
}): JSX.Element {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ delay: index * 0.05, duration: 0.5 }}
      whileHover={{ scale: 1.02 }}
      className="bg-navy-dark rounded-xl p-8 border-t-4 border-gold relative overflow-hidden group"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      {children}
    </motion.div>
  );
}

export function AnimatedStep({
  children,
  index,
}: {
  children: React.ReactNode;
  index: number;
}): JSX.Element {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ delay: index * 0.05, duration: 0.5 }}
      className="flex flex-col items-center text-center relative z-10"
    >
      {children}
    </motion.div>
  );
}

export function ScrollIndicator(): JSX.Element {
  return (
    <motion.div
      animate={{ y: [0, 10, 0] }}
      transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
      className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gold opacity-80"
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="6 9 12 15 18 9"></polyline>
      </svg>
    </motion.div>
  );
}
