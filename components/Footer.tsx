import Link from 'next/link'

const productLinks = [
  { href: '#funkcii', label: 'Функции' },
  { href: '#sliki',   label: 'Слики' },
  { href: '#ceni',    label: 'Цени' },
  { href: '#prezemanje', label: 'Преземи' },
]

const supportLinks = [
  { href: '#kontakt', label: 'Контакт' },
  { href: '#',        label: 'Упатство за корисник' },
  { href: '#',        label: 'Системски барања' },
  { href: '#',        label: 'Честопрашувани прашања' },
]

export default function Footer() {
  return (
    <>
      <footer className="bg-[#0B1F3A] px-[5%] pt-14 pb-8 grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-10">
        <div>
          <Link href="/" className="inline-flex items-center gap-2.5 font-serif text-xl text-white no-underline mb-3">
            <div className="w-8 h-8 bg-[#1560BD] rounded-lg flex items-center justify-center flex-shrink-0">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="white">
                <path d="M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2zm1 14.5h-2v-5h2v5zm0-7h-2V7h2v2.5z"/>
              </svg>
            </div>
            Medical<span className="text-sky-300">Softx</span>
          </Link>
          <p className="text-white/40 text-sm leading-relaxed max-w-xs">
            Професионален софтвер за управување со клиника изграден за македонски медицински практики.
          </p>
        </div>

        <div>
          <h5 className="text-white text-xs font-semibold uppercase tracking-wider mb-3.5">Производ</h5>
          {productLinks.map(({ href, label }) => (
            <Link key={href + label} href={href} className="block text-white/45 text-sm no-underline mb-2 hover:text-white transition-colors">
              {label}
            </Link>
          ))}
        </div>

        <div>
          <h5 className="text-white text-xs font-semibold uppercase tracking-wider mb-3.5">Поддршка</h5>
          {supportLinks.map(({ href, label }) => (
            <Link key={label} href={href} className="block text-white/45 text-sm no-underline mb-2 hover:text-white transition-colors">
              {label}
            </Link>
          ))}
        </div>
      </footer>

      <div className="bg-[#0B1F3A] border-t border-white/[0.08] px-[5%] py-4 flex flex-col sm:flex-row justify-between items-center gap-2">
        <p className="text-white/30 text-xs">© {new Date().getFullYear()} MedicalSoftx. Сите права задржани.</p>
        <p className="text-white/30 text-xs">Направено за Северна Македонија 🇲🇰</p>
      </div>
    </>
  )
}
