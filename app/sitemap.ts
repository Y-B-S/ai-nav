import { getAllSlugs } from '@/lib/tools'
import { getAllSlugs as getAllSlugsEn } from '@/lib/tools-en'

export default function sitemap() {
  const cnBase = 'https://aitoolfind.cn'
  const enBase = 'https://aicurate.org'

  const cnToolPages = getAllSlugs().map(slug => ({
    url: `${cnBase}/tools/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: 0.8,
  }))

  const enToolPages = getAllSlugsEn().map(slug => ({
    url: `${enBase}/en/tools/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: 0.8,
  }))

  return [
    // 中文站
    { url: cnBase, lastModified: new Date(), changeFrequency: 'daily' as const, priority: 1 },
    { url: `${cnBase}/tools`, lastModified: new Date(), changeFrequency: 'daily' as const, priority: 0.9 },
    ...cnToolPages,
    // 英文站
    { url: `${enBase}/en`, lastModified: new Date(), changeFrequency: 'daily' as const, priority: 1 },
    { url: `${enBase}/en/tools`, lastModified: new Date(), changeFrequency: 'daily' as const, priority: 0.9 },
    ...enToolPages,
  ]
}
