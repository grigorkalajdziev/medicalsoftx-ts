import Navbar      from '@/components/Navbar'
import Hero        from '@/components/Hero'
import Mockup      from '@/components/Mockup'
import Features    from '@/components/Features'
import Screenshots from '@/components/Screenshots'
import Download    from '@/components/Download'
import Pricing     from '@/components/Pricing'
import Contact     from '@/components/Contact'
import Footer      from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Mockup />
        <Features />
        <Screenshots />
        <Download />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
