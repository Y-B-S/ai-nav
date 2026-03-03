#!/usr/bin/env node
/**
 * 用 GitHub Search API 抓热门 AI 项目，更新 TrendingSection.tsx
 * 用法: node scripts/update-trending.js
 */

const https = require('https')
const fs = require('fs')
const path = require('path')

const COMPONENT_PATH = path.join(__dirname, '../components/TrendingSection.tsx')

// 可选：设置 GITHUB_TOKEN 环境变量提升速率限制
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

// 搜索最近 pushed、stars 多的 AI 相关项目
async function fetchTrendingAI() {
  const since = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
  const queries = [
    `topic:llm+pushed:>${since}&sort=stars&order=desc&per_page=3`,
    `topic:ai-agent+pushed:>${since}&sort=stars&order=desc&per_page=3`,
  ]

  const results = []
  for (const q of queries) {
    const data = await fetchJSON(`https://api.github.com/search/repositories?q=${q}`)
    if (data.items) results.push(...data.items)
  }

  // 去重
  const seen = new Set()
  return results.filter(r => {
    if (seen.has(r.full_name)) return false
    seen.add(r.full_name)
    return true
  }).slice(0, 6)
}

function assignMeta(repos) {
  const icons = ['🤖', '🧠', '⚡', '🔧', '📦', '🌊']
  const categories = ['Agent', '效率', '编程', '创作', '研究', '效率']

  return repos.map((r, i) => {
    let badge = undefined
    if (r.stargazers_count > 50000) badge = 'hot'
    else if (r.stargazers_count < 5000) badge = 'new'

    const desc = (r.description || '暂无描述')
      .replace(/'/g, "\\'")
      .replace(/\n/g, ' ')
      .slice(0, 80)

    return {
      id: String(i + 1),
      name: r.name,
      repo: r.full_name,
      description: desc,
      category: categories[i],
      stars: r.stargazers_count,
      todayStars: 0,
      language: r.language || 'Unknown',
      icon: icons[i],
      badge,
      url: r.html_url,
    }
  })
}

function buildToolsArray(tools) {
  return tools.map(t => `  {
    id: '${t.id}',
    name: '${t.name.replace(/'/g, "\\'")}',
    repo: '${t.repo}',
    description: '${t.description}',
    category: '${t.category}',
    stars: ${t.stars},
    todayStars: ${t.todayStars},
    language: '${t.language}',
    icon: '${t.icon}',
    ${t.badge ? `badge: '${t.badge}' as const,` : ''}
    url: '${t.url}',
  }`).join(',\n')
}

async function main() {
  console.log('抓取 GitHub AI 热门项目...')
  const repos = await fetchTrendingAI()

  if (repos.length === 0) {
    console.error('未获取到任何项目，退出')
    process.exit(1)
  }

  console.log(`获取到 ${repos.length} 个项目`)
  const tools = assignMeta(repos)

  const today = new Date().toLocaleDateString('zh-CN', {
    timeZone: 'Asia/Shanghai',
    year: 'numeric', month: '2-digit', day: '2-digit'
  }).replace(/\//g, '-')

  let content = fs.readFileSync(COMPONENT_PATH, 'utf-8')

  content = content.replace(
    /const tools: Tool\[\] = \[[\s\S]*?\n\]/,
    `const tools: Tool[] = [\n${buildToolsArray(tools)}\n]`
  )

  content = content.replace(/\d{4}-\d{2}-\d{2}/, today)

  fs.writeFileSync(COMPONENT_PATH, content, 'utf-8')
  console.log(`✅ 更新完成，日期: ${today}`)
  tools.forEach(t => console.log(`  - ${t.repo} ⭐${t.stars}`))
}

main().catch(err => {
  console.error('❌ 失败:', err.message)
  process.exit(1)
})
