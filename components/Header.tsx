'use client'

import { motion } from 'framer-motion'
import { MagnifyingGlass, CaretDown } from '@phosphor-icons/react'
import { useState } from 'react'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-40 backdrop-blur-xl bg-slate-950/80 border-b border-slate-800/50"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="text-2xl font-bold tracking-tight"
        >
          <span className="bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">
            AI
          </span>
          <span className="text-slate-300">导航</span>
        </motion.div>

        <nav className="hidden md:flex items-center gap-8">
          {['今日精选', '工具库', '热门趋势'].map((item) => (
            <motion.a
              key={item}
              href={`#${item}`}
              whileHover={{ color: '#10b981' }}
              className="text-sm text-slate-400 transition-smooth hover:text-emerald-500"
            >
              {item}
            </motion.a>
          ))}
        </nav>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="hidden md:flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm font-medium transition-smooth hover:bg-emerald-500/20 hover:border-emerald-500/50"
        >
          提交工具
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-slate-800 transition-smooth"
        >
          <CaretDown size={20} />
        </motion.button>
      </div>
    </motion.header>
  )
}
