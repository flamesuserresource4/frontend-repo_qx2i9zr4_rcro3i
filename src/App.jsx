import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FreeAPIs from './components/FreeAPIs';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <FreeAPIs />
        <Projects />
        <Contact />
        <footer className="py-10 border-t border-gray-200 bg-white">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-sm text-gray-600 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p>© {new Date().getFullYear()} CBSoft. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <a className="hover:text-gray-900" href="https://www.cbsoft.ro" target="_blank" rel="noreferrer">cbsoft.ro</a>
              <a className="hover:text-gray-900" href="#apis">APIs</a>
              <a className="hover:text-gray-900" href="#projects">Projects</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App