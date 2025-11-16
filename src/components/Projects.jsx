import { Briefcase, Rocket, CheckCircle2 } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'Retail ERP Platform',
      type: 'Commercial',
      highlights: ['Inventory sync', 'Billing & invoicing', 'Role-based access'],
    },
    {
      title: 'Telemedicine App',
      type: 'Commercial',
      highlights: ['Secure video calls', 'E-prescriptions', 'Payments'],
    },
    {
      title: 'IoT Fleet Dashboard',
      type: 'Commercial',
      highlights: ['Real-time tracking', 'Alerts', 'Advanced analytics'],
    },
  ];

  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-lg bg-gray-900 text-white grid place-items-center"><Briefcase size={18} /></div>
          <div>
            <p className="text-sm font-semibold text-gray-600">Work</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Commercial projects delivered</h2>
          </div>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <div key={p.title} className="rounded-xl border border-gray-200 bg-white p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900">{p.title}</h3>
                <span className="inline-flex items-center gap-1 text-xs font-medium rounded-full bg-emerald-50 text-emerald-700 px-2 py-1"><Rocket size={14} /> {p.type}</span>
              </div>
              <ul className="mt-4 space-y-2">
                {p.highlights.map((h) => (
                  <li key={h} className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle2 className="text-emerald-500" size={16} />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
