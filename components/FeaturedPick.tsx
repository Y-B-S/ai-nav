'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from '@phosphor-icons/react'

export function FeaturedPick() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, margin: '-100px' }}
      className="py-20"
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          whileHover={{ borderColor: 'rgba(16, 185, 129, 0.3)' }}
          className="relative rounded-3xl overflow-hidden border border-slate-700/30 transition-smooth"
        >
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-800/50 via-slate-900/50 to-slate-950/50" />
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent" />

          {/* Content */}
          <div className="relative p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span className="text-xs font-medium text-emerald-400">编辑推荐</span>
              </motion.div>

              <h3 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                wifi-densepose
              </h3>

              <p className="text-lg text-slate-300 leading-relaxed mb-8">
                用普通 WiFi 信号实现实时人体姿态估计和生命体征监测，无需任何摄像头。今日 GitHub 最热，5080 stars/天，Rust 实现，颠覆性技术方向。
              </p>

              <motion.a
                href="https://github.com/ruvnet/wifi-densepose"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 4 }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-500 text-slate-950 font-semibold transition-smooth hover:bg-emerald-400"
              >
                查看项目
                <ArrowRight size={18} />
              </motion.a>
            </motion.div>

            {/* Visual element */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative h-64 md:h-80 rounded-2xl bg-gradient-to-br from-emerald-500/10 to-slate-600/10 border border-slate-700/30 flex items-center justify-center overflow-hidden"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                  className="w-32 h-32 rounded-full border-2 border-emerald-500/20 border-t-emerald-500"
                />
              </div>
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="relative text-6xl"
              >
                📡
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}
