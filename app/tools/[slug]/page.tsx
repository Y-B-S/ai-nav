import { getToolBySlug, getAllSlugs, tools } from '@/lib/tools'
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
    title: `${tool.name} 评测与替代品 | AI导航`,
    description: tool.description,
    keywords: [tool.name, ...tool.tags, 'AI工具', 'AI导航', '评测'].join(','),
    openGraph: {
      title: `${tool.name} | AI导航`,
      description: tool.description,
      type: 'article',
    },
  }
}

const PRICING_LABELS: Record<string, string> = {
  free: '完全免费',
  freemium: '免费 + 付费版',
  paid: '付费订阅',
}

const PRICING_COLORS: Record<string, string> = {
  free: 'bg-emerald-500/20 text-emerald-300',
  freemium: 'bg-blue-500/20 text-blue-300',
  paid: 'bg-amber-500/20 text-amber-300',
}

export default async function ToolPage({ params }: Props) {
  const { slug } = await params
  const tool = getToolBySlug(slug)
  if (!tool) notFound()

  const alternativeTools = tool.alternatives
    ? tool.alternatives.map(s => tools.find(t => t.slug === s)).filter(Boolean)
    : []

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
          <div className="flex items-center gap-4 mb-6">
       <span className="text-5xl">{tool.icon}</span>
            <div>
              <h1 className="text-3xl font-bold tracking-tight">{tool.name}</h1>
              <p className="text-slate-500 text-sm mt-1">{tool.repo}</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {tool.badge === 'hot' && <span className="text-xs bg-red-500/20 text-red-300 px-3 py-1 rounded-full">热门</span>}
            {tool.badge === 'new' && <span className="text-xs bg-emerald-500/20 text-emerald-300 px-3 py-1 rounded-full">新上线</span>}
            {tool.badge === 'affiliate' && <span className="text-xs bg-amber-500/20 text-amber-300 px-3 py-1 rounded-full">精选推荐</span>}
            {tool.pricing && (
              <span className={`text-xs px-3 py-1 rounded-full ${PRICING_COLORS[tool.pricing]}`}>
                {PRICING_LABELS[tool.pricing]}
              </span>
            )}
            <span className="text-xs bg-slate-800 text-slate-400 px-3 py-1 rounded-full">{tool.category}</span>
            <span className="text-xs bg-slate-800 text-slate-400 px-3 py-1 rounded-full">{tool.language}</span>
            {tool.stars > 0 && (
              <span className="text-xs text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full">
                ★ {(tool.stars / 1000).toFixed(1)}k stars
              </span>
            )}
          </div>
        </div>

        {/* 工具介绍 */}
        <div className="rounded-2xl bg-slate-800/30 border border-slate-700/30 p-8 mb-6">
          <h2 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">工具介绍</h2>
          <p className="text-slate-200 leading-relaxed text-lg">{tool.longDescription}</p>
        </div>

        {/* 定价 */}
        {tool.pricingDetail && (
          <div className="rounded-2xl bg-slate-800/30 border border-slate-700/30 p-6 mb-6">
            <h2 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-3">定价</h2>
            <p className="text-slate-200">{tool.pricingDetail}</p>
          </div>
        )}

        {/* 优缺点 */}
        {(tool.pros || tool.cons) && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {tool.pros && tool.pros.length > 0 && (
              <div className="rounded-2xl bg-emerald-500/5 border border-emerald-500/20 p-6">
                <h2 className="text-sm font-semibold text-emerald-400 uppercase tracking-wider mb-4">优点</h2>
                <ul className="space-y-2">
                  {tool.pros.map((pro, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
                      <span className="text-emerald-400 mt-0.5">+</span>
                      {pro}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {tool.cons && tool.cons.length > 0 && (
              <div className="rounded-2xl bg-red-500/5 border border-red-500/20 p-6">
                <h2 className="text-sm font-semibold text-red-400 uppercase tracking-wider mb-4">缺点</h2>
                <ul className="space-y-2">
                  {tool.cons.map((con, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
                      <span className="text-red-400 mt-0.5">-</span>
                      {con}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        {/* 标签 */}
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
        <div className="flex gap-4 mb-4">
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

        {tool.badge === 'affiliate' && (
          <p className="mb-10 text-xs text-slate-600">
            * 本页面包含联盟链接，通过此链接购买我们可能获得佣金，不影响你的价格。
          </p>
        )}

        {/* 替代品 */}
        {alternativeTools.length > 0 && (
          <div className="mt-10 pt-10 border-t border-slate-800/50">
            <h2 className="text-lg font-semibold mb-6">相似工具</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {alternativeTools.map(alt => alt && (
                <Link key={alt.slug} href={`/tools/${alt.slug}`}
                  className="group flex items-start gap-3 rounded-xl bg-slate-800/30 border border-slate-700/30 p-4 hover:border-emerald-500/30 transition-colors"
                >
                  <span className="text-2xl">{alt.icon}</span>
                  <div>
                    <p className="font-medium group-hover:text-emerald-400 transition-colors">{alt.name}</p>
                    <p className="text-xs text-slate-500 mt-0.5 line-clamp-2">{alt.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

      </div>
    </main>
  )
}
