import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'
import { Calendar, Rocket, Users, Award } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

function useCountUp(end = 0, duration = 1500) {
  const [value, setValue] = useState(0)
  const start = useRef(null)

  useEffect(() => {
    let rafId
    const step = (timestamp) => {
      if (!start.current) start.current = timestamp
      const progress = Math.min((timestamp - start.current) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.floor(eased * end))
      if (progress < 1) rafId = requestAnimationFrame(step)
    }
    rafId = requestAnimationFrame(step)
    return () => cancelAnimationFrame(rafId)
  }, [end, duration])

  return value
}

export default function Hero() {
  const students = useCountUp(1250, 1800)
  const teachers = useCountUp(85, 1600)
  const alumni = useCountUp(5400, 2000)
  const awards = useCountUp(72, 1700)

  return (
    <section className="relative h-[90vh] w-full overflow-hidden">
      {/* Spline background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/cEecEwR6Ehj4iT8T/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        {/* Soft gradient overlay for contrast; doesn't block interactions */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-white/10" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-sm backdrop-blur">
            <Rocket className="h-4 w-4 text-yellow-300" />
            Sekolah Modern 2025
          </span>
          <h1 className="text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
            Membangun Generasi Masa Depan dengan Ilmu, Karakter, dan Kreativitas
          </h1>
          <p className="mx-auto max-w-2xl text-base text-white/90 sm:text-lg">
            Platform profil sekolah yang interaktif, transparan, dan menyenangkan
            untuk siswa, guru, orang tua, dan calon murid.
          </p>

          <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-[#1C74E9] px-6 py-3 font-medium text-white transition-transform duration-300 hover:scale-105"
            >
              Daftar Sekarang
            </a>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-white/15 px-6 py-3 font-medium text-white backdrop-blur transition-transform duration-300 hover:scale-105"
            >
              <Calendar className="h-4 w-4" /> Jadwal Kunjungan Sekolah
            </a>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-10 grid w-full max-w-4xl grid-cols-2 gap-4 sm:grid-cols-4"
        >
          <StatCard icon={<Users className="h-5 w-5" />} label="Siswa" value={students} />
          <StatCard icon={<Users className="h-5 w-5" />} label="Guru" value={teachers} />
          <StatCard icon={<Users className="h-5 w-5" />} label="Alumni" value={alumni} />
          <StatCard icon={<Award className="h-5 w-5" />} label="Prestasi" value={awards} />
        </motion.div>
      </div>
    </section>
  )
}

function StatCard({ icon, label, value }) {
  return (
    <div className="rounded-xl bg-white/10 px-4 py-5 text-left text-white shadow-lg backdrop-blur">
      <div className="flex items-center gap-3 text-white/90">
        <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/10">
          {icon}
        </span>
        <div>
          <div className="text-2xl font-semibold">{value.toLocaleString()}</div>
          <div className="text-xs uppercase tracking-wide text-white/70">{label}</div>
        </div>
      </div>
    </div>
  )
}
