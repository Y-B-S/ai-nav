import { tools } from '@/lib/tools'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI 工具大全 | AI导航',
  description: '精选全网最热门 AI 工具，覆盖 Agent、效率、编程、创作等分类，每日自动更新。',
}

export default function ToolsPage() {
  const categories = Array.from(new Set(tools.map(t => t.category)))

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="mb-12">
          <Link href="/" className="text-sm text-slate-500 hover:text-emerald-400 transition-colors mb-6 inline-block">
            ← 返回首页
          </Link>
          <h1 className="text-4xl font-bold tracking-tight mb-3">AI 工具大全</h1>
          <p className="text-slate-400">共收录 {tools.length} 个工具，每日自动更新</p>
        </div>

        {categories.map(cat => (
          <div key={cat} className="mb-14">
            <h2 className="text-lg font-semibold text-emerald-400 mb-6 border-b border-slate-800 pb-3">{cat}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {tools.filter(t => t.category === cat).map(tool => (
                <Link
                  key={tool.slug}
                  href={`/tools/${tool.slug}`}
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
