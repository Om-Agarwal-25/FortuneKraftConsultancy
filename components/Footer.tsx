import Link from "next/link";
import Image from "next/image";
import {
  Facebook,
  Instagram,
  ShieldCheck,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { NavLink } from "@/types";

const USEFUL_LINKS: NavLink[] = [
  { label: 'Disclosures', href: '/disclosure' },
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Grievance Redressal Policy', href: '/grievance-redressal' },
  { label: 'Investor Charter', href: '/investor-charter' },
  { label: 'Research Analyst Registration', href: '/research-analyst-registration' },
  { label: 'Terms and Conditions', href: '/terms-and-conditions' },
  { label: 'Refund Policy', href: '/refund-policy' },
  { label: 'Complaint Table', href: '/complaint-table' },
  { label: 'Payment Information', href: '/payment-info' },
];

const SERVICE_LINKS: NavLink[] = [
  { label: 'Intraday Alpha', href: '/services?tab=Intraday+Alpha' },
  { label: 'BTST Alpha', href: '/services?tab=BTST+Alpha' },
  { label: 'Positional Alpha', href: '/services?tab=Positional+Alpha' },
  { label: 'Trial Plans', href: '/services?tab=Trial+Plans' },
  { label: 'Capital Compounders', href: '/services?tab=Capital+Compounders' },
];

interface SocialLink {
  icon: LucideIcon;
  href: string;
  label: string;
}

const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/fortunekraftconsultancy',
    icon: Instagram,
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/people/Fortunekraft-Consultancy/61579505940704/?mibextid=wwXIfr&rdid=NjxVx4x0RjtEIq5o&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1WJ8KdSUE3%2F%3Fmibextid%3DwwXIfr',
    icon: Facebook,
  },
];

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
                <Image
                  src="/logo.png"
                  alt="FortuneKraft"
                  fill
                  sizes="110px"
                  className="object-contain"
                />
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-[280px]">
              “Our research philosophy focuses on disciplined analysis, risk
              management and long-term wealth creation.”
            </p>
            <div className="flex gap-4">
              {SOCIAL_LINKS.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full border border-gold flex items-center justify-center text-gold hover:bg-gold hover:text-[#060e1a] transition-colors"
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Useful Links Column */}
          <div>
            <h3 className="text-gold font-display text-xl mb-6">
              Useful Links
            </h3>
            <ul className="flex flex-col gap-3 border-l border-white/10 pl-4">
              {USEFUL_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-gold transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-gold font-display text-xl mb-6">
              Our Services
            </h3>
            <ul className="flex flex-col gap-3 border-l border-white/10 pl-4">
              {SERVICE_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-gold transition-colors text-sm"
                  >
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
              <span>
                B-1106, Urban Space Phase 1, Mohammadwadi Road, Pune-411060
              </span>
            </div>
            <a href="tel:+917030151276" className="flex gap-3 text-gray-400 text-sm items-center hover:text-gold transition-colors">
              <Phone size={18} className="text-gold flex-shrink-0" />
              <span>+91 7030151276</span>
            </a>
            <div className="flex gap-3 text-gray-400 text-sm items-center">
              <Mail size={18} className="text-gold flex-shrink-0" />
              <a
                href="https://mail.google.com/mail/?view=cm&to=support@fortunekraftconsultancy.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold transition-colors"
              >
                support@fortunekraftconsultancy.com
              </a>
            </div>

            <div className="mt-4 p-4 rounded-xl bg-navy border border-white/10 flex items-start gap-3">
              <ShieldCheck
                size={24}
                className="text-success-green flex-shrink-0"
              />
              <div>
                <p className="text-white text-sm font-semibold mb-1">
                  SEBI Registered
                </p>
                <p className="text-gray-400 text-xs">Reg. No: INH000025221</p>
              </div>
            </div>
          </div>
        </div>

        {/* Regulatory Disclosure Banner */}
        <div className="text-center text-xs text-gray-500 py-3 border-t border-white/5">
          Fortune Kraft Consultancy | SEBI Registered Research Analyst | Reg. No. INH000025221 |
          Registered under SEBI (Research Analysts) Regulations, 2014 | Registration Date: Mar 02, 2026 |
          Investments in securities market are subject to market risks. Read all the related documents carefully before investing.
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm w-full text-center md:text-left">
            &copy; {new Date().getFullYear()} FortuneKraft Consultancy. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
