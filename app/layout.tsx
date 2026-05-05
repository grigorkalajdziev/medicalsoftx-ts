import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'MedicalSoftx — Софтвер за управување со клиника',
  description: 'Професионален десктоп софтвер за управување со пациенти, фактури, дијагнози и извештаи. Направено за македонски клиники.',
  keywords: ['медицински софтвер', 'клиника', 'пациенти', 'фактури', 'македонија'],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="mk">
      <body className="text-slate-800 bg-white">{children}</body>
    </html>
  )
}
