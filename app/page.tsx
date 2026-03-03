import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { FeaturedPick } from '@/components/FeaturedPick'
import { StatsBar } from '@/components/StatsBar'
import { TrendingSection } from '@/components/TrendingSection'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <main className="relative bg-slate-950 text-slate-100 overflow-hidden">
      {/* Grain overlay */}
      <div className="grain" />

      <Header />
      <Hero />
      <FeaturedPick />
      <StatsBar />
      <TrendingSection />
      <Footer />
    </main>
  )
}
