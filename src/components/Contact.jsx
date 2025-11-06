import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react'
import { useState } from 'react'

export default function Contact() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simulate async submit
    setTimeout(() => setSent(true), 600)
  }

  return (
    <section id="contact" className="relative mx-auto max-w-7xl px-6 py-16">
      <div className="mb-8">
        <h2 className="text-3xl font-semibold text-gray-900">Kontak & Lokasi</h2>
        <p className="mt-2 max-w-2xl text-gray-600">
          Ada pertanyaan atau ingin menjadwalkan kunjungan? Kirim pesan melalui formulir berikut atau hubungi kami.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">Nama</label>
              <input required type="text" className="w-full rounded-lg border border-gray-200 px-3 py-2 outline-none ring-[#1C74E9]/20 focus:ring-2" placeholder="Nama lengkap" />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">Email</label>
              <input required type="email" className="w-full rounded-lg border border-gray-200 px-3 py-2 outline-none ring-[#1C74E9]/20 focus:ring-2" placeholder="nama@email.com" />
            </div>
          </div>
          <div className="mt-4">
            <label className="mb-1 block text-sm font-medium text-gray-700">Subjek</label>
            <input required type="text" className="w-full rounded-lg border border-gray-200 px-3 py-2 outline-none ring-[#1C74E9]/20 focus:ring-2" placeholder="Ajukan Kunjungan Sekolah" />
          </div>
          <div className="mt-4">
            <label className="mb-1 block text-sm font-medium text-gray-700">Pesan</label>
            <textarea required rows={5} className="w-full rounded-lg border border-gray-200 px-3 py-2 outline-none ring-[#1C74E9]/20 focus:ring-2" placeholder="Tulis pesan Anda..." />
          </div>
          <button type="submit" className="mt-5 inline-flex items-center gap-2 rounded-lg bg-[#1C74E9] px-5 py-2.5 font-medium text-white transition-transform duration-300 hover:scale-105">
            <Send className="h-4 w-4" /> {sent ? 'Terkirim!' : 'Kirim Pesan'}
          </button>

          <div className="mt-6 grid grid-cols-3 gap-4 text-sm">
            <div className="flex items-center gap-2 text-gray-600"><Phone className="h-4 w-4" /> (021) 1234-5678</div>
            <div className="flex items-center gap-2 text-gray-600"><Mail className="h-4 w-4" /> info@sekolahmodern.sch.id</div>
            <div className="flex items-center gap-2 text-gray-600"><MapPin className="h-4 w-4" /> Jakarta, Indonesia</div>
          </div>
        </motion.form>

        {/* Map */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="overflow-hidden rounded-2xl border border-gray-100 shadow-sm"
        >
          <iframe
            title="Lokasi Sekolah"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.796326333287!2d106.822864!3d-6.158253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5c5c5c5c5c5%3A0x0000000000000000!2sJakarta!5e0!3m2!1sen!2sid!4v1700000000000!5m2!1sen!2sid"
            width="100%"
            height="420"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </div>

      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/6281234567890"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 inline-flex items-center gap-2 rounded-full bg-green-500 px-4 py-3 font-medium text-white shadow-lg transition-transform duration-300 hover:scale-105"
      >
        <MessageCircle className="h-5 w-5" /> WhatsApp
      </a>
    </section>
  )
}
