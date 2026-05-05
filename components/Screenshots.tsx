import Image from 'next/image'
import type { Screenshot } from '@/types'

// Replace img: null with real paths e.g. '/screenshots/Dashboard.png'
const screenshots: Screenshot[] = [
  { emoji: '🏥', label: 'Листа на пациенти',    sub: 'Пребарување, филтрирање и управување', bg: 'linear-gradient(135deg,#0B1F3A,#1560BD)', img: null },
  { emoji: '📊', label: 'Контролна табла',       sub: 'Дневна, месечна и годишна аналитика',  bg: 'linear-gradient(135deg,#0B3A6E,#1A7DB5)', img: '/screenshots/Dashboard.png' },
  { emoji: '🧾', label: 'Управување со фактури', sub: 'Лесно издавање и следење',             bg: 'linear-gradient(135deg,#082B55,#0F5AA0)', img: null },
  { emoji: '🩺', label: 'Медицинска историја',   sub: 'Целосна медицинска документација',     bg: 'linear-gradient(135deg,#0E2445,#1560BD)', img: null },
  { emoji: '📅', label: 'Календар на термини',   sub: 'Outlook-стил за закажување',           bg: 'linear-gradient(135deg,#0B1F3A,#2176D9)', img: null },
  { emoji: '👥', label: 'Корисници и улоги',     sub: 'Пристап базиран на улоги',             bg: 'linear-gradient(135deg,#071626,#1046A8)', img: null },
]

export default function Screenshots() {
  return (
    <section id="sliki" className="py-24 px-[5%] bg-white">
      <span className="inline-block bg-[#E8F1FB] text-[#1560BD] text-xs font-semibold tracking-widest uppercase px-3.5 py-1 rounded-full mb-4">
        Слики
      </span>
      <h2 className="font-serif text-[clamp(1.9rem,3.5vw,2.8rem)] text-[#0B1F3A] leading-tight mb-3.5">
        Видете го во акција
      </h2>
      <p className="text-[#64748B] max-w-lg leading-relaxed mb-14">
        Чисто, професионално сучеље дизајнирано за секојдневна клиничка употреба.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {screenshots.map(({ emoji, label, sub, bg, img }) => (
          <div
            key={label}
            className="rounded-2xl overflow-hidden border border-slate-200 shadow-[0_4px_32px_rgba(11,31,58,0.10)] cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_16px_64px_rgba(11,31,58,0.15)]"
          >
            <div className="h-48 flex items-center justify-center relative overflow-hidden" style={{ background: bg }}>
              {img ? (
                <Image
                  src={img}
                  alt={label}
                  fill
                  className="object-contain p-2"
                />
              ) : (
                <span className="text-5xl relative z-10">{emoji}</span>
              )}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: 'repeating-linear-gradient(45deg, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 1px, transparent 1px, transparent 20px)' }}
              />
            </div>
            <div className="p-4 bg-white">
              <p className="text-sm font-semibold text-[#0B1F3A] mb-1">{label}</p>
              <p className="text-xs text-[#64748B]">{sub}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
