import { useEffect, useState } from 'react';
import { Globe, Zap, Link as LinkIcon, Shield } from 'lucide-react';

const API_BASE = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000';

export default function FreeAPIs() {
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    const ping = async () => {
      try {
        const res = await fetch(`${API_BASE}/api/hello`);
        if (res.ok) setStatus("online");
        else setStatus("degraded");
      } catch (e) {
        setStatus("offline");
      }
    };
    ping();
  }, []);

  const apis = [
    {
      name: "Ping API",
      desc: "Simple endpoint to check service availability.",
      endpoint: "/api/hello",
      method: "GET",
    },
    {
      name: "Status Check",
      desc: "Verify backend and database health.",
      endpoint: "/test",
      method: "GET",
    },
  ];

  return (
    <section id="apis" className="py-24 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-sm font-semibold text-indigo-600">Free API Tools</p>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">Plug-and-play endpoints</h2>
            <p className="mt-3 text-gray-600 max-w-2xl">Use our free, production-ready APIs in your projects. No signup required for basic usage.</p>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-sm">
            <span className={`inline-flex h-2 w-2 rounded-full ${status === 'online' ? 'bg-emerald-500' : status === 'degraded' ? 'bg-yellow-500' : status === 'offline' ? 'bg-red-500' : 'bg-gray-300'}`}></span>
            <span className="text-gray-600 capitalize">{status}</span>
          </div>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {apis.map((api) => (
            <div key={api.name} className="rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-gradient-to-tr from-indigo-500 to-cyan-400 grid place-items-center text-white">
                    <Globe size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{api.name}</h3>
                    <p className="text-sm text-gray-500">{api.method}</p>
                  </div>
                </div>
              </div>
              <p className="mt-4 text-gray-600 text-sm">{api.desc}</p>
              <div className="mt-4 flex items-center justify-between">
                <code className="text-xs bg-gray-50 border border-gray-200 px-2 py-1 rounded">{API_BASE}{api.endpoint}</code>
                <a className="inline-flex items-center gap-1 text-sm text-indigo-600 hover:text-indigo-700" href={`${API_BASE}${api.endpoint}`} target="_blank" rel="noreferrer">
                  <LinkIcon size={16} /> Try
                </a>
              </div>
              <div className="mt-4 flex items-center gap-3 text-xs text-gray-500">
                <span className="inline-flex items-center gap-1"><Zap size={14} /> Fast</span>
                <span className="inline-flex items-center gap-1"><Shield size={14} /> Secure</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
