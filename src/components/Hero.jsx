import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] md:min-h-screen grid place-items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-24 md:pt-32">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/50 px-3 py-1 text-xs font-medium text-gray-700 shadow-sm backdrop-blur pointer-events-none">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
            Building modern software that ships
          </div>
          <h1 className="mt-5 text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900">
            CBSoft — Crafting reliable apps, APIs and platforms
          </h1>
          <p className="mt-4 text-base md:text-lg text-gray-700 leading-relaxed">
            We design and build production-grade software for startups and enterprises. Explore our free API tools and see our commercial work powering real businesses.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a href="#apis" className="inline-flex items-center justify-center rounded-lg bg-gray-900 px-5 py-3 text-white font-semibold shadow hover:bg-gray-800 transition-colors">Explore Free APIs</a>
            <a href="#projects" className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-5 py-3 text-gray-900 font-semibold hover:border-gray-400 transition-colors">View Projects</a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/20 via-white/40 to-white"></div>
    </section>
  );
}
