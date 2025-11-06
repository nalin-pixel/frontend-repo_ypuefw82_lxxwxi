import Hero from './components/Hero'
import About from './components/About'
import Programs from './components/Programs'
import Contact from './components/Contact'

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Hero />
      <About />
      <Programs />
      <Contact />
      <footer className="border-t bg-gray-50">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-8 text-sm text-gray-600">
          <p>
            © {new Date().getFullYear()} Sekolah Modern 2025. "Mendidik dengan hati dan teknologi."
          </p>
          <div className="flex gap-4">
            <a href="#about" className="hover:text-gray-900">Tentang</a>
            <a href="#programs" className="hover:text-gray-900">Program</a>
            <a href="#contact" className="hover:text-gray-900">Kontak</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
