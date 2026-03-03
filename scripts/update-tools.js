#!/usr/bin/env node
/**
 * 用 GitHub Search API 抓热门 AI 项目，更新 lib/tools.ts 的 trending 数据
 * 用法: node scripts/update-tools.js
 */

const https = require('https')
const fs = require('fs')
const path = require('path')

const TOOLS_PATH = path.join(__dirname, '../lib/tools.ts')
const TOKEN = process.env.GITHUB_TOKEN || ''

function fetchJSON(url) {
  return new Promise((resolve, reject) => {
    const headers = {
      'User-Agent': 'ai-nav-bot',
      'Accept': 'application/vnd.github.v3+json',
    }
    if (TOKEN) headers['Authorization'] = `token ${TOKEN}`
    const req = https.get(url, { headers }, (res) => {
      let data = ''
      res.on('data', chunk => data += chunk)
      res.on('end', () => {
        try { resolve(JSON.parse(data)) }
        catch (e) { reject(new Error('JSON parse error: ' + data.slice(0, 200))) }
      })
    })
    req.on('error', reject)
    req.setTimeout(15000, () => { req.destroy(); reject(new Error('timeout')) })
  })
}

async function fetchTrendingAI() {
  const since = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
  const queries = [
    `topic:llm+pushed:>${since}&sort=stars&order=desc&per_page=4`,
    `topic:ai-agent+pushed:>${since}&sort=stars&order=desc&per_page=4`,
  ]
  const results = []
  for (const q of queries) {
    const data = await fetchJSON(`https://api.github.com/search/repositories?q=${q}`)
    if (data.items) results.push(...data.items)
  }
  const seen = new Set()
  return results.filter(r => {
    if (seen.has(r.full_name)) return false
    seen.add(r.full_name)
    return true
  }).slice(0, 6)
}

const ICONS = ['🤖', '🧠', '⚡', '🔧', '📦', '🌊']
const CATEGORIES = ['Agent', '效率', '编程', '创作', '研究', '效率']

function slugify(name) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
}

function buildToolEntry(r, i) {
  const badge = r.stargazers_count > 50000 ? "'hot'" : r.stargazers_count < 5000 ? "'new'" : 'undefined'
  const desc = (r.description || '暂无描述').replace(/'/g, "\\'").replace(/\n/g, ' ').slice(0, 80)
  const slug = slugify(r.name)
  return `  {
    id: '${i + 1}',
    name: '${r.name.replace(/'/g, "\\'")}',
    slug: '${slug}',
    repo: '${r.full_name}',
    description: '${desc}',
    longDescription: '${desc}',
    category: '${CATEGORIES[i]}',
    stars: ${r.stargazers_count},
    todayStars: 0,
    language: '${r.language || 'Unknown'}',
    icon: '${ICONS[i]}',
    ${badge !== 'undefined' ? `badge: ${badge} as const,` : ''}
    url: '${r.html_url}',
    tags: ['AI', '开源', '${r.language || 'Unknown'}'],
  }`
}

async function main() {
  console.log('抓取 GitHub AI 热门项目...')
  const repos = await fetchTrendingAI()
  if (repos.length === 0) { console.error('未获取到项目'); process.exit(1) }
  console.log(`获取到 ${repos.length} 个项目`)

  const toolsArray = repos.map((r, i) => buildToolEntry(r, i)).join(',\n')

  const content = `export interface Tool {
  id: string
  name: string
  slug: string
  repo: string
  description: string
  longDescription: string
  category: string
  stars: number
  todayStars: number
  language: string
  icon: string
  badge?: 'hot' | 'new' | 'affiliate'
  url: string
  affiliateUrl?: string
  tags: string[]
}

// 自动更新于 ${new Date().toLocaleDateString('zh-CN', { timeZone: 'Asia/Shanghai' })}
export const tools: Tool[] = [
${toolsArray}
]

export function getToolBySlug(slug: string): Tool | undefined {
  return tools.find(t => t.slug === slug)
}

export function getAllSlugs(): string[] {
  return tools.map(t => t.slug)
}
`

  fs.writeFileSync(TOOLS_PATH, content, 'utf-8')
  console.log('✅ lib/tools.ts 更新完成')
  repos.forEach((r, i) => console.log(`  - ${r.full_name} ⭐${r.stargazers_count}`))
}

main().catch(err => {
  console.error('❌ 失败:', err.message)
  process.exit(1)
})
