export interface Feature {
  icon: string
  title: string
  desc: string
}

export interface Screenshot {
  emoji: string
  label: string
  sub: string
  bg: string
  img: string | null
}

export interface PricingPlan {
  name: string
  price: string
  period: string
  features: string[]
  cta: string
  href: string
  featured: boolean
}

export interface SidebarItem {
  icon: string
  label: string
  active?: boolean
}

export interface MockCard {
  label: string
  value: string
  sub: string
}

export interface ContactForm {
  ime: string
  prezime: string
  email: string
  predmet: string
  poraka: string
}
