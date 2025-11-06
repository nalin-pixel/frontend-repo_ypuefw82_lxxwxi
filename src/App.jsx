import Hero from './components/Hero'
import About from './components/About'
import Programs from './components/Programs'
import Contact from './components/Contact'
import { School, Menu } from 'lucide-react'
import { useState } from 'react'

function App() {
  const [open, setOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Top Nav */}
      <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/80 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <a href="#" className="flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-[#1C74E9] text-white">
              <School className="h-5 w-5" />
            </span>
            <div>
              <div className="font-semibold leading-5">Sekolah Modern 2025</div>
              <div className="text-xs text-gray-500">Ilmu • Karakter • Kreativitas</div>
            </div>
          </a>

          <nav className="hidden gap-6 text-sm font-medium md:flex">
            <a href="#about" className="text-gray-700 hover:text-[#1C74E9]">Tentang</a>
            <a href="#programs" className="text-gray-700 hover:text-[#1C74E9]">Program</a>
            <a href="#contact" className="text-gray-700 hover:text-[#1C74E9]">Kontak</a>
          </nav>

          <button onClick={() => setOpen(!open)} className="rounded-lg p-2 hover:bg-gray-50 md:hidden">
            <Menu className="h-6 w-6" />
          </button>
        </div>
        {open && (
          <div className="border-t bg-white px-6 py-3 md:hidden">
            <div className="flex flex-col gap-2 text-sm font-medium">
              <a onClick={() => setOpen(false)} href="#about" className="py-1">Tentang</a>
              <a onClick={() => setOpen(false)} href="#programs" className="py-1">Program</a>
              <a onClick={() => setOpen(false)} href="#contact" className="py-1">Kontak</a>
            </div>
          </div>
        )}
      </header>

      {/* Sections */}
      <main>
        <Hero />
        <About />
        <Programs />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="mt-10 border-t border-gray-100 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-10">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-gray-600">
              © {new Date().getFullYear()} Sekolah Modern 2025. Semua hak dilindungi.
            </p>
            <div className="flex items-center gap-4 text-sm">
              <a href="#about" className="text-gray-600 hover:text-[#1C74E9]">Tentang</a>
              <a href="#programs" className="text-gray-600 hover:text-[#1C74E9]">Program</a>
              <a href="#contact" className="text-gray-600 hover:text-[#1C74E9]">Kontak</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
