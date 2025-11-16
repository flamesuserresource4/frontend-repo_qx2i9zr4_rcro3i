import { Menu, X, Phone, Mail, Code } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Free APIs", href: "#apis" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-white/60 backdrop-blur-md border-b border-black/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2 font-semibold text-gray-900">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-indigo-500 via-sky-500 to-cyan-400 grid place-items-center text-white">
              <Code size={18} />
            </div>
            <span>CBSoft</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="mailto:contact@cbsoft.ro" className="inline-flex items-center gap-2 text-sm font-medium text-white bg-gray-900 hover:bg-gray-800 px-4 py-2 rounded-lg transition-colors">
              <Mail size={16} /> Contact
            </a>
            <a href="tel:+40000000000" className="inline-flex items-center gap-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 hover:border-gray-300 px-4 py-2 rounded-lg transition-colors">
              <Phone size={16} /> Call
            </a>
          </div>

          <button className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-md hover:bg-black/5" onClick={() => setOpen(!open)} aria-label="Toggle Menu">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-black/5 bg-white/70 backdrop-blur">
          <div className="px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="block text-sm font-medium text-gray-700">
                {item.label}
              </a>
            ))}
            <div className="pt-2 flex gap-3">
              <a href="mailto:contact@cbsoft.ro" className="inline-flex items-center gap-2 text-sm font-medium text-white bg-gray-900 hover:bg-gray-800 px-4 py-2 rounded-lg transition-colors">
                <Mail size={16} /> Contact
              </a>
              <a href="tel:+40000000000" className="inline-flex items-center gap-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 hover:border-gray-300 px-4 py-2 rounded-lg transition-colors">
                <Phone size={16} /> Call
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
