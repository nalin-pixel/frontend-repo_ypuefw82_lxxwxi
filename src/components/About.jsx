import { motion } from 'framer-motion'
import { CheckCircle2, Star } from 'lucide-react'

const values = [
  { title: 'Integritas', desc: 'Membentuk karakter jujur, disiplin, dan bertanggung jawab.' },
  { title: 'Kolaborasi', desc: 'Belajar bersama, saling dukung antara siswa, guru, dan orang tua.' },
  { title: 'Kreativitas', desc: 'Mendorong eksplorasi, inovasi, dan pemikiran kritis.' },
]

const advantages = [
  'Kurikulum berbasis proyek dan teknologi',
  'Fasilitas modern: lab sains, studio kreatif, smart class',
  'Pembinaan karakter dan literasi digital',
  'Kemitraan internasional dan program pertukaran',
]

export default function About() {
  return (
    <section id="about" className="relative mx-auto max-w-7xl px-6 py-16">
      <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <h2 className="text-3xl font-semibold text-gray-900">Tentang Sekolah</h2>
        <p className="mt-2 max-w-2xl text-gray-600">
          Sejak berdiri, kami berkomitmen menghadirkan pengalaman belajar yang bermakna melalui
          pendekatan holistik yang menggabungkan akademik, karakter, dan kreativitas.
        </p>
      </motion.div>

      {/* Timeline singkat */}
      <div className="mt-10 grid gap-8 md:grid-cols-2">
        <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="space-y-6">
          <div className="relative border-l-2 border-blue-200 pl-6">
            {[
              { year: '2005', event: 'Sekolah berdiri dengan 3 kelas.' },
              { year: '2015', event: 'Peresmian laboratorium sains dan robotik.' },
              { year: '2020', event: 'Implementasi kelas berbasis teknologi penuh.' },
              { year: '2024', event: 'Akreditasi A dan ekspansi program internasional.' },
            ].map((item) => (
              <div key={item.year} className="mb-6">
                <div className="absolute -left-[9px] mt-1 h-4 w-4 rounded-full bg-[#1C74E9]" />
                <div className="text-sm text-gray-500">{item.year}</div>
                <div className="font-medium text-gray-800">{item.event}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="space-y-6">
          <div className="grid gap-4 sm:grid-cols-2">
            {values.map((v) => (
              <div key={v.title} className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm transition-transform duration-300 hover:scale-[1.02]">
                <div className="flex items-start gap-3">
                  <Star className="mt-1 h-5 w-5 text-[#FFD65A]" />
                  <div>
                    <h3 className="font-semibold text-gray-900">{v.title}</h3>
                    <p className="text-sm text-gray-600">{v.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-xl bg-blue-50 p-6">
            <h4 className="mb-3 font-semibold text-gray-900">Keunggulan Sekolah Kami</h4>
            <ul className="space-y-2">
              {advantages.map((a) => (
                <li key={a} className="flex items-start gap-2 text-sm text-gray-700">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-[#1C74E9]" /> {a}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
