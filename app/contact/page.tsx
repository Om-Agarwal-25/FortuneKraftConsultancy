import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import {
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  Shield,
  Twitter,
  Linkedin,
  Youtube,
  Instagram,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us | FortuneKraft Consultancy",
  description:
    "Get in touch with FortuneKraft Consultancy. Send us a query, lodge a complaint, or enquire about our equity research services.",
};

export default function ContactPage() {
  return (
    <div className="bg-[#f0f4f8] min-h-screen">
      {/* SECTION 1 - HERO */}
      <section className="relative bg-[#0A1628] text-white pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden flex flex-col items-center justify-center min-h-[380px]">
        {/* Abstract Gold Background Elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold opacity-[0.05] rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-gold opacity-[0.03] rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2" />

        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="text-gold text-sm font-semibold tracking-widest uppercase mb-4 flex items-center justify-center gap-2">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span className="text-white/50">&gt;</span>
            <span>Contact</span>
          </div>

          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-6">
            Get In Touch
          </h1>

          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            We&apos;re here to help. Reach out and our team will respond within
            24 hours.
          </p>
        </div>
      </section>

      {/* SECTION 2 - CONTACT DETAILS + FORM */}
      <section className="py-20 lg:py-28 container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Column (40%) - Contact Details Card */}
          <div className="lg:col-span-5 h-full">
            <div className="bg-[#0A1628] rounded-2xl p-10 lg:p-12 relative overflow-hidden h-full flex flex-col shadow-xl">
              <div
                className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{
                  backgroundImage: `repeating-linear-gradient(45deg, #F0A500 0px, #F0A500 1px, transparent 1px, transparent 40px)`,
                }}
              />

              <div className="relative z-10 flex-1">
                <h2 className="font-display text-3xl text-white font-bold mb-3">
                  Contact Information
                </h2>
                <p className="text-white/60 mb-8">
                  Available Monday - Saturday, 9AM - 6PM IST
                </p>
                <div className="w-12 h-px bg-gold/50 mb-10" />

                <div className="flex flex-col gap-8">
                  {/* Phone */}
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0 border border-gold/20">
                      <Phone className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <p className="text-white/50 text-xs font-bold tracking-widest uppercase mb-1">
                        Phone
                      </p>
                      <p className="text-white font-bold text-lg">
                        +91 70301 51276
                      </p>
                    </div>
                  </div>

                  {/* WhatsApp */}
                  <a
                    href="https://wa.me/917030151276"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-5 group cursor-pointer transition-all hover:-translate-y-1"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0 border border-gold/20 group-hover:bg-gold/20 transition-colors">
                      <MessageCircle className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <p className="text-white/50 text-xs font-bold tracking-widest uppercase mb-1">
                        WhatsApp
                      </p>
                      <p className="text-white font-bold text-lg group-hover:text-gold transition-colors">
                        +91 70301 51276
                      </p>
                    </div>
                  </a>

                  {/* Email */}
                  <a
                    href="https://mail.google.com/mail/?view=cm&to=fortunekraftconcultancy@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-5 group cursor-pointer transition-all hover:-translate-y-1"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0 border border-gold/20 group-hover:bg-gold/20 transition-colors">
                      <Mail className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <p className="text-white/50 text-xs font-bold tracking-widest uppercase mb-1">
                        Email
                      </p>
                      <p className="text-white font-bold text-lg group-hover:text-gold transition-colors">
                        fortunekraftconcultancy@gmail.com
                      </p>
                    </div>
                  </a>

                  {/* Address */}
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0 border border-gold/20">
                      <MapPin className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <p className="text-white/50 text-xs font-bold tracking-widest uppercase mb-1">
                        Address
                      </p>
                      <p className="text-white font-bold text-base leading-relaxed max-w-[200px]">
                        B-1106, Urban Space Phase 1, Mohammadwadi Road,
                        Pune-411060
                      </p>
                    </div>
                  </div>

                  {/* SEBI REG */}
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0 border border-gold/20">
                      <Shield className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <p className="text-white/50 text-xs font-bold tracking-widest uppercase mb-1">
                        SEBI REG. NO.
                      </p>
                      <p className="text-white font-bold text-lg">
                        INH000025221
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative z-10 mt-12 w-full">
                <div className="w-full h-px bg-white/10 mb-8" />
                <div className="flex gap-4">
                  {[Twitter, Linkedin, Youtube, Instagram].map((Icon, idx) => (
                    <a
                      key={idx}
                      href="#"
                      className="w-10 h-10 rounded-full border border-gold flex items-center justify-center text-gold hover:bg-gold hover:text-navy transition-colors"
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (60%) - Contact Form */}
          <div className="lg:col-span-7 h-full">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* SECTION 3 - MAP PLACEHOLDER */}
      <section className="bg-white py-20 lg:py-28">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl text-[#0A1628] font-bold mb-6">
              Find Us
            </h2>
            <div className="w-16 h-1 bg-gold mx-auto rounded-full" />
          </div>

          {/* Replace this with Google Maps embed once API key is available */}
          <div className="w-full max-w-5xl mx-auto bg-[#0A1628] rounded-2xl h-[300px] flex flex-col items-center justify-center text-center shadow-lg px-6 relative overflow-hidden">
            <div className="absolute inset-0 bg-gold/5 blur-3xl opacity-30" />
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4 border border-gold/20">
                <MapPin className="w-8 h-8 text-gold" />
              </div>
              <p className="text-white font-bold text-lg md:text-xl max-w-md mx-auto">
                B-1106, Urban Space Phase 1, Mohammadwadi Road, Pune-411060
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
