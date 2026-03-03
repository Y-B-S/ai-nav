import { getToolBySlug, getAllSlugs } from '@/lib/tools'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Metadata } from 'next'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getAllSlugs().map(slug => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const tool = getToolBySlug(slug)
  if (!tool) return {}
  return {
    title: `${tool.name} - AI工具介绍 | AI导航`,
    description: tool.description,
    keywords: [tool.name, ...tool.tags, 'AI工具', 'AI导航'].join(','),
    openGraph: {
      title: `${tool.name} | AI导航`,
      description: tool.description,
      type: 'article',
    },
  }
}

export default async function ToolPage({ params }: Props) {
  const { slug } = await params
  const tool = getToolBySlug(slug)
  if (!tool) notFound()

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="max-w-3xl mx-auto px-6 py-20">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-slate-500 mb-10">
          <Link href="/" className="hover:text-emerald-400 transition-colors">首页</Link>
          <span>/</span>
          <Link href="/tools" className="hover:text-emerald-400 transition-colors">工具大全</Link>
          <span>/</span>
          <span className="text-slate-300">{tool.name}</span>
        </nav>

        {/* Header */}
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
                {tool.badge === 'hot' ? '热门' : tool.badge === 'new' ? '新上线' : '联盟推荐'}
              </span>
            )}
            <span className="text-xs bg-slate-800 text-slate-400 px-3 py-1 rounded-full">{tool.language}</span>
            <span className="text-xs bg-slate-800 text-slate-400 px-3 py-1 rounded-full">{tool.category}</span>
            <span className="text-xs text-amber-400">★ {(tool.stars / 1000).toFixed(1)}k stars</span>
          </div>
        </div>

        {/* Description */}
        <div className="rounded-2xl bg-slate-800/30 border border-slate-700/30 p-8 mb-8">
          <h2 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">工具介绍</h2>
          <p className="text-slate-200 leading-relaxed text-lg">{tool.longDescription}</p>
        </div>

        {/* Tags */}
        <div className="mb-8">
          <h2 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-3">标签</h2>
          <div className="flex flex-wrap gap-2">
            {tool.tags.map(tag => (
              <span key={tag} className="text-sm bg-slate-800/50 border border-slate-700/30 text-slate-300 px-3 py-1 rounded-lg">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="flex gap-4">
          <a
            href={tool.affiliateUrl || tool.url}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="flex-1 text-center bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold py-3 px-6 rounded-xl transition-colors"
          >
            {tool.badge === 'affiliate' ? '免费试用' : '访问官网 / GitHub'}
          </a>
          <Link
            href="/tools"
            className="px-6 py-3 rounded-xl border border-slate-700 text-slate-400 hover:border-emerald-500/50 hover:text-emerald-400 transition-colors"
          >
            更多工具
          </Link>
        </div>

        {/* 联盟披露 */}
        {tool.badge === 'affiliate' && (
          <p className="mt-4 text-xs text-slate-600">
            * 本页面包含联盟链接，通过此链接购买我们可能获得佣金，不影响你的价格。
          </p>
        )}
      </div>
    </main>
  )
}
