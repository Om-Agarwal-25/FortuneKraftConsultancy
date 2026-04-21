import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Fortune Kraft Consultancy',
  description: 'Privacy policy for Fortune Kraft Consultancy — how we collect, use and protect your personal information.',
}

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-[#F8F9FA] min-h-screen font-sans">
      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-b from-[#0A1628] to-[#112440] text-white pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden flex flex-col items-center justify-center min-h-[380px]">
        {/* Abstract Gold Background Elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#F0A500] opacity-[0.05] rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#F0A500] opacity-[0.03] rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2" />

        <div className="container mx-auto px-6 relative z-10 text-center">

          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-6">
            Privacy Policy
          </h1>
        </div>
      </section>

      {/* CONTENT SECTION */}
      <section className="py-16 lg:py-24 container mx-auto px-6 max-w-[900px]">
        {/* Header Card */}
        <div className="bg-[#0A1628] rounded-2xl p-8 md:p-12 mb-12 shadow-md">
          <p className="text-white/90 text-[15px] leading-relaxed">
            Ritesh Agarwal Proprietor of Fortunekraft Consultancy is committed to protecting the privacy of every individual who interacts with us. This Privacy Policy outlines how we collect, use, store, and safeguard your personal information.
          </p>
        </div>

        {/* Section 1 */}
        <div className="bg-white rounded-2xl p-8 md:p-12 mb-8 shadow-sm">
          <h3 className="font-display text-2xl text-[#0A1628] font-bold mb-4">1. Information We Collect</h3>
          <div className="w-20 h-1 bg-[#F0A500] mb-6" />
          <p className="text-[#23344E] text-[15px] leading-relaxed">
            We may collect personal information such as your name, phone number, email address, and other contact details when you engage with our services, submit inquiries, fill out forms on our website, or communicate with us via email, WhatsApp, or social media.
          </p>
        </div>

        {/* Section 2 */}
        <div className="bg-white rounded-2xl p-8 md:p-12 mb-8 shadow-sm">
          <h3 className="font-display text-2xl text-[#0A1628] font-bold mb-4">2. Purpose of Collection and Usage</h3>
          <div className="w-20 h-1 bg-[#F0A500] mb-6" />
          <p className="text-[#23344E] text-[15px] leading-relaxed mb-4">
            The information collected is used for the following purposes:
          </p>
          <ul className="flex flex-col gap-3 mb-6">
            {[
              "To provide the services you have subscribed to",
              "To communicate with you regarding updates, offers, or service-related information",
              "To send newsletters, surveys, and promotional content",
              "To improve our services and understand your needs",
              "To comply with regulatory or legal requirements"
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-[#F0A500] mt-2 flex-shrink-0" />
                <span className="text-[#23344E] text-[15px] leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-[#23344E] text-[15px] leading-relaxed">
            By using our services or submitting your information to us, you consent to its use in accordance with this policy.
          </p>
        </div>

        {/* Section 3 */}
        <div className="bg-white rounded-2xl p-8 md:p-12 mb-8 shadow-sm">
          <h3 className="font-display text-2xl text-[#0A1628] font-bold mb-4">3. Communication Consent</h3>
          <div className="w-20 h-1 bg-[#F0A500] mb-6" />
          <p className="text-[#23344E] text-[15px] leading-relaxed">
            By submitting an inquiry form or reaching out to us via any channel, you authorize us to contact you through phone calls, SMS, emails, and WhatsApp, even if your number is registered under the National Do Not Disturb (DND) registry.
          </p>
        </div>

        {/* Section 4 */}
        <div className="bg-white rounded-2xl p-8 md:p-12 mb-8 shadow-sm">
          <h3 className="font-display text-2xl text-[#0A1628] font-bold mb-4">4. Data Security</h3>
          <div className="w-20 h-1 bg-[#F0A500] mb-6" />
          <p className="text-[#23344E] text-[15px] leading-relaxed">
            We take appropriate technical and organizational measures to protect your data from unauthorized access, misuse, or disclosure. However, we cannot guarantee absolute security, and any information provided is at your own risk.
          </p>
        </div>

        {/* Section 5 */}
        <div className="bg-white rounded-2xl p-8 md:p-12 mb-8 shadow-sm">
          <h3 className="font-display text-2xl text-[#0A1628] font-bold mb-4">5. Disclosure to Third Parties</h3>
          <div className="w-20 h-1 bg-[#F0A500] mb-6" />
          <p className="text-[#23344E] text-[15px] leading-relaxed">
            We do not share your personal information with third parties unless required by law or with your explicit consent. Your information will never be sold or rented to any external entity for marketing purposes.
          </p>
        </div>

        {/* Section 6 */}
        <div className="bg-white rounded-2xl p-8 md:p-12 mb-8 shadow-sm">
          <h3 className="font-display text-2xl text-[#0A1628] font-bold mb-4">6. Opt-Out Option</h3>
          <div className="w-20 h-1 bg-[#F0A500] mb-6" />
          <p className="text-[#23344E] text-[15px] leading-relaxed">
            If you wish to stop receiving promotional or marketing communication from us, you may opt out by sending an email to <a href="https://mail.google.com/mail/?view=cm&to=support@fortunekraftconsultancy.com" target="_blank" rel="noopener noreferrer" className="text-[#F0A500] hover:underline font-medium">support@fortunekraftconsultancy.com</a>. Your preferences will be updated within a reasonable timeframe.
          </p>
        </div>

        {/* Section 7 */}
        <div className="bg-white rounded-2xl p-8 md:p-12 mb-8 shadow-sm">
          <h3 className="font-display text-2xl text-[#0A1628] font-bold mb-4">7. Policy Modifications</h3>
          <div className="w-20 h-1 bg-[#F0A500] mb-6" />
          <p className="text-[#23344E] text-[15px] leading-relaxed">
            This policy may be updated from time to time to reflect changes in our business practices or legal obligations. Any changes will be posted on our website with an updated effective date.
          </p>
        </div>

        {/* Section 8 Contact Card */}
        <div className="bg-[#0A1628] rounded-2xl p-8 md:p-12 shadow-md">
          <h3 className="font-display text-2xl text-[#F0A500] font-bold mb-4">8. Contact Information</h3>
          <div className="w-20 h-1 bg-[#F0A500] mb-8" />
          
          <div className="flex flex-col gap-4">
            <p className="text-white/90 text-[15px] leading-relaxed">
              <span className="font-semibold text-white block mb-1">Address:</span>
              Ritesh Agarwal Proprietor of Fortunekraft Consultancy, Flat No B-1106, Urban Space Phase 1, Survey No 25, Nibm Road, Mohammadwadi, Haveli, Pune, 411060
            </p>
            <p className="text-white/90 text-[15px]">
              <span className="font-semibold text-white block mb-1">Phone:</span>
              <a href="tel:+917030151276" className="hover:text-[#F0A500] transition-colors">+91 7030151276</a>
            </p>
            <p className="text-white/90 text-[15px]">
              <span className="font-semibold text-white block mb-1">Email:</span>
              <a href="https://mail.google.com/mail/?view=cm&to=support@fortunekraftconsultancy.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#F0A500] transition-colors">support@fortunekraftconsultancy.com</a>
            </p>
          </div>
        </div>

      </section>
    </div>
  )
}
