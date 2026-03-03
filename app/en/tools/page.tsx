import { tools as enTools, getPaidTools, getOpenSourceTools } from '@/lib/tools-en'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Best AI Tools Directory 2026 | AICurate',
  description: 'Curated list of the best AI tools for productivity, writing, coding, and more. Updated daily.',
}

export default function EnToolsPage() {
  const paidTools = getPaidTools()
  const openSource = getOpenSourceTools()
  const categories = Array.from(new Set(openSource.map(t => t.category)))

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="mb-12">
          <Link href="/en" className="text-sm text-slate-500 hover:text-emerald-400 transition-colors mb-6 inline-block">
            ← Back to Home
          </Link>
          <h1 className="text-4xl font-bold tracking-tight mb-3">AI Tools Directory</h1>
          <p className="text-slate-400">{enTools.length} tools curated, updated daily</p>
        </div>

        {/* Affiliate tools */}
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-6 border-b border-slate-800 pb-3">
            <h2 className="text-lg font-semibold text-amber-400">Top Picks</h2>
            <span className="text-xs bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded-full">Recommended</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {paidTools.map(tool => (
              <Link
                key={tool.slug}
                href={`/en/tools/${tool.slug}`}
                className="group rounded-2xl bg-amber-500/5 border border-amber-500/20 p-6 hover:border-amber-500/40 hover:bg-amber-500/10 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">{tool.icon}</span>
            <div>
                      <h3 className="font-semibold group-hover:text-amber-400 transition-colors">{tool.name}</h3>
                      <p className="text-xs text-slate-500 mt-0.5">{tool.category}</p>
                    </div>
                  </div>
                  <span className="text-xs bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded-full whitespace-nowrap">Pick</span>
                </div>
                <p className="text-sm text-slate-400 line-clamp-2 leading-relaxed">{tool.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {tool.tags.slice(0, 3).map(tag => (
                    <span key={tag} className="text-xs bg-slate-700/50 text-slate-400 px-2 py-0.5 rounded-md">{tag}</span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Open source by category */}
        {categories.map(cat => (
          <div key={cat} className="mb-14">
            <h2 className="text-lg font-semibold text-emerald-400 mb-6 border-b border-slate-800 pb-3">{cat}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {openSource.filter(t => t.category === cat).map(tool => (
                <Link
                  key={tool.slug}
                  href={`/en/tools/${tool.slug}`}
                  className="group rounded-2xl bg-slate-800/30 border border-slate-700/30 p-6 hover:border-emerald-500/30 hover:bg-slate-800/50 transition-all duration-300"
                >
                  <div className="flex items-start gap-3 mb-3">
                    <span className="text-2xl">{tool.icon}</span>
                    <div>
                      <h3 className="font-semibold group-hover:text-emerald-400 transition-colors">{tool.name}</h3>
                      <p className="text-xs text-slate-500 mt-0.5">{tool.language}</p>
                    </div>
                  </div>
                  <p className="text-sm text-slate-400 line-clamp-2 leading-relaxed">{tool.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {tool.tags.slice(0, 3).map(tag => (
                      <span key={tag} className="text-xs bg-slate-700/50 text-slate-400 px-2 py-0.5 rounded-md">{tag}</span>
                    ))}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}
