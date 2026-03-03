import { getToolBySlug as getToolBySlugEn, getAllSlugs as getAllSlugsEn } from '@/lib/tools-en'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Metadata } from 'next'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getAllSlugsEn().map(slug => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const tool = getToolBySlugEn(slug)
  if (!tool) return {}
  return {
    title: `${tool.name} Review & Alternatives | AICurate`,
    description: tool.description,
    keywords: [tool.name, ...tool.tags, 'AI tools', 'AI directory'].join(','),
    openGraph: {
      title: `${tool.name} | AICurate`,
      description: tool.description,
      type: 'article',
    },
  }
}

export default async function EnToolPage({ params }: Props) {
  const { slug } = await params
  const tool = getToolBySlugEn(slug)
  if (!tool) notFound()

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="max-w-3xl mx-auto px-6 py-20">
        <nav className="flex items-center gap-2 text-sm text-slate-500 mb-10">
          <Link href="/en" className="hover:text-emerald-400 transition-colors">Home</Link>
          <span>/</span>
          <Link href="/en/tools" className="hover:text-emerald-400 transition-colors">All Tools</Link>
          <span>/</span>
          <span className="text-slate-300">{tool.name}</span>
        </nav>

        <div className="mb-10">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-5xl">{tool.icon}</span>
            <div>
              <h1 className="text-3xl font-bold tracking-tight">{tool.name}</h1>
              <p className="text-slate-500 text-sm mt-1">{tool.repo}</p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-3 mt-6">
            {tool.badge && (
              <span className={`text-xs font-medium px-3 py-1 rounded-full ${
                tool.badge === 'hot' ? 'bg-red-500/20 text-red-300' :
                tool.badge === 'new' ? 'bg-emerald-500/20 text-emerald-300' :
                'bg-amber-500/20 text-amber-300'
              }`}>
                {tool.badge === 'hot' ? 'Trending' : tool.badge === 'new' ? 'New' : 'Recommended'}
              </span>
            )}
            <span className="text-xs bg-slate-800 text-slate-400 px-3 py-1 rounded-full">{tool.language}</span>
            <span className="text-xs bg-slate-800 text-slate-400 px-3 py-1 rounded-full">{tool.category}</span>
            {tool.stars > 0 && (
              <span className="text-xs text-amber-400">★ {(tool.stars / 1000).toFixed(1)}k stars</span>
            )}
          </div>
        </div>

        <div className="rounded-2xl bg-slate-800/30 border border-slate-700/30 p-8 mb-8">
          <h2 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">About</h2>
          <p className="text-slate-200 leading-relaxed text-lg">{tool.longDescription}</p>
        </div>

        <div className="mb-8">
          <h2 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-3">Tags</h2>
          <div className="flex flex-wrap gap-2">
            {tool.tags.map(tag => (
              <span key={tag} className="text-sm bg-slate-800/50 border border-slate-700/30 text-slate-300 px-3 py-1 rounded-lg">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="flex gap-4">
          <a
            href={tool.affiliateUrl || tool.url}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="flex-1 text-center bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold py-3 px-6 rounded-xl transition-colors"
          >
            {tool.badge === 'affiliate' ? 'Try for Free' : 'Visit Website'}
          </a>
          <Link
            href="/en/tools"
            className="px-6 py-3 rounded-xl border border-slate-700 text-slate-400 hover:border-emerald-500/50 hover:text-emerald-400 transition-colors"
          >
            More Tools
          </Link>
        </div>

        {tool.badge === 'affiliate' && (
          <p className="mt-4 text-xs text-slate-600">
            * This page contains affiliate links. We may earn a commission if you purchase through our link, at no extra cost to you.
          </p>
        )}
      </div>
    </main>
  )
}
