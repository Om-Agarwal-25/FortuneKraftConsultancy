import type { Metadata } from 'next';
import { Mail, Phone, MapPin } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Grievance Redressal | Fortune Kraft Consultancy',
  description: 'Grievance redressal mechanism and escalation matrix for Fortune Kraft Consultancy.',
}

export default function GrievanceRedressalPage() {
  const escalationList = [
    {
      designation: 'Customer Care',
      contactPerson: 'Ritesh Agarwal',
      officeAddress: 'Flat No B-1106, Urban Space Phase 1, Survey No 25, NIBM Road, Mohammadwadi, Haveli, Pune, Maharashtra, 411060',
      contactNo: '+91 7030151276',
      emailId: 'support@fortunekraftconsultancy.com',
      workingHours: 'Mon–Fri, 10:00 AM – 6:00 PM',
    },
    {
      designation: 'Head of Customer Care',
      contactPerson: 'Ritesh Agarwal',
      officeAddress: 'Flat No B-1106, Urban Space Phase 1, Survey No 25, NIBM Road, Mohammadwadi, Haveli, Pune, Maharashtra, 411060',
      contactNo: '+91 7030151276',
      emailId: 'support@fortunekraftconsultancy.com',
      workingHours: 'Mon–Fri, 10:00 AM – 6:00 PM',
    },
    {
      designation: 'Compliance Officer',
      contactPerson: 'Ritesh Agarwal',
      officeAddress: 'Flat No B-1106, Urban Space Phase 1, Survey No 25, NIBM Road, Mohammadwadi, Haveli, Pune, Maharashtra, 411060',
      contactNo: '+91 7030151276',
      emailId: 'support@fortunekraftconsultancy.com',
      workingHours: 'Mon–Fri, 10:00 AM – 6:00 PM',
    },
    {
      designation: 'CEO',
      contactPerson: 'Ritesh Agarwal',
      officeAddress: 'Flat No B-1106, Urban Space Phase 1, Survey No 25, NIBM Road, Mohammadwadi, Haveli, Pune, Maharashtra, 411060',
      contactNo: '+91 7030151276',
      emailId: 'support@fortunekraftconsultancy.com',
      workingHours: 'Mon–Fri, 10:00 AM – 6:00 PM',
    },
    {
      designation: 'Principal Officer',
      contactPerson: 'Ritesh Agarwal',
      officeAddress: 'Flat No B-1106, Urban Space Phase 1, Survey No 25, NIBM Road, Mohammadwadi, Haveli, Pune, Maharashtra, 411060',
      contactNo: '+91 7030151276',
      emailId: 'support@fortunekraftconsultancy.com',
      workingHours: 'Mon–Fri, 10:00 AM – 6:00 PM',
    },
  ];

  return (
    <div className="bg-[#F8F9FA] min-h-screen font-sans">
      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-b from-[#0A1628] to-[#112440] text-white pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden flex flex-col items-center justify-center min-h-[380px]">
        {/* Abstract Gold Background Elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#F0A500] opacity-[0.05] rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#F0A500] opacity-[0.03] rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2" />

        <div className="container mx-auto px-6 relative z-10 text-center">

          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-6">
            Grievance Redressal Mechanism
          </h1>
        </div>
      </section>

      {/* CONTENT SECTION */}
      <section className="py-16 lg:py-24 container mx-auto px-6 max-w-[1000px]">
        {/* Intro Card */}
        <div className="bg-[#0A1628] rounded-2xl p-8 md:p-12 mb-8 shadow-md">
          <p className="text-white/90 text-[15px] leading-relaxed text-center">
            We value your trust and are committed to addressing any concerns or complaints promptly and transparently. Clients may reach out to us through any of the following channels:
          </p>
        </div>

        {/* 3 Contact Channel Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Card 1: Email */}
          <div className="bg-white rounded-2xl p-8 text-center shadow-sm flex flex-col items-center hover:shadow-md transition-shadow">
            <div className="w-16 h-16 rounded-full bg-[#F0A500]/10 flex items-center justify-center mb-6">
              <Mail className="w-8 h-8 text-[#F0A500]" />
            </div>
            <h3 className="font-display text-xl text-[#0A1628] font-bold mb-3">Email</h3>
            <a href="https://mail.google.com/mail/?view=cm&to=support@fortunekraftconsultancy.com" target="_blank" rel="noopener noreferrer" className="text-[#23344E] hover:text-[#F0A500] transition-colors text-[15px] break-all">
              support@fortunekraftconsultancy.com
            </a>
          </div>

          {/* Card 2: Phone */}
          <div className="bg-white rounded-2xl p-8 text-center shadow-sm flex flex-col items-center hover:shadow-md transition-shadow">
            <div className="w-16 h-16 rounded-full bg-[#F0A500]/10 flex items-center justify-center mb-6">
              <Phone className="w-8 h-8 text-[#F0A500]" />
            </div>
            <h3 className="font-display text-xl text-[#0A1628] font-bold mb-3">Phone</h3>
            <a href="tel:+917030151276" className="text-[#23344E] hover:text-[#F0A500] transition-colors text-[15px]">
              +91 7030151276
            </a>
            <p className="text-[#23344E]/70 text-sm mt-2">during working hours</p>
          </div>

          {/* Card 3: Post */}
          <div className="bg-white rounded-2xl p-8 text-center shadow-sm flex flex-col items-center hover:shadow-md transition-shadow">
            <div className="w-16 h-16 rounded-full bg-[#F0A500]/10 flex items-center justify-center mb-6">
              <MapPin className="w-8 h-8 text-[#F0A500]" />
            </div>
            <h3 className="font-display text-xl text-[#0A1628] font-bold mb-3">Post</h3>
            <p className="text-[#23344E] text-[15px] leading-relaxed">
              Flat No B-1106, Urban Space Phase 1, Survey No 25, Nibm Road, Mohammadwadi, Haveli, Pune, 411060, Maharashtra
            </p>
          </div>
        </div>

        {/* Resolution Time Banner */}
        <div className="bg-[#F0A500] rounded-2xl p-6 mb-12 shadow-sm text-center">
          <p className="text-[#0A1628] font-bold text-lg">
            We aim to provide a resolution within 21 working days from the date of receiving your complaint.
          </p>
        </div>

        {/* Escalation Matrix */}
        <div className="bg-white rounded-2xl p-8 md:p-12 mb-12 shadow-sm">
          <h3 className="font-display text-2xl text-[#0A1628] font-bold mb-4">Escalation Matrix</h3>
          <div className="w-20 h-1 bg-[#F0A500] mb-8" />

          {/* Desktop Table */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[800px]">
              <thead>
                <tr className="bg-[#0A1628] text-white">
                  <th className="py-4 px-6 font-semibold">Designation</th>
                  <th className="py-4 px-6 font-semibold">Contact Person</th>
                  <th className="py-4 px-6 font-semibold">Office Address</th>
                  <th className="py-4 px-6 font-semibold">Contact No.</th>
                  <th className="py-4 px-6 font-semibold">Email ID</th>
                  <th className="py-4 px-6 font-semibold">Working Hours</th>
                </tr>
              </thead>
              <tbody>
                {escalationList.map((item, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-[#F8F9FA]'}>
                    <td className="py-4 px-6 border-b border-gray-100 font-medium text-[#0A1628]">{item.designation}</td>
                    <td className="py-4 px-6 border-b border-gray-100 text-[#23344E]">{item.contactPerson}</td>
                    <td className="py-4 px-6 border-b border-gray-100 text-[#23344E] text-sm">{item.officeAddress}</td>
                    <td className="py-4 px-6 border-b border-gray-100 text-[#23344E] whitespace-nowrap">
                      <a href={`tel:${item.contactNo.replace(/\s/g, '')}`} className="hover:text-[#F0A500] transition-colors">{item.contactNo}</a>
                    </td>
                    <td className="py-4 px-6 border-b border-gray-100 text-[#23344E]">
                      <a href={`https://mail.google.com/mail/?view=cm&to=${item.emailId}`} target="_blank" rel="noopener noreferrer" className="hover:text-[#F0A500] transition-colors">{item.emailId}</a>
                    </td>
                    <td className="py-4 px-6 border-b border-gray-100 text-[#23344E] whitespace-nowrap">{item.workingHours}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="md:hidden flex flex-col gap-4">
            {escalationList.map((item, index) => (
              <div key={index} className="border border-gray-200 rounded-xl p-5 bg-[#F8F9FA]">
                <p className="font-bold text-[#0A1628] text-lg mb-3">{item.designation}</p>
                <div className="space-y-2 text-[14px] text-[#23344E]">
                  <p><span className="font-semibold">Contact Person:</span> {item.contactPerson}</p>
                  <p><span className="font-semibold">Address:</span> {item.officeAddress}</p>
                  <p><span className="font-semibold">Phone:</span> <a href={`tel:${item.contactNo.replace(/\s/g, '')}`} className="hover:text-[#F0A500] transition-colors">{item.contactNo}</a></p>
                  <p><span className="font-semibold">Email:</span> <a href={`https://mail.google.com/mail/?view=cm&to=${item.emailId}`} target="_blank" rel="noopener noreferrer" className="hover:text-[#F0A500] transition-colors break-all">{item.emailId}</a></p>
                  <p><span className="font-semibold">Working Hours:</span> {item.workingHours}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Still Not Satisfied Section */}
        <div className="mb-8">
          <h3 className="font-display text-2xl text-[#0A1628] font-bold mb-4">Still Not Satisfied?</h3>
          <div className="w-20 h-1 bg-[#F0A500] mb-8" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Step 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm flex flex-col h-full border-t-4 border-[#F0A500]">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 rounded-full bg-[#F0A500] text-[#0A1628] font-bold text-xl flex items-center justify-center flex-shrink-0">
                  1
                </div>
                <h4 className="font-display text-xl text-[#0A1628] font-bold">SEBI SCORES Portal</h4>
              </div>
              <p className="text-[#23344E] text-[15px] leading-relaxed mb-8 flex-grow">
                Raise your concern through SEBI&apos;s SCORES Portal (SEBI Complaints Redress System)
              </p>
              <a href="https://scores.sebi.gov.in/" target="_blank" rel="noopener noreferrer" className="inline-block text-center bg-[#F0A500] text-[#0A1628] hover:bg-[#d99500] font-bold px-8 py-3 rounded-full transition-colors w-full sm:w-auto">
                Visit SCORES
              </a>
            </div>

            {/* Step 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm flex flex-col h-full border-t-4 border-[#F0A500]">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 rounded-full bg-[#F0A500] text-[#0A1628] font-bold text-xl flex items-center justify-center flex-shrink-0">
                  2
                </div>
                <h4 className="font-display text-xl text-[#0A1628] font-bold">Online Dispute Resolution</h4>
              </div>
              <p className="text-[#23344E] text-[15px] leading-relaxed mb-8 flex-grow">
                Still dissatisfied? Proceed to Online Dispute Resolution (ODR)
              </p>
              <a href="https://smartodr.in" target="_blank" rel="noopener noreferrer" className="inline-block text-center bg-[#F0A500] text-[#0A1628] hover:bg-[#d99500] font-bold px-8 py-3 rounded-full transition-colors w-full sm:w-auto">
                Visit Smart ODR
              </a>
            </div>
          </div>
        </div>

      </section>
    </div>
  )
}
