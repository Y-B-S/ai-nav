'use client'

import { motion } from 'framer-motion'
import { Heart, GithubLogo, EnvelopeSimple } from '@phosphor-icons/react'

export function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="border-t border-slate-800/50 py-16 mt-20"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="text-xl font-bold mb-4">
              <span className="bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">
                AI
              </span>
              <span className="text-slate-300">导航</span>
            </div>
            <p className="text-sm text-slate-400">
              每日精选，省去你的筛选时间
            </p>
          </motion.div>

          {/* Links */}
          {[
            {
              title: '产品',
              links: ['工具库', '热门趋势', '提交工具'],
            },
            {
              title: '资源',
              links: ['关于我们', '博客', '联系我们'],
            },
            {
              title: '法律',
              links: ['隐私政策', '服务条款', 'Cookie 设置'],
            },
          ].map((col, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 * (i + 1) }}
              viewport={{ once: true }}
            >
              <h4 className="font-semibold text-slate-100 mb-4">{col.title}</h4>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link}>
                    <motion.a
                      href="#"
                      whileHover={{ x: 4, color: '#10b981' }}
                      className="text-sm text-slate-400 transition-smooth hover:text-emerald-500"
                    >
                      {link}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-slate-700/50 to-transparent mb-8" />

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <p className="text-sm text-slate-400">
            © 2026 AI导航 · 数据来源：GitHub Trending / ProductHunt
          </p>

          <div className="flex items-center gap-4">
            <motion.a
              href="#"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-lg bg-slate-800/50 border border-slate-700/50 text-slate-400 hover:text-emerald-400 transition-smooth"
            >
              <GithubLogo size={20} />
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-lg bg-slate-800/50 border border-slate-700/50 text-slate-400 hover:text-emerald-400 transition-smooth"
            >
              <EnvelopeSimple size={20} />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  )
}
