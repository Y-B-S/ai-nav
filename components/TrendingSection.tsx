'use client'

import { motion } from 'framer-motion'
import { Star, Fire } from '@phosphor-icons/react'
import { useState } from 'react'
import Link from 'next/link'
import { tools, Tool } from '../lib/tools'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
}

function ToolCard({ tool }: { tool: Tool }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div variants={itemVariants} whileHover={{ y: -4 }} className="group relative">
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-500/10 to-slate-600/10 opacity-0 group-hover:opacity-100 transition-all duration-300 blur-xl" />
      <div className="relative rounded-2xl bg-slate-800/30 border border-slate-700/30 p-6 backdrop-blur-sm transition-all duration-300 hover:border-emerald-500/30 hover:bg-slate-800/50">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-start gap-3 flex-1">
            <div className="text-3xl">{tool.icon}</div>
            <div className="flex-1">
              <Link
                href={`/tools/${tool.slug}`}
                className="font-semibold text-slate-100 group-hover:text-emerald-400 transition-colors hover:underline"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                {tool.name}
              </Link>
              <p className="text-xs text-slate-500 mt-1">{tool.repo}</p>
            </div>
          </div>
          {tool.badge && (
            <span className={`text-xs font-medium px-2 py-1 rounded-lg whitespace-nowrap ${
              tool.badge === 'hot' ? 'bg-red-500/20 text-red-300' :
              tool.badge === 'new' ? 'bg-emerald-500/20 text-emerald-300' :
              'bg-amber-500/20 text-amber-300'
            }`}>
              {tool.badge === 'hot' && '热门'}
              {tool.badge === 'new' && '新'}
              {tool.badge === 'affiliate' && '推荐'}
            </span>
          )}
        </div>

        <p className="text-sm text-slate-400 leading-relaxed mb-4 line-clamp-2">{tool.description}</p>

        <div className="flex items-center justify-between pt-4 border-t border-slate-700/30">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1 text-amber-400">
              <Star size={14} weight="fill" />
              <span className="text-xs font-mono">{(tool.stars / 1000).toFixed(1)}k</span>
            </div>
            <span className="text-xs text-slate-500">{tool.language}</span>
          </div>
          {tool.todayStars > 0 && (
            <motion.div
              animate={isHovered ? { x: 4 } : { x: 0 }}
              className="text-xs text-emerald-400 font-medium flex items-center gap-1"
            >
              <Fire size={12} />
              +{tool.todayStars}
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export function TrendingSection() {
  return (
    <section id="trending" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <Fire size={24} className="text-emerald-500" />
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">GitHub 今日热榜</h2>
            <span className="text-xs bg-emerald-500/20 text-emerald-300 px-3 py-1 rounded-full">
              每日更新
            </span>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-slate-400">实时追踪全球开发者最关注的 AI 项目</p>
            <Link href="/tools" className="text-sm text-emerald-400 hover:text-emerald-300 transition-colors">
              查看全部 →
            </Link>
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {tools.map((tool) => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
