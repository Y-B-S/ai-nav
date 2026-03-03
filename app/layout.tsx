import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'AI导航 - 每日精选最值得用的AI工具',
  description: '从 GitHub、ProductHunt 精选全网最热门 AI 工具。每天自动更新，中文介绍，帮你找到真正有用的 AI 工具。',
  keywords: 'AI工具,AI导航,ChatGPT,Claude,Midjourney,AI写作,AI编程',
  verification: {
    google: 'Ll2E874nkGCktcrgP-dlHN9GAOtdCoqkHRqTcpWbjDU',
  },
  metadataBase: new URL('https://aitoolfind.cn'),
  openGraph: {
    title: 'AI导航',
    description: '每日精选最值得用的AI工具',
    type: 'website',
    url: 'https://aitoolfind.cn',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <body className={`${geistSans.variable} ${geistMono.variable} bg-slate-950 text-slate-100 antialiased`}>
        {children}
      </body>
    </html>
  )
}
