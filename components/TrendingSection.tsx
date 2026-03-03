'use client'

import { motion } from 'framer-motion'
import { Star, Fire, Sparkle } from '@phosphor-icons/react'
import { useState } from 'react'

interface Tool {
  id: string
  name: string
  repo: string
  description: string
  category: string
  stars: number
  todayStars: number
  language: string
  icon: string
  badge?: 'hot' | 'new' | 'affiliate'
  url: string
}

const tools: Tool[] = [
  {
    id: '1',
    name: 'wifi-densepose',
    repo: 'ruvnet/wifi-densepose',
    description: 'WiFi 信号变身人体姿态检测器，实时监测生命体征和位置，无需摄像头，保护隐私。Rust 实现。',
    category: '效率',
    stars: 20916,
    todayStars: 5080,
    language: 'Rust',
    icon: '📡',
    badge: 'hot',
    url: 'https://github.com/ruvnet/wifi-densepose',
  },
  {
    id: '2',
    name: 'airi',
    repo: 'moeru-ai/airi',
    description: '自托管 AI 伴侣，支持实时语音对话、玩 Minecraft/Factorio，Web/macOS/Windows 全平台。',
    category: 'Agent',
    stars: 21235,
    todayStars: 1425,
    language: 'TypeScript',
    icon: '🧸',
    badge: 'hot',
    url: 'https://github.com/moeru-ai/airi',
  },
  {
    id: '3',
    name: 'Prompt Engineering Tutorial',
    repo: 'anthropics/prompt-eng-interactive-tutorial',
    description: 'Anthropic 官方出品的交互式 Prompt 工程教程，Jupyter Notebook 形式，边学边练。',
    category: '编程',
    stars: 31328,
    todayStars: 60,
    language: 'Jupyter Notebook',
    icon: '📚',
    badge: 'new',
    url: 'https://github.com/anthropics/prompt-eng-interactive-tutorial',
  },
  {
    id: '4',
    name: 'ruflo',
    repo: 'ruvnet/ruflo',
    description: 'Claude 专属 Agent 编排平台，支持多 Agent 协作、分布式 Swarm 智能、RAG 集成，企业级架构。',
    category: 'Agent',
    stars: 17848,
    todayStars: 821,
    language: 'TypeScript',
    icon: '🌊',
    badge: 'hot',
    url: 'https://github.com/ruvnet/ruflo',
  },
  {
    id: '5',
    name: 'OpenSandbox',
    repo: 'alibaba/OpenSandbox',
    description: '阿里巴巴开源的 AI 应用沙箱平台，支持多语言 SDK、Docker/K8s 运行时，适合 Coding Agent、RL 训练。',
    category: '编程',
    stars: 3968,
    todayStars: 982,
    language: 'Python',
    icon: '📦',
    badge: 'hot',
    url: 'https://github.com/alibapenSandbox',
  },
  {
    id: '6',
    name: 'markitdown',
    repo: 'microsoft/markitdown',
    description: '微软出品，把 PDF、Word、Excel、PPT 等各种文件一键转成 Markdown，AI 处理文档的神器。',
    category: '效率',
    stars: 89457,
    todayStars: 646,
    language: 'Python',
    icon: '📄',
    badge: 'affiliate',
    url: 'https://github.com/microsoft/markitdown',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
}

function ToolCard({ tool }: { tool: Tool }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.a
      href={tool.url}
      target="_blank"
      rel="noopener noreferrer"
      variants={itemVariants}
      whileHover={{ y: -4 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative"
    >
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-500/10 to-slate-600/10 opacity-0 group-hover:opacity-100 transition-smooth blur-xl" />
      
      <div className="relative rounded-2xl bg-slate-800/30 border border-slate-700/30 p-6 backdrop-blur-sm transition-smooth hover:border-emerald-500/30 hover:bg-slate-800/50">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-start gap-3 flex-1">
            <div className="text-3xl">{tool.icon}</div>
            <div className="flex-1">
              <h3 className="font-semibold text-slate-100 group-hover:text-emerald-400 transition-smooth">
                {tool.name}
              </h3>
              <p className="text-xs text-slate-500 mt-1">{tool.repo}</p>
            </div>
          </div>
          {tool.badge && (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className={`text-xs font-medium px-2 py-1 rounded-lg whitespace-nowrap ${
                tool.badge === 'hot'
                  ? 'bg-red-500/20 text-red-300'
                  : tool.badge === 'new'
                  ? 'bg-emerald-500/20 text-emerald-300'
                  : 'bg-amber-500/20 text-amber-300'
              }`}
            >
              {tool.badge === 'hot' && '🔥 热门'}
              {tool.badge === 'new' && '✨ 新'}
              {tool.badge === 'affiliate' && '💰 联盟'}
            </motion.div>
          )}
        </div>

        {/* Description */}
        <p className="text-sm text-slate-400 leading-relaxed mb-4 line-clamp-2">
          {tool.description}
        </p>

        {/* Footer */}
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
    </motion.a>
  )
}

export function TrendingSection() {
  return (
    <section id="trending" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <Fire size={24} className="text-emerald-500" />
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              GitHub 今日热榜
            </h2>
            <motion.span
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-xs bg-emerald-500/20 text-emerald-300 px-3 py-1 rounded-full"
            >
              2026-03-03
            </motion.span>
          </div>
          <p className="text-slate-400">
            实时追踪全球开发者最关注的 AI 项目
          </p>
        </motion.div>

        {/* Tools grid */}
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
