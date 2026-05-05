import Link from 'next/link'

const navLinks = [
  { href: '#funkcii', label: 'Функции' },
  { href: '#sliki',   label: 'Слики' },
  { href: '#ceni',    label: 'Цени' },
  { href: '#kontakt', label: 'Контакт' },
]

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200/50 px-[5%] flex items-center justify-between h-17">
      <Link href="/" className="flex items-center gap-2.5 font-serif text-xl text-[#0B1F3A] no-underline">
        <div className="w-9 h-9 bg-[#1560BD] rounded-[9px] flex items-center justify-center flex-shrink-0">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="white">
            <path d="M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2zm1 14.5h-2v-5h2v5zm0-7h-2V7h2v2.5z"/>
          </svg>
        </div>
        Medical<span className="text-[#1560BD]">Softx</span>
      </Link>

      <ul className="hidden md:flex items-center gap-9 list-none">
        {navLinks.map(({ href, label }) => (
          <li key={href}>
            <Link href={href} className="text-slate-500 text-sm font-medium no-underline hover:text-[#1560BD] transition-colors">
              {label}
            </Link>
          </li>
        ))}
      </ul>

      <Link
        href="#prezemanje"
        className="bg-[#1560BD] text-white px-5 py-2 rounded-lg text-sm font-semibold no-underline hover:bg-[#0B1F3A] transition-colors"
      >
        Преземи
      </Link>
    </nav>
  )
}
