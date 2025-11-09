import React from 'react';

const cards = [
  'Active Accounts',
  'Total Portfolio',
  'Regular Portfolio',
  '1+ PAR',
  'NPA',
  'Man Power',
  'Audit Rating',
];

export default function MetricsGrid() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {cards.map((title) => (
          <div
            key={title}
            className="rounded-xl border border-gray-200 bg-white shadow-sm p-5 flex items-center justify-between"
          >
            <div>
              <p className="text-xs font-medium tracking-wider text-gray-500 uppercase">{title}</p>
              <p className="mt-2 text-2xl font-semibold text-gray-900">—</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
