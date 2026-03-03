'use client'

import { motion } from 'framer-motion'
import { MagnifyingGlass } from '@phosphor-icons/react'
import { useState } from 'react'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
}

export function Hero() {
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden pt-20 pb-32">
      {/* Ambient gradient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-slate-600/5 rounded-full blur-3xl" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-3xl mx-auto px-6 text-center"
      >
        {/* Update badge */}
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700/50 backdrop-blur-sm"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-sm text-slate-300">每日自动更新 · 今日已收录 127 款工具</span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight mb-6"
        >
          发现真正
          <br />
          <span className="bg-gradient-to-r from-emerald-400 via-emerald-500 to-emerald-600 bg-clip-text text-transparent">
            值得用
          </span>
          <br />
          的 AI 工具
        </motion.h1>

        {/* Subheading */}
        <motion.p
          variants={itemVariants}
          className="text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto mb-12"
        >
          每天从 GitHub、ProductHunt 精选最热门 AI 工具，中文介绍，省去你的筛选时间
        </motion.p>

        {/* Search bar */}
        <motion.div
          variants={itemVariants}
          className="relative max-w-xl mx-auto mb-16"
        >
          <div className="relative group">
            <input
              type="text"
              placeholder="搜索工具名称、功能、分类..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-6 py-4 pl-14 rounded-2xl bg-slate-800/50 border border-slate-700/50 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-emerald-500/50 focus:bg-slate-800/80 transition-smooth backdrop-blur-sm"
            />
            <MagnifyingGlass
              size={20}
              className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none"
            />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-500/0 via-emerald-500/0 to-emerald-500/0 group-focus-within:from-emerald-500/10 group-focus-within:via-emerald-500/5 group-focus-within:to-emerald-500/10 transition-smooth pointer-events-none" />
          </div>
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 rounded-xl bg-emerald-500 text-slate-950 font-semibold transition-smooth hover:bg-emerald-400 shadow-lg hover:shadow-emerald-500/20"
          >
            浏览工具库
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 rounded-xl bg-slate-800/50 border border-slate-700/50 text-slate-100 font-semibold transition-smooth hover:bg-slate-800 hover:border-slate-600/50"
          >
            提交工具
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  )
}
