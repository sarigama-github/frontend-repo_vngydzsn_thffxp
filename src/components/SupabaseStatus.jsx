import React, { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';

export default function SupabaseStatus() {
  const [status, setStatus] = useState(supabase ? 'Configured' : 'Missing env');
  const [detail, setDetail] = useState('');

  useEffect(() => {
    if (!supabase) return;
    async function check() {
      try {
        const { error } = await supabase.from('profiles').select('*').limit(1);
        if (error) {
          setStatus('Configured');
          setDetail('Create a table (e.g., profiles) and set Row Level Security policies.');
        } else {
          setStatus('Connected');
          setDetail('Connection successful.');
        }
      } catch {
        setStatus('Configured');
        setDetail('Unable to query. Verify table or policies.');
      }
    }
    check();
  }, []);

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-6">
      <div className="rounded-xl border border-gray-200 bg-white shadow-sm p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className={`inline-block h-2.5 w-2.5 rounded-full ${status === 'Connected' ? 'bg-emerald-500' : status === 'Configured' ? 'bg-amber-500' : 'bg-rose-500'}`} />
          <p className="text-sm text-gray-700">
            Supabase: <span className="font-medium">{status}</span>
          </p>
        </div>
        {detail && <p className="text-xs text-gray-500">{detail}</p>}
      </div>
    </div>
  );
}
