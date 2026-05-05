import type { SidebarItem, MockCard } from '@/types'

const sidebarItems: SidebarItem[] = [
  { icon: 'M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z', label: 'Почетна', active: true },
  { icon: 'M16 11c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 3-1.34 3-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z', label: 'Пациенти' },
  { icon: 'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14l-5-5 1.41-1.41L12 14.17l7.59-7.59L21 8l-9 9z', label: 'Дијагнози' },
  { icon: 'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z', label: 'Фактури' },
  { icon: 'M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z', label: 'Извештаи' },
]

const cards: MockCard[] = [
  { label: 'Пациенти денес', value: '24',  sub: '↑ 3 повеќе' },
  { label: 'Издадени фактури', value: '18', sub: '5 на чекање' },
  { label: 'Приход (МКД)',    value: '42К', sub: '↑ Овој месец' },
]

const tableRows = [
  { patient: 'Марко Илиевски', doctor: 'Д-р Петровски', status: 'Завршено', color: 'green' },
  { patient: 'Ана Јованоска',  doctor: 'Д-р Ристова',   status: 'Закажано', color: 'blue' },
]

export default function Mockup() {
  return (
    <section className="bg-[#0B1F3A] px-[5%] pb-20 flex justify-center">
      <div className="w-full max-w-4xl rounded-2xl overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.5),0_0_0_1px_rgba(255,255,255,0.08)]">
        {/* Window bar */}
        <div className="bg-[#1A2D4A] h-10 flex items-center px-4 gap-2">
          <span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
          <span className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
          <span className="w-3 h-3 rounded-full bg-[#28C840]" />
        </div>

        {/* Screen */}
        <div className="bg-[#0F2138] min-h-[340px] grid grid-cols-[200px_1fr]">
          {/* Sidebar */}
          <div className="bg-[#0B1A2E] border-r border-white/[0.06] py-5 hidden md:block">
            {sidebarItems.map(({ icon, label, active }) => (
              <div
                key={label}
                className={`flex items-center gap-2.5 px-4 py-2.5 text-xs cursor-pointer transition-all ${
                  active
                    ? 'text-white bg-[rgba(21,96,189,0.35)] border-r-2 border-[#1560BD]'
                    : 'text-white/45 hover:text-white/70'
                }`}
              >
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" className="flex-shrink-0">
                  <path d={icon} />
                </svg>
                {label}
              </div>
            ))}
          </div>

          {/* Main content */}
          <div className="p-6">
            <p className="text-white/80 text-[0.95rem] font-semibold mb-4">Преглед на денот</p>

            <div className="grid grid-cols-3 gap-3 mb-5">
              {cards.map(({ label, value, sub }) => (
                <div key={label} className="bg-white/5 border border-white/[0.08] rounded-xl p-3.5">
                  <p className="text-[0.7rem] text-white/40 mb-1.5">{label}</p>
                  <p className="font-serif text-2xl text-white">{value}</p>
                  <p className="text-[0.68rem] text-cyan-400 mt-1">{sub}</p>
                </div>
              ))}
            </div>

            <table className="w-full border-collapse">
              <thead>
                <tr>
                  {['Пациент', 'Доктор', 'Статус'].map(h => (
                    <th key={h} className="text-[0.68rem] text-white/30 text-left px-2.5 pb-2 uppercase tracking-wider">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {tableRows.map(({ patient, doctor, status, color }) => (
                  <tr key={patient} className="border-t border-white/[0.05]">
                    <td className="text-[0.75rem] text-white/65 px-2.5 py-2">{patient}</td>
                    <td className="text-[0.75rem] text-white/65 px-2.5 py-2">{doctor}</td>
                    <td className="px-2.5 py-2">
                      <span className={`inline-block px-2 py-0.5 rounded text-[0.65rem] font-semibold ${
                        color === 'green'
                          ? 'bg-green-500/15 text-green-400'
                          : 'bg-blue-600/20 text-blue-400'
                      }`}>
                        {status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}
