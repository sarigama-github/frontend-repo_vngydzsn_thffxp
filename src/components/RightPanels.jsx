import React from 'react';

function LabelValue({ label, value }) {
  return (
    <div className="grid grid-cols-2 gap-2 py-2">
      <div className="text-sm text-gray-500">{label}</div>
      <div className="text-sm font-semibold text-gray-900 text-right">{value}</div>
    </div>
  );
}

function AchieverCard() {
  return (
    <div className="rounded-xl border border-gray-200 bg-white shadow-sm p-5 relative">
      <div className="absolute right-3 top-3 text-[10px] px-2 py-0.5 rounded-full bg-gray-100 text-gray-600 border border-gray-200">
        No Data
      </div>
      <h3 className="text-base font-semibold text-gray-900 mb-3">Achiever of the Month</h3>
      <div className="divide-y divide-gray-100">
        <LabelValue label="Name" value="—" />
        <LabelValue label="Customer Base" value="—" />
        <LabelValue label="Maintained Portfolio" value="—" />
        <LabelValue label="Disbursement" value="—" />
        <LabelValue label="Collection Efficiency" value="—" />
      </div>
    </div>
  );
}

function DesignationSummary() {
  const cols = ['DM', 'BM / ABM / BSM', 'FO / SE / SO', 'BOE', 'CO'];
  return (
    <div className="rounded-xl border border-gray-200 bg-white shadow-sm p-5 relative">
      <div className="absolute right-3 top-3 text-[10px] px-2 py-0.5 rounded-full bg-gray-100 text-gray-600 border border-gray-200">
        No Data
      </div>
      <h3 className="text-base font-semibold text-gray-900 mb-3">Designation Summary</h3>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="text-left text-gray-500">
              {cols.map((c) => (
                <th key={c} className="px-3 py-2 font-medium border-b border-gray-200">
                  {c}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              {cols.map((c) => (
                <td key={c} className="px-3 py-3 text-center text-gray-900 border-b border-gray-100">—</td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default function RightPanels() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2">
          <AchieverCard />
        </div>
        <div className="lg:col-span-1">
          <DesignationSummary />
        </div>
      </div>
    </section>
  );
}
