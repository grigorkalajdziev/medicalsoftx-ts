// 👇 Сменете ги со вистинските линкови
const SETUP_URL = '#'
const SQL_URL   = '#'

export default function Download() {
  return (
    <section id="prezemanje" className="py-24 px-[5%] bg-[#0B1F3A] text-center relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(21,96,189,0.4) 0%, transparent 70%)' }}
      />

      <div className="relative">
        <span className="inline-block bg-white/10 text-white/70 text-xs font-semibold tracking-widest uppercase px-3.5 py-1 rounded-full mb-4">
          Преземање
        </span>
        <h2 className="font-serif text-[clamp(1.9rem,3.5vw,2.8rem)] text-white leading-tight mb-3.5">
          Готово за инсталација за минути
        </h2>
        <p className="text-white/60 max-w-lg mx-auto leading-relaxed mb-10">
          Еден инсталер ги вклучува апликацијата И базата на податоци.
          Не е потребно техничко знаење — само стартувајте.
        </p>

        <div className="inline-flex flex-wrap justify-center gap-14 bg-white/[0.06] border border-white/[0.12] rounded-2xl px-12 py-10 mb-10">
          {/* Setup */}
          <div className="text-center">
            <span className="inline-block bg-white/[0.07] text-white/40 text-xs font-semibold px-3 py-1 rounded-full mb-3.5">
              ~120 MB · Windows 10/11
            </span>
            <h4 className="font-serif text-white text-lg mb-1.5">MedicalSoftx Инсталер</h4>
            <p className="text-white/50 text-sm mb-5">Целосен инсталер — апликација + SQL Server Express + база</p>
            <a
              href={SETUP_URL}
              className="inline-flex items-center gap-2 bg-[#1560BD] text-white font-semibold text-sm px-6 py-3 rounded-xl no-underline transition-all hover:bg-[#1152A8] hover:-translate-y-0.5"
            >
              <svg viewBox="0 0 24 24" width="16" height="16" fill="white" className="flex-shrink-0">
                <path d="M19 9h-4V3H9v6H5l7 7 7-7zm-8 2V5h2v6h1.17L12 13.17 9.83 11H11zm-6 7h14v2H5v-2z"/>
              </svg>
              Преземи инсталер (.exe)
            </a>
          </div>

          <div className="hidden lg:block w-px bg-white/[0.12] self-stretch" />

          {/* SQL */}
          <div className="text-center">
            <span className="inline-block bg-white/[0.07] text-white/40 text-xs font-semibold px-3 py-1 rounded-full mb-3.5">
              ~2 MB · SQL скрипта
            </span>
            <h4 className="font-serif text-white text-lg mb-1.5">Скрипта за база</h4>
            <p className="text-white/50 text-sm mb-5">За постоечки SQL Server — рачно поставување</p>
            <a
              href={SQL_URL}
              className="inline-flex items-center gap-2 bg-white/[0.12] border border-white/20 text-white font-semibold text-sm px-6 py-3 rounded-xl no-underline transition-all hover:bg-white/20 hover:-translate-y-0.5"
            >
              <svg viewBox="0 0 24 24" width="16" height="16" fill="white" className="flex-shrink-0">
                <path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
              </svg>
              Преземи .sql скрипта
            </a>
          </div>
        </div>

        <p className="text-white/35 text-sm max-w-md mx-auto leading-relaxed">
          ⚡ Главниот инсталер автоматски ги поставува SQL Server Express и базата.
          .sql скриптата е потребна само ако веќе имате SQL Server инсталиран.
        </p>
      </div>
    </section>
  )
}
