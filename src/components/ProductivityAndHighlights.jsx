import React from 'react';

function SectionCard({ title, children }) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white shadow-sm p-5 relative">
      <div className="absolute right-3 top-3 text-[10px] px-2 py-0.5 rounded-full bg-gray-100 text-gray-600 border border-gray-200">
        No Data
      </div>
      {title && <h3 className="text-base font-semibold text-gray-900 mb-3">{title}</h3>}
      {children}
    </div>
  );
}

export default function ProductivityAndHighlights() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Productivity Table */}
        <SectionCard title="Productivity">
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="text-left text-gray-500">
                  {['Metric', 'Previous', 'Current', 'Change'].map((h) => (
                    <th key={h} className="px-3 py-2 font-medium border-b border-gray-200">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {['DB / FO', 'Active Accounts / FO', 'Portfolio / FO'].map((row) => (
                  <tr key={row} className="text-gray-900">
                    <td className="px-3 py-3 border-b border-gray-100">{row}</td>
                    <td className="px-3 py-3 border-b border-gray-100 text-center">—</td>
                    <td className="px-3 py-3 border-b border-gray-100 text-center">—</td>
                    <td className="px-3 py-3 border-b border-gray-100 text-center">—</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </SectionCard>

        {/* Month Highlights Table */}
        <SectionCard title="Month Highlights">
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="text-left text-gray-500">
                  {['Parameters', 'Prev Month', 'Current Month', 'Difference'].map((h) => (
                    <th key={h} className="px-3 py-2 font-medium border-b border-gray-200">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan={4} className="px-3 py-6 text-center text-gray-500">No data available</td>
                </tr>
              </tbody>
            </table>
          </div>
        </SectionCard>
      </div>
    </section>
  );
}
