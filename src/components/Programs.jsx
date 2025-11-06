import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Rocket, Code, Music, TreePine, Trophy } from 'lucide-react'
import { useRef } from 'react'

const programs = [
  { icon: <TreePine className="h-6 w-6" />, title: 'Pramuka', desc: 'Membangun kemandirian, kepemimpinan, dan cinta alam.' },
  { icon: <Code className="h-6 w-6" />, title: 'Coding Club', desc: 'Belajar pemrograman, AI dasar, dan pengembangan aplikasi.' },
  { icon: <Music className="h-6 w-6" />, title: 'Music Ensemble', desc: 'Ekspresi musikal melalui orkestra dan paduan suara.' },
  { icon: <Rocket className="h-6 w-6" />, title: 'Robotics', desc: 'Merakit robot, kompetisi, dan problem solving.' },
  { icon: <Trophy className="h-6 w-6" />, title: 'Debate Club', desc: 'Berpikir kritis, public speaking, dan logika.' },
]

export default function Programs() {
  const scroller = useRef(null)

  const scrollBy = (offset) => {
    scroller.current?.scrollBy({ left: offset, behavior: 'smooth' })
  }

  return (
    <section id="programs" className="mx-auto max-w-7xl px-6 py-16">
      <div className="mb-6 flex items-end justify-between">
        <div>
          <h2 className="text-3xl font-semibold text-gray-900">Program & Ekstrakurikuler</h2>
          <p className="mt-2 max-w-2xl text-gray-600">Pilihan kegiatan untuk mengembangkan minat, bakat, dan kepemimpinan siswa.</p>
        </div>
        <div className="hidden gap-2 sm:flex">
          <button onClick={() => scrollBy(-320)} className="rounded-lg border bg-white px-3 py-2 text-gray-700 shadow-sm transition hover:bg-gray-50">
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button onClick={() => scrollBy(320)} className="rounded-lg border bg-white px-3 py-2 text-gray-700 shadow-sm transition hover:bg-gray-50">
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div ref={scroller} className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2">
        {programs.map((p) => (
          <motion.div
            key={p.title}
            whileHover={{ scale: 1.03 }}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="min-w-[280px] snap-start rounded-xl border border-gray-100 bg-white p-5 shadow-sm"
          >
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-[#1C74E9]">
                {p.icon}
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">{p.title}</h3>
                <p className="text-sm text-gray-600">{p.desc}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
