"use client";

import { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import type { Variants, MotionValue } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import type { NavLink } from "@/types";

const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Our Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "FAQs", href: "/faqs" },
];

const NAV_VARIANTS: Variants = {
  top: {
    backgroundColor: "rgba(10, 22, 40, 0)",
    borderBottom: "1px solid rgba(240, 165, 0, 0)",
    color: "#FFFFFF",
    paddingTop: "20px",
    paddingBottom: "20px",
  },
  scrolled: {
    backgroundColor: "rgba(10, 22, 40, 1)",
    borderBottom: "1px solid rgba(240, 165, 0, 0.3)",
    color: "#FFFFFF",
    paddingTop: "12px",
    paddingBottom: "12px",
  },
};

const MOBILE_MENU_VARIANTS: Variants = {
  closed: { opacity: 0, x: "100%" },
  open: {
    opacity: 1,
    x: 0,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const MOBILE_LINK_VARIANTS: Variants = {
  closed: { opacity: 0, x: 50 },
  open: { opacity: 1, x: 0 },
};

export default function Navbar(): JSX.Element {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const pathname: string = usePathname();

  const isServicesPage = pathname === '/services';
  const { scrollY }: { scrollY: MotionValue<number> } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest: number) => {
    if (latest > 80 && !isScrolled) {
      setIsScrolled(true);
    } else if (latest <= 80 && isScrolled) {
      setIsScrolled(false);
    }
  });

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isMenuOpen]);

  const toggleMenu = (): void => setIsMenuOpen(!isMenuOpen);
  const closeMenu = (): void => setIsMenuOpen(false);

  return (
    <>
      <motion.nav
        variants={NAV_VARIANTS}
        initial="top"
        animate={isScrolled ? "scrolled" : "top"}
        transition={{ duration: 0.3 }}
        className="fixed top-0 left-0 right-0 z-[100] px-6 lg:px-12 flex items-center justify-between"
      >
        {/* Left — Logo */}
        <div className="flex-1 flex justify-start">
          <Link
            href="/"
            className="flex items-center gap-2 px-3 py-2 md:gap-3 md:px-4 md:py-2.5 rounded-xl"
            style={{
              background: 'rgba(10,22,40,0.7)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(240,165,0,0.4)',
              boxShadow: '0 0 12px rgba(240,165,0,0.15)',
            }}
          >
            <div className="relative w-10 h-10 md:w-14 md:h-14">
              <Image
                src="/logo.png"
                alt="FortuneKraft Consultancy"
                fill
                sizes="(max-width: 768px) 40px, 56px"
                className="object-contain bg-white rounded-xl"
                style={{ mixBlendMode: 'screen' }}
              />
            </div>
            <span className="hidden md:block leading-tight">
              <span
                className="block font-display font-bold text-xl tracking-wide"
                style={{
                  background: 'linear-gradient(90deg, #c47f00 0%, #F0A500 30%, #FFE566 55%, #F0A500 75%, #c47f00 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  filter: 'drop-shadow(0 0 10px rgba(240,165,0,0.4))',
                }}
              >
                FortuneKraft
              </span>
              <span
                className="block text-[11px] tracking-[0.35em] uppercase font-sans"
                style={{
                  color: 'rgba(240,165,0,0.65)',
                  textShadow: '0 0 12px rgba(240,165,0,0.25)',
                }}
              >
                Consultancy
              </span>
            </span>
          </Link>
        </div>

        {/* Center — Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.label}
                href={link.href}
                className={`text-[18px] tracking-wide font-medium transition-colors duration-200 ${isActive ? "text-gold" : "text-gray-300 hover:text-gold"
                  }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right — CTA Button (always present to balance flex layout) */}
        <div className="flex-1 hidden lg:flex justify-end">
          {!isServicesPage && (
            <Link href="/services">
              <motion.span
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block bg-gold text-navy font-semibold px-6 py-2.5 rounded-full relative overflow-hidden group cursor-pointer"
              >
                <span className="relative z-10">Get Started</span>
                <motion.div className="absolute inset-0 bg-white/30 transform -skew-x-[20deg] -translate-x-full group-hover:animate-[shimmer_1s_infinite]" />
              </motion.span>
            </Link>
          )}
        </div>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden text-white p-2"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            variants={MOBILE_MENU_VARIANTS}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 z-[90] bg-navy-dark pt-24 px-6 flex flex-col"
          >
            <div className="flex flex-col gap-6 text-2xl font-display">
              {NAV_LINKS.map((link) => (
                <motion.div key={link.label} variants={MOBILE_LINK_VARIANTS}>
                  <Link
                    href={link.href}
                    onClick={closeMenu}
                    className={`block py-2 border-b border-white/10 ${pathname === link.href ? "text-gold" : "text-white"
                      }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
            {!isServicesPage && (
              <motion.div variants={MOBILE_LINK_VARIANTS} className="mt-12">
                <Link
                  href="/services"
                  onClick={closeMenu}
                  className="block text-center w-full bg-gold text-navy font-semibold py-4 rounded-xl text-lg relative overflow-hidden group hover:bg-gold-light transition-colors duration-200"
                >
                  Get Started
                </Link>
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
