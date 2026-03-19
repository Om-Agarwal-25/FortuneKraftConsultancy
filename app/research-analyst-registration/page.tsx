import type { Metadata } from 'next';
import Link from 'next/link';
import { Mail, Phone } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Research Analyst Registration | Fortune Kraft Consultancy',
  description: 'SEBI Research Analyst registration details for Fortune Kraft Consultancy as per SEBI Circular dated April 6, 2023.',
}

export default function RegistrationDisclosurePage() {
  const details = [
    { label: "Name of Research Analyst", value: "Ritesh Agarwal Proprietor of Fortunekraft Consultancy" },
    { label: "Type of Registration", value: "Research Analyst" },
    { label: "SEBI Registration Number", value: "INH000025221" },
    { label: "BSE Enlistment Number", value: "(To be updated)" },
    { label: "Registration Validity", value: "Mar 02, 2026 – Mar 01, 2031" },
    { label: "Registered Office Address", value: "Flat No B-1106, Urban Space Phase 1, Survey No 25, Nibm Road, Mohammadwadi, Haveli, Pune, 411060, Maharashtra" }
  ];

  return (
    <div className="bg-[#F8F9FA] min-h-screen font-sans">
      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-b from-[#0A1628] to-[#112440] text-white pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden flex flex-col items-center justify-center min-h-[380px]">
        {/* Abstract Gold Background Elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#F0A500] opacity-[0.05] rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#F0A500] opacity-[0.03] rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2" />

        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="text-[#F0A500] text-sm font-semibold tracking-widest uppercase mb-4 flex items-center justify-center gap-2">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="text-white/50">&gt;</span>
            <span>Registration Disclosure</span>
          </div>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-6">
            Research Analyst Registration Disclosure
          </h1>
        </div>
      </section>

      {/* CONTENT SECTION */}
      <section className="py-16 lg:py-24 container mx-auto px-6 max-w-[900px]">
        
        {/* SEBI Circular Reference Card */}
        <div className="bg-[#0A1628] rounded-2xl p-6 md:p-8 mb-8 shadow-md text-center border-l-4 border-[#F0A500]">
          <p className="text-white/90 text-[15px] leading-relaxed font-medium">
            As per SEBI Circular SEBI/HO/IMD/IMD-II CIS/P/CIR/2023/30 dated April 6, 2023
          </p>
        </div>

        {/* Registration Details Card */}
        <div className="bg-[#0A1628] rounded-2xl p-8 md:p-12 mb-8 shadow-xl relative overflow-hidden">
          {/* Decorative gold elements inside card */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#F0A500] opacity-5 rounded-bl-full" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#F0A500] opacity-5 rounded-tr-full" />
          
          <div className="relative z-10">
            <h2 className="font-display text-2xl md:text-3xl text-[#F0A500] font-bold mb-8 text-center">Registration Details</h2>
            
            <div className="flex flex-col gap-6">
              {details.map((item, i) => (
                <div key={i} className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4 border-b border-white/10 pb-4 last:border-0 last:pb-0">
                  <span className="text-[#F0A500] font-semibold text-[15px] sm:w-[220px] flex-shrink-0">
                    {item.label}:
                  </span>
                  <span className="text-white text-[15px] leading-relaxed">
                    {item.value}
                  </span>
                </div>
              ))}
              
              <div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4 border-b border-white/10 pb-4">
                <span className="text-[#F0A500] font-semibold text-[15px] sm:w-[220px] flex-shrink-0">
                  Contact Number:
                </span>
                <a href="tel:+917030151276" className="text-white text-[15px] leading-relaxed hover:text-[#F0A500] transition-colors flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  +91 7030151276
                </a>
              </div>
              
              <div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4">
                <span className="text-[#F0A500] font-semibold text-[15px] sm:w-[220px] flex-shrink-0">
                  Email ID:
                </span>
                <a href="https://mail.google.com/mail/?view=cm&to=foturnkraftconsultancy@gmail.com" target="_blank" rel="noopener noreferrer" className="text-white text-[15px] leading-relaxed hover:text-[#F0A500] transition-colors flex items-center gap-2 break-all">
                  <Mail className="w-4 h-4" />
                  foturnkraftconsultancy@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="text-center">
          <p className="text-[#23344E] text-[15px] leading-relaxed italic">
            Herein, you can access the complete registration details of this Research Analyst and other necessary information associated with the license.
          </p>
        </div>

      </section>
    </div>
  )
}
