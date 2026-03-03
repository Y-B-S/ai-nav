import { getAllSlugs } from '@/lib/tools'

export default function sitemap() {
  const base = 'https://ai-nav-ruci.vercel.app'

  const toolPages = getAllSlugs().map(slug => ({
    url: `${base}/tools/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: 0.8,
  }))

  return [
    { url: base, lastModified: new Date(), changeFrequency: 'daily' as const, priority: 1 },
    { url: `${base}/tools`, lastModified: new Date(), changeFrequency: 'daily' as const, priority: 0.9 },
    ...toolPages,
  ]
}
