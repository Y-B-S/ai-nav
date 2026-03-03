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
    name: 'ollama',
    repo: 'ollama/ollama',
    description: 'Get up and running with Kimi-K2.5, GLM-5, MiniMax, DeepSeek, gpt-oss, Qwen, Gemm',
    category: 'Agent',
    stars: 163892,
    todayStars: 0,
    language: 'Go',
    icon: '🤖',
    badge: 'hot' as const,
    url: 'https://github.com/ollama/ollama',
  },
  {
    id: '2',
    name: 'transformers',
    repo: 'huggingface/transformers',
    description: '🤗 Transformers: the model-definition framework for state-of-the-art machine lea',
    category: '效率',
    stars: 157273,
    todayStars: 0,
    language: 'Python',
    icon: '🧠',
    badge: 'hot' as const,
    url: 'https://github.com/huggingface/transformers',
  },
  {
    id: '3',
    name: 'prompts.chat',
    repo: 'f/prompts.chat',
    description: 'f.k.a. Awesome ChatGPT Prompts. Share, discover, and collect prompts from the co',
    category: '编程',
    stars: 149806,
    todayStars: 0,
    language: 'HTML',
    icon: '⚡',
    badge: 'hot' as const,
    url: 'https://github.com/f/prompts.chat',
  },
  {
    id: '4',
    name: 'chatgpt-on-wechat',
    repo: 'zhayujie/chatgpt-on-wechat',
    description: 'CowAgent是基于大模型的超级AI助理，能主动思考和任务规划、访问操作系统和外部资源、创造和执行Skills、拥有长期记忆并不断成长。同时支持飞书、钉钉、企',
    category: '创作',
    stars: 41775,
    todayStars: 0,
    language: 'Python',
    icon: '🔧',
    
    url: 'https://github.com/zhayujie/chatgpt-on-wechat',
  },
  {
    id: '5',
    name: 'cherry-studio',
    repo: 'CherryHQ/cherry-studio',
    description: 'AI productivity studio with smart chat, autonomous agents, and 300+ assistants. ',
    category: '研究',
    stars: 40581,
    todayStars: 0,
    language: 'TypeScript',
    icon: '📦',
    
    url: 'https://github.com/CherryHQ/cherry-studio',
  },
  {
    id: '6',
    name: 'CopilotKit',
    repo: 'CopilotKit/CopilotKit',
    description: 'The Frontend for Agents & Generative UI. React + Angular',
    category: '效率',
    stars: 29132,
    todayStars: 0,
    language: 'TypeScript',
    icon: '🌊',
    
    url: 'https://github.com/CopilotKit/CopilotKit',
  }
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
