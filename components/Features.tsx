import type { Feature } from '@/types'

const features: Feature[] = [
  {
    icon: 'M16 11c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 3-1.34 3-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z',
    title: 'Управување со пациенти',
    desc: 'Целосни профили со медицинска историја, контакт информации, дневник на посети и прикачување документи.',
  },
  {
    icon: 'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z',
    title: 'Фактурирање и финансии',
    desc: 'Издавајте излезни фактури, следете начини на плаќање и генерирајте прегледи по ден, месец или година.',
  },
  {
    icon: 'M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z',
    title: 'Дијагнози и историја',
    desc: 'Евидентирајте дијагнози, медицински процедури и целосна историја на пациентот со структурирано внесување.',
  },
  {
    icon: 'M9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4zm2 2H5V5h14v14zm0-16H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z',
    title: 'Извештаи и аналитика',
    desc: 'Дневни, месечни и годишни извештаи. Распределба по услуга, начин на плаќање и проток на пациенти.',
  },
  {
    icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z',
    title: 'Кориснички улоги',
    desc: 'Повеќекориснички систем. Доктори, администратори и рецепционери гледаат само она што им е потребно.',
  },
  {
    icon: 'M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z',
    title: 'Термини и календар',
    desc: 'Закажувајте термини со Outlook-стил календар, потсетници и следење на дневниот проток.',
  },
]

export default function Features() {
  return (
    <section id="funkcii" className="py-24 px-[5%] bg-[#F7FAFD]">
      <span className="inline-block bg-[#E8F1FB] text-[#1560BD] text-xs font-semibold tracking-widest uppercase px-3.5 py-1 rounded-full mb-4">
        Функции
      </span>
      <h2 className="font-serif text-[clamp(1.9rem,3.5vw,2.8rem)] text-[#0B1F3A] leading-tight mb-3.5">
        Сè што вашата клиника треба
      </h2>
      <p className="text-[#64748B] max-w-lg leading-relaxed mb-14">
        Изграден специјално за македонски медицински практики. Управува со дневни
        операции, финансии и извештаи во едно чисто сучеље.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map(({ icon, title, desc }) => (
          <div
            key={title}
            className="bg-white rounded-[14px] p-8 border border-slate-200/60 transition-all duration-300 hover:shadow-[0_16px_64px_rgba(11,31,58,0.15)] hover:-translate-y-1"
          >
            <div className="w-12 h-12 bg-[#E8F1FB] rounded-xl flex items-center justify-center mb-5">
              <svg viewBox="0 0 24 24" width="24" height="24" fill="#1560BD">
                <path d={icon} />
              </svg>
            </div>
            <h3 className="font-serif text-lg text-[#0B1F3A] mb-2.5">{title}</h3>
            <p className="text-sm text-[#64748B] leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
