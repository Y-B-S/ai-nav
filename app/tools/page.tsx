'use client'

import { tools, getPaidTools, CATEGORIES } from '@/lib/tools'
import Link from 'next/link'
import { useState, useMemo } from 'react'

const PRICING_LABELS: Record<string, string> = {
  free: '免费',
  freemium: '免费+付费',
  paid: '付费',
}

const PRICING_COLORS: Record<string, string> = {
  free: 'bg-emerald-500/20 text-emerald-300',
  freemium: 'bg-blue-500/20 text-blue-300',
  paid: 'bg-amber-500/20 text-amber-300',
}

export default function ToolsPage() {
  const paidTools = getPaidTools()
  const openSourceTools = tools.filter(t => t.badge !== 'affiliate')
  const [search, setSearch] = useState('')
  const [activeCategory, setActiveCategory] = useState<string>('全部')

  const filtered = useMemo(() => {
    return openSourceTools.filter(t => {
      const matchCat = activeCategory === '全部' || t.category === activeCategory
      const q = search.toLowerCase()
      const matchSearch = !q || t.name.toLowerCase().includes(q) || t.description.toLowerCase().includes(q) || t.tags.some(tag => tag.toLowerCase().includes(q))
      return matchCat && matchSearch
    })
  }, [search, activeCategory])

  const categories = ['全部', ...CATEGORIES]

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="max-w-7xl mx-auto px-6 py-20">

        {/* Header */}
        <div className="mb-10">
          <Link href="/" className="text-sm text-slate-500 hover:text-emerald-400 transition-colors mb-6 inline-block">← 返回首页</Link>
          <h1 className="text-4xl font-bold tracking-tight mb-3">AI 工具大全</h1>
          <p className="text-slate-400">共收录 {tools.length} 个工具，每日自动更新</p>
        </div>

        {/* 搜索框 */}
        <div className="relative mb-8">
          <input
            type="text"
            placeholder="搜索工具名称、功能、标签..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full max-w-xl px-5 py-3 pl-11 rounded-xl bg-slate-800/50 border border-slate-700/50 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-emerald-500/50 transition-colors"
          />
          <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>

        {/* 分类筛选 */}
        <div className="flex flex-wrap gap-2 mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-sm px-4 py-1.5 rounded-full border transition-colors ${
                activeCategory === cat
                  ? 'bg-emerald-500 border-emerald-500 text-slate-950 font-semibold'
                  : 'border-slate-700 text-slate-400 hover:border-emerald-500/50 hover:text-emerald-400'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 精选推荐（仅全部分类时显示） */}
        {activeCategory === '全部' && !search && (
          <div className="mb-14">
            <div className="flex items-center gap-3 mb-6 border-b border-slate-800 pb-3">
              <h2 className="text-lg font-semibold text-amber-400">精选推荐</h2>
              <span className="text-xs bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded-full">联盟合作</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {paidTools.map(tool => (
                <Link key={tool.slug} href={`/tools/${tool.slug}`}
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
                    <span className="text-xs bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded-full whitespace-nowrap">推荐</span>
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
        )}

        {/* 工具列表 */}
        {filtered.length === 0 ? (
          <div className="text-center py-20 text-slate-500">
            没有找到匹配的工具，换个关键词试试
          </div>
        ) : (
          <div>
            {activeCategory === '全部' && !search ? (
              // 按分类分组展示
              CATEGORIES.map(cat => {
                const catTools = filtered.filter(t => t.category === cat)
                if (catTools.length === 0) return null
                return (
                  <div key={cat} className="mb-14">
                    <div className="flex items-center justify-between mb-6 border-b border-slate-800 pb-3">
                      <h2 className="text-lg font-semibold text-emerald-400">{cat}</h2>
                      <span className="text-xs text-slate-500">{catTools.length} 个工具</span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                      {catTools.map(tool => <ToolCard key={tool.slug} tool={tool} />)}
                    </div>
                  </div>
                )
              })
            ) : (
              // 搜索或筛选结果平铺
              <div>
                <p className="text-sm text-slate-500 mb-6">找到 {filtered.length} 个工具</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {filtered.map(tool => <ToolCard key={tool.slug} tool={tool} />)}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </main>
  )
}

function ToolCard({ tool }: { tool: ReturnType<typeof getPaidTools>[0] }) {
  return (
    <Link href={`/tools/${tool.slug}`}
      className="group rounded-2xl bg-slate-800/30 border border-slate-700/30 p-6 hover:border-emerald-500/30 hover:bg-slate-800/50 transition-all duration-300"
    >
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-start gap-3">
          <span className="text-2xl">{tool.icon}</span>
          <div>
            <h3 className="font-semibold group-hover:text-emerald-400 transition-colors">{tool.name}</h3>
            <p className="text-xs text-slate-500 mt-0.5">{tool.language}</p>
          </div>
        </div>
        <div className="flex flex-col items-end gap-1">
          {tool.badge === 'hot' && <span className="text-xs bg-red-500/20 text-red-300 px-2 py-0.5 rounded-full">热门</span>}
          {tool.badge === 'new' && <span className="text-xs bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded-full">新</span>}
          {tool.pricing && (
            <span className={`text-xs px-2 py-0.5 rounded-full ${PRICING_COLORS[tool.pricing]}`}>
              {PRICING_LABELS[tool.pricing]}
            </span>
          )}
        </div>
      </div>
      <p className="text-sm text-slate-400 line-clamp-2 leading-relaxed">{tool.description}</p>
      <div className="mt-4 flex items-center justify-between">
        <div className="flex flex-wrap gap-2">
          {tool.tags.slice(0, 2).map(tag => (
            <span key={tag} className="text-xs bg-slate-700/50 text-slate-400 px-2 py-0.5 rounded-md">{tag}</span>
          ))}
        </div>
        {tool.stars > 0 && (
          <span className="text-xs text-amber-400">★ {(tool.stars / 1000).toFixed(1)}k</span>
        )}
      </div>
    </Link>
  )
}
