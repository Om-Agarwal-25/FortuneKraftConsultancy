import Link from 'next/link'
import Image from 'next/image'
import { Facebook, Twitter, Instagram, Linkedin, ShieldCheck, Mail, Phone, MapPin } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import type { NavLink } from '@/types'

const LEGAL_LINKS: NavLink[] = [
  { label: 'Terms & Conditions', href: '/legal' },
  { label: 'Disclaimer', href: '/legal#disclaimer' },
  { label: 'Privacy Policy', href: '/legal#privacy' },
  { label: 'Refund Policy', href: '/cancellation-policy' },
  { label: 'Cancellation Policy', href: '/cancellation-policy' },
  { label: 'Investor Charter', href: '/investor-charter' },
  { label: 'Disclosure', href: '/disclosure' },
]

const SERVICE_LINKS: NavLink[] = [
  { label: 'Equity Research', href: '/services?tab=Equity Research' },
  { label: 'Market insights', href: '/services?tab=Market insights' },
  { label: 'Investment recommendations', href: '/services?tab=Investment recommendations' },
  { label: 'Demo Plan', href: '/services?tab=Demo' },
]

interface SocialLink {
  icon: LucideIcon
  href: string
  label: string
}

const SOCIAL_LINKS: SocialLink[] = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
]

export default function Footer(): JSX.Element {
  return (
    <footer className="bg-[#060e1a] text-white pt-20 pb-6 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold opacity-[0.03] rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-3 inline-block">
              <div className="relative h-[48px] w-[110px] bg-white px-3 py-2 rounded-xl">
                <Image src="/logo.png" alt="FortuneKraft" fill sizes="110px" className="object-contain" />
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-[280px]">
              “Our research philosophy focuses on disciplined analysis, risk management and long-term wealth creation.”
            </p>
            <div className="flex gap-4">
              {SOCIAL_LINKS.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-full bg-navy flex items-center justify-center border border-white/10 hover:border-gold hover:text-gold transition-colors"
                  >
                    <Icon size={18} />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Legal Links Column */}
          <div>
            <h3 className="text-gold font-display text-xl mb-6">Legal & Compliance</h3>
            <ul className="flex flex-col gap-3 border-l border-white/10 pl-4">
              {LEGAL_LINKS.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-gold font-display text-xl mb-6">Our Services</h3>
            <ul className="flex flex-col gap-3 border-l border-white/10 pl-4">
              {SERVICE_LINKS.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="flex flex-col gap-6">
            <h3 className="text-gold font-display text-xl mb-2">Contact Us</h3>
            <div className="flex gap-3 text-gray-400 text-sm">
              <MapPin size={18} className="text-gold flex-shrink-0" />
              <span>B-1106, Urban Space Phase 1, Mohammadwadi Road, Pune-411060</span>
            </div>
            <div className="flex gap-3 text-gray-400 text-sm items-center">
              <Phone size={18} className="text-gold flex-shrink-0" />
              <span>+91 70301 51276</span>
            </div>
            <div className="flex gap-3 text-gray-400 text-sm items-center">
              <Mail size={18} className="text-gold flex-shrink-0" />
              <a 
                href="https://mail.google.com/mail/?view=cm&to=fortunekraftconcultancy@gmail.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                fortunekraftconcultancy@gmail.com
              </a>
            </div>

            <div className="mt-4 p-4 rounded-xl bg-navy border border-white/10 flex items-start gap-3">
              <ShieldCheck size={24} className="text-success-green flex-shrink-0" />
              <div>
                <p className="text-white text-sm font-semibold mb-1">SEBI Registered</p>
                <p className="text-gray-400 text-xs">Reg. No: INH000025221</p>
              </div>
            </div>
          </div>
        </div>

        {/* Regulatory Disclosure Banner */}
        <div className="text-center text-xs text-gray-500 py-3 mb-2 border-t border-white/5">
          Market Risks (“Ritesh Agarwal Research Analyst”) Does Not Provide Only Any Assured Return/Garunteed Return/Profit services, 
          any Profit Sharing Services and Services Which are not mentioned on Company Website Please Trade Only a Company SMS With Proper Stop Loss. 
          We never ask for Demat Detail From Anyone Please ask If anyone talks about these services +91 70301 51276.
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} FortuneKraft Consultancy. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <Link href="/legal" className="hover:text-gold transition-colors">Privacy Policy</Link>
            <Link href="/legal" className="hover:text-gold transition-colors">Terms of Service</Link>
            <Link href="/legal" className="hover:text-gold transition-colors">Disclaimer</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
