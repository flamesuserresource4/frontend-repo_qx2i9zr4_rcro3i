import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <p className="text-sm font-semibold text-indigo-600">Contact</p>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">Let's build something great</h2>
            <p className="mt-3 text-gray-600">Tell us about your idea and we'll get back within 24 hours.</p>

            <div className="mt-6 space-y-3 text-sm text-gray-700">
              <p className="inline-flex items-center gap-2"><Mail size={16}/> contact@cbsoft.ro</p>
              <p className="inline-flex items-center gap-2"><Phone size={16}/> +40 000 000 000</p>
              <p className="inline-flex items-center gap-2"><MapPin size={16}/> Cluj-Napoca, Romania</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-gray-50 border border-gray-200 rounded-xl p-6">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-gray-600">Name</label>
                <input required className="mt-1 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
              </div>
              <div>
                <label className="text-sm text-gray-600">Email</label>
                <input type="email" required className="mt-1 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
              </div>
              <div className="sm:col-span-2">
                <label className="text-sm text-gray-600">Message</label>
                <textarea rows={4} required className="mt-1 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
              </div>
            </div>
            <button className={`mt-4 inline-flex items-center gap-2 rounded-lg px-4 py-2 font-semibold text-white ${sent ? 'bg-emerald-600' : 'bg-gray-900 hover:bg-gray-800'}`}>
              <Send size={16} /> {sent ? 'Sent!' : 'Send message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
