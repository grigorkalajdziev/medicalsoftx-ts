import Link from 'next/link'
import type { PricingPlan } from '@/types'

const plans: PricingPlan[] = [
  {
    name: 'Стартер',
    price: 'Бесплатно',
    period: '30-дневна проба',
    features: ['Целосен пристап до функции', 'До 50 пациенти', '1 кориснички профил', 'Поддршка по е-пошта'],
    cta: 'Преземи бесплатно',
    href: '#prezemanje',
    featured: false,
  },
  {
    name: 'Професионален',
    price: '9.900',
    period: 'МКД / по клиника / годишно',
    features: ['Неограничени пациенти', 'До 5 кориснички профили', 'Сите видови извештаи', '1 година ажурирања', 'Приоритетна поддршка'],
    cta: 'Земи лиценца',
    href: '#kontakt',
    featured: true,
  },
  {
    name: 'Претпријатие',
    price: 'По договор',
    period: 'за мрежи на клиники',
    features: ['Неограничени корисници', 'Повеќе локации', 'Прилагодени функции', 'Поддршка на лице место'],
    cta: 'Контактирај нè',
    href: '#kontakt',
    featured: false,
  },
]

export default function Pricing() {
  return (
    <section id="ceni" className="py-24 px-[5%] bg-[#F7FAFD] text-center">
      <span className="inline-block bg-[#E8F1FB] text-[#1560BD] text-xs font-semibold tracking-widest uppercase px-3.5 py-1 rounded-full mb-4">
        Цени
      </span>
      <h2 className="font-serif text-[clamp(1.9rem,3.5vw,2.8rem)] text-[#0B1F3A] leading-tight mb-3.5">
        Едноставни, транспарентни цени
      </h2>
      <p className="text-[#64748B] max-w-md mx-auto leading-relaxed mb-14">
        Изберете го планот кој одговара на вашата клиника.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {plans.map(({ name, price, period, features, cta, href, featured }) => (
          <div
            key={name}
            className={`rounded-[14px] p-9 text-left relative transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_64px_rgba(11,31,58,0.15)] ${
              featured
                ? 'bg-[#0B1F3A] border-[#0B1F3A]'
                : 'bg-white border border-slate-200/60'
            }`}
          >
            {featured && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#1560BD] text-white text-xs font-bold px-4 py-1 rounded-full whitespace-nowrap">
                Најпопуларно
              </span>
            )}

            <p className={`text-xs font-semibold uppercase tracking-wider mb-3 ${featured ? 'text-white/60' : 'text-[#64748B]'}`}>
              {name}
            </p>
            <p className={`font-serif text-4xl leading-none mb-1 ${featured ? 'text-white' : 'text-[#0B1F3A]'}`}>
              {price}
            </p>
            <p className={`text-xs mb-6 ${featured ? 'text-white/50' : 'text-[#64748B]'}`}>{period}</p>

            <ul className="list-none mb-7 space-y-0">
              {features.map(f => (
                <li key={f} className={`text-sm py-2 border-b flex items-center gap-2 ${
                  featured ? 'text-white/80 border-white/10' : 'text-[#64748B] border-slate-200/40'
                }`}>
                  <span className={featured ? 'text-sky-300 font-bold' : 'text-[#1560BD] font-bold'}>✓</span>
                  {f}
                </li>
              ))}
            </ul>

            <Link
              href={href}
              className={`block text-center font-semibold text-sm py-3 px-6 rounded-xl no-underline transition-all ${
                featured
                  ? 'bg-[#1560BD] text-white hover:bg-[#1152A8]'
                  : 'bg-[#E8F1FB] text-[#1560BD] hover:bg-[#1560BD] hover:text-white'
              }`}
            >
              {cta}
            </Link>
          </div>
        ))}
      </div>
    </section>
  )
}
