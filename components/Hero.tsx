import Link from 'next/link'

interface Stat { num: string; label: string }

const stats: Stat[] = [
  { num: '500+',   label: 'Пациенти' },
  { num: '12+',    label: 'Видови извештаи' },
  { num: '1-клик', label: 'Инсталација' },
]

export default function Hero() {
  return (
    <section className="min-h-screen bg-[#0B1F3A] flex flex-col items-center justify-center text-center px-[5%] pt-32 pb-20 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(21,96,189,0.55) 0%, transparent 70%), radial-gradient(ellipse 40% 40% at 85% 80%, rgba(14,165,233,0.2) 0%, transparent 60%)' }}
      />
      {/* Grid */}
      <div className="absolute inset-0 opacity-5"
        style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)', backgroundSize: '48px 48px' }}
      />

      {/* Badge */}
      <div className="relative inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-7 text-xs font-medium text-white/85 animate-fade-up">
        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse-dot flex-shrink-0" />
        Доверено од клиники низ Македонија
      </div>

      {/* Title */}
      <h1 className="relative font-serif text-[clamp(2.6rem,5.5vw,4.4rem)] leading-[1.12] text-white max-w-4xl mb-5 animate-fade-up-1">
        Целосно управување со клиника{' '}
        <em className="not-italic text-sky-300">Едноставно</em>
      </h1>

      {/* Subtitle */}
      <p className="relative text-[clamp(1rem,1.5vw,1.15rem)] text-white/70 max-w-xl leading-relaxed mb-10 animate-fade-up-2">
        MedicalSoftx е професионален десктоп софтвер за управување со пациенти,
        фактури, дијагнози, медицинска историја и извештаи — сè на едно место.
      </p>

      {/* Buttons */}
      <div className="relative flex gap-3.5 flex-wrap justify-center animate-fade-up-3">
        <Link
          href="#prezemanje"
          className="inline-flex items-center gap-2.5 bg-[#1560BD] text-white font-semibold text-base px-8 py-3.5 rounded-xl no-underline transition-all hover:-translate-y-0.5 hover:bg-[#1152A8] shadow-[0_4px_20px_rgba(21,96,189,0.5)] hover:shadow-[0_8px_28px_rgba(21,96,189,0.6)]"
        >
          <svg viewBox="0 0 24 24" width="20" height="20" fill="white" className="flex-shrink-0">
            <path d="M19 9h-4V3H9v6H5l7 7 7-7zm-8 2V5h2v6h1.17L12 13.17 9.83 11H11zm-6 7h14v2H5v-2z"/>
          </svg>
          Преземи пробна верзија
        </Link>
        <Link
          href="#funkcii"
          className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white font-medium text-[0.95rem] px-7 py-3.5 rounded-xl no-underline transition-all hover:bg-white/15 hover:-translate-y-0.5"
        >
          Погледни функции →
        </Link>
      </div>

      {/* Stats */}
      <div className="relative flex gap-10 mt-16 flex-wrap justify-center animate-fade-up-4">
        {stats.map(({ num, label }) => (
          <div key={label} className="text-center">
            <span className="font-serif text-3xl text-white block">{num}</span>
            <span className="text-xs text-white/50">{label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
