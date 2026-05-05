'use client'
import { useState } from 'react'
import type { ContactForm } from '@/types'

const INITIAL: ContactForm = { ime: '', prezime: '', email: '', predmet: 'Прашање за лиценца', poraka: '' }

const subjects = ['Прашање за лиценца', 'Техничка поддршка', 'Барање за функција', 'Инсталација', 'Друго']

export default function Contact() {
  const [form, setForm] = useState<ContactForm>(INITIAL)
  const [sent, setSent] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Replace with your real endpoint (Formspree / EmailJS / API route)
    // await fetch('https://formspree.io/f/YOUR_ID', { method: 'POST', body: JSON.stringify(form) })
    setSent(true)
    setForm(INITIAL)
    setTimeout(() => setSent(false), 4000)
  }

  const inputClass = "w-full px-3.5 py-2.5 border border-slate-200 rounded-lg text-sm font-[family-name:var(--font-sans)] text-slate-800 outline-none transition focus:border-[#1560BD] focus:ring-2 focus:ring-[#1560BD]/10"

  return (
    <section id="kontakt" className="py-24 px-[5%] bg-white">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

        {/* Info */}
        <div>
          <span className="inline-block bg-[#E8F1FB] text-[#1560BD] text-xs font-semibold tracking-widest uppercase px-3.5 py-1 rounded-full mb-4">
            Контакт
          </span>
          <h2 className="font-serif text-[clamp(1.8rem,3vw,2.5rem)] text-[#0B1F3A] mb-3.5">
            Контактирајте нè
          </h2>
          <p className="text-[#64748B] leading-relaxed mb-7">
            Имате прашање за лиценцирање, инсталација или барање за функција?
            Со радост ги помагаме клиниките низ Македонија.
          </p>

          {[
            { path: 'M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z', text: 'contact@medicalsoftx.mk' },
            { path: 'M6.62 10.79c1.44 2.83 3.76 5.15 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z', text: '+389 XX XXX XXX' },
            { path: 'M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z', text: 'Скопје, Северна Македонија' },
          ].map(({ path, text }) => (
            <div key={text} className="flex items-center gap-3 text-sm text-slate-700 mb-3.5">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="#1560BD" className="flex-shrink-0">
                <path d={path} />
              </svg>
              {text}
            </div>
          ))}
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-3.5">
          <div className="grid grid-cols-2 gap-3.5">
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-slate-700">Ime</label>
              <input name="ime" value={form.ime} onChange={handleChange} placeholder="Марко" required className={inputClass} />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-slate-700">Презиме</label>
              <input name="prezime" value={form.prezime} onChange={handleChange} placeholder="Илиевски" required className={inputClass} />
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-slate-700">Е-пошта</label>
            <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="marko@klinika.mk" required className={inputClass} />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-slate-700">Предмет</label>
            <select name="predmet" value={form.predmet} onChange={handleChange} className={inputClass}>
              {subjects.map(s => <option key={s}>{s}</option>)}
            </select>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-slate-700">Порака</label>
            <textarea name="poraka" value={form.poraka} onChange={handleChange} placeholder="Кажете ни за вашата клиника..." rows={5} required className={inputClass + ' resize-y'} />
          </div>

          <button
            type="submit"
            className={`self-start px-7 py-3 rounded-xl text-white font-semibold text-sm transition-all ${
              sent ? 'bg-green-600' : 'bg-[#1560BD] hover:bg-[#0B1F3A] hover:-translate-y-0.5'
            }`}
          >
            {sent ? '✓ Пораката е испратена!' : 'Испрати порака'}
          </button>
        </form>
      </div>
    </section>
  )
}
