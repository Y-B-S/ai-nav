import Link from 'next/link'
import { Metadata } from 'next'
import { getPaidTools, getOpenSourceTools } from '@/lib/tools-en'

export const metadata: Metadata = {
  title: 'AICurate — Best AI Tools, Curated Daily',
  description: 'Discover the best AI tools for productivity, writing, coding, and more. Curated daily from GitHub and ProductHunt.',
  keywords: 'AI tools, best AI tools, AI directory, AI productivity, AI writing, AI coding',
  metadataBase: new URL('https://aicurate.org'),
  openGraph: {
    title: 'AICurate — Best AI Tools, Curated Daily',
    description: 'Discover the best AI tools for productivity, writing, coding, and more.',
    type: 'website',
    url: 'https://aicurate.org',
  },
}

export default function EnHomePage() {
  const paidTools = getPaidTools()
  const openSource = getOpenSourceTools()

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      
      {/* Header */}
      <header className="sticky top-0 z-40 backdrop-blur-xl bg-slate-950/80 border-b border-slate-800/50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold tracking-tight">
            <span className="text-emerald-400">AI</span>
            <span className="text-slate-300">Curate</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/en/tools" className="text-sm text-slate-400 hover:text-emerald-400 transition-colors">All Tools</Link>
            <Link href="#picks" className="text-sm text-slate-400 hover:text-emerald-400 transition-colors">Top Picks</Link>
            <Link href="#trending" className="text-sm text-slate-400 hover:text-emerald-400 transition-colors">Trending</Link>
          </nav>
          <Link
            href="/en/tools"
            className="text-sm px-4 py-2 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/20 transition-colors"
          >
            Browse All
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20 pb-32">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom1/4 w-96 h-96 bg-slate-600/5 rounded-full blur-3xl" />
        </div>
        <div className="max-w-3xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700/50">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-sm text-slate-300">Updated daily · {openSource.length + paidTools.length} tools curated</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight mb-6">
            Find AI tools
            <br />
            <span className="text-emerald-400">worth using</span>
          </h1>

          <p className="text-lg text-slate-400 leading-relaxed max-w-2xl mb-12">
            We cut through the noise. Every tool here is hand-picked from GitHub and ProductHunt — with honest descriptions, no hype.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/en/tools"
              className="px-8 py-3 rounded-xl bg-emerald-500 text-slate-950 font-semibold hover:bg-emerald-400 transition-colors text-center"
            >
              Browse Tools
            </Link>
            <Link
              href="#picks"
              className="px-8 py-3 rounded-xl bg-slate-800/50 border border-slate-700/50 text-slate-100 font-semibold hover:bg-slate-800 transition-colors text-center"
            >
              Top Picks
            </Link>
          </div>
        </div>
      </section>

      {/* Top Picks (affiliate) */}
      <section id="picks" className="py-20 border-t border-slate-800/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <h2 className="text-3xl font-bold tracking-tight">Top Picks</h2>
              <span className="text-xs bg-amber-500/20 text-amber-300 px-3 py-1 rounded-full">Recommended</span>
            </div>
            <p className="text-slate-400">Paid tools worth every dollar — tested and curated.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {paidTools.map(tool => (
              <Link
                key={tool.slug}
                href={`/en/tools/${tool.slug}`}
                className="group rounded-2xl bg-amber-500/5 border border-amber-500/20 p-6 hover:border-amber-500/40 hover:bg-amber-500/10 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start gap-3">
                    <span className="text-3xl">{tool.icon}</span>
                    <div>
                      <h3 className="font-semibold group-hover:text-amber-400 transition-colors">{tool.name}</h3>
                      <p className="text-xs text-slate-500 mt-1">{tool.category}</p>
                    </div>
                  </div>
                  <span className="text-xs bg-amber-500/20 text-amber-300 px-2 py-1 rounded-lg">Pick</span>
                </div>
                <p className="text-sm text-slate-400 leading-relaxed line-clamp-2">{tool.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {tool.tags.slice(0, 3).map(tag => (
                    <span key={tag} className="text-xs bg-slate-700/50 text-slate-400 px-2 py-0.5 rounded-md">{tag}</span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Trending open source */}
      <section id="trending" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-3xl font-bold tracking-tight mb-2">Trending on GitHub</h2>
                <p className="text-slate-400">Most starred AI projects this week</p>
              </div>
              <Link href="/en/tools" className="text-sm text-emerald-400 hover:text-emerald-300 transition-colors">
                View all →
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {openSource.map(tool => (
              <Link
                key={tool.slug}
                href={`/en/tools/${tool.slug}`}
                className="group rounded-2xl bg-slate-800/30 border border-slate-700/30 p-6 hover:border-emerald-500/30 hover:bg-slate-800/50 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start gap-3">
                    <span className="text-3xl">{tool.icon}</span>
                    <div>
                      <h3 className="font-semibold group-hover:text-emerald-400 transition-colors">{tool.name}</h3>
                      <p className="text-xs text-slate-500 mt-1">{tool.repo}</p>
                    </div>
                  </div>
                  {tool.badge === 'hot' && (
                    <span className="text-xs bg-red-500/20 text-red-300 px-2 py-1 rounded-lg">Hot</span>
                  )}
                </div>
                <p className="text-sm text-slate-400 leading-relaxed line-clamp-2">{tool.description}</p>
                <div className="mt-4 flex items-center justify-between pt-4 border-t border-slate-700/30">
                  <span className="text-xs text-amber-400">★ {(tool.stars / 1000).toFixed(1)}k</span>
                  <span className="text-xs text-slate-500">{tool.language}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800/50 py-12 mt-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <span className="text-emerald-400 font-bold">AI</span>
            <span className="text-slate-300 font-bold">Curate</span>
            <p className="text-xs text-slate-500 mt-1">© 2026 AICurate · Data from GitHub & ProductHunt</p>
          </div>
          <div className="flex items-center gap-6 text-sm text-slate-500">
            <Link href="/en/tools" className="hover:text-emerald-400 transition-colors">All Tools</Link>
            <span>*Affiliate disclosure: we may earn commission on purchases</span>
          </div>
        </div>
      </footer>
    </main>
  )
}
