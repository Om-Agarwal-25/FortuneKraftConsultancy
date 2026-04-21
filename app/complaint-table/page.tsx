import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Complaint Table | Fortune Kraft Consultancy',
  description: 'Monthly complaint table for Fortune Kraft Consultancy as per SEBI requirements. Updated before the 7th of every month.',
}

const COMPLAINT_DATA = [
  {
    month: 'April 2026',
    opening: 0,
    received: 0,
    resolved: 0,
    pending: 0,
    reason: '—',
  },
]

export default function ComplaintTablePage() {
  return (
    <div className="bg-[#F8F9FA] min-h-screen font-sans">
      {/* HERO */}
      <section className="relative bg-gradient-to-b from-[#0A1628] to-[#112440] text-white pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden flex flex-col items-center justify-center min-h-[380px]">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#F0A500] opacity-[0.05] rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#F0A500] opacity-[0.03] rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2" />
        <div className="container mx-auto px-6 relative z-10 text-center">

          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-6">
            Complaint Table
          </h1>
          <p className="text-gray-300 max-w-xl mx-auto text-lg">
            Monthly complaint data as per SEBI requirements.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-16 lg:py-24 container mx-auto px-6 max-w-[1000px]">

        {/* Update Notice */}
        <div className="border-l-4 border-[#F0A500] bg-[#0A1628] rounded-r-2xl p-6 mb-10">
          <p className="text-white/90 text-[15px] leading-relaxed">
            This complaint table is updated on a monthly basis before the 7th of every month with data from the previous month, as per SEBI requirements.
          </p>
        </div>

        {/* Complaint Table */}
        <div className="bg-white rounded-2xl shadow-sm mb-10 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr className="bg-[#0A1628] text-white">
                  <th className="py-4 px-6 font-semibold">Month</th>
                  <th className="py-4 px-6 font-semibold text-center">Opening Balance</th>
                  <th className="py-4 px-6 font-semibold text-center">Received</th>
                  <th className="py-4 px-6 font-semibold text-center">Resolved</th>
                  <th className="py-4 px-6 font-semibold text-center">Pending</th>
                  <th className="py-4 px-6 font-semibold">Reason for Pending</th>
                </tr>
              </thead>
              <tbody>
                {COMPLAINT_DATA.map((row, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-[#F8F9FA]'}>
                    <td className="py-4 px-6 border-b border-gray-100 font-medium text-[#0A1628]">{row.month}</td>
                    <td className="py-4 px-6 border-b border-gray-100 text-[#23344E] text-center">{row.opening}</td>
                    <td className="py-4 px-6 border-b border-gray-100 text-[#23344E] text-center">{row.received}</td>
                    <td className="py-4 px-6 border-b border-gray-100 text-[#23344E] text-center">{row.resolved}</td>
                    <td className="py-4 px-6 border-b border-gray-100 text-[#23344E] text-center">{row.pending}</td>
                    <td className="py-4 px-6 border-b border-gray-100 text-[#23344E]">{row.reason}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <p className="text-[#23344E]/60 text-sm mb-12 italic">
          Data shown is from the most recent month. Historical data is maintained as per SEBI regulations.
        </p>

        {/* Trend Data */}
        <div className="bg-white rounded-2xl p-8 shadow-sm">
          <h3 className="font-display text-2xl text-[#0A1628] font-bold mb-4">Trend Data</h3>
          <div className="w-20 h-1 bg-[#F0A500] mb-8" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#F8F9FA] rounded-xl p-6 text-center border border-[#0A1628]/10">
              <p className="text-3xl font-display font-bold text-[#0A1628] mb-2">0</p>
              <p className="text-[#23344E]/70 text-sm">Total complaints received since inception</p>
            </div>
            <div className="bg-[#F8F9FA] rounded-xl p-6 text-center border border-[#0A1628]/10">
              <p className="text-3xl font-display font-bold text-[#0A1628] mb-2">0</p>
              <p className="text-[#23344E]/70 text-sm">Total complaints resolved since inception</p>
            </div>
            <div className="bg-[#F8F9FA] rounded-xl p-6 text-center border border-[#0A1628]/10">
              <p className="text-3xl font-display font-bold text-[#0A1628] mb-2">≤7</p>
              <p className="text-[#23344E]/70 text-sm">Average resolution time (days)</p>
            </div>
          </div>
        </div>

      </section>
    </div>
  )
}
