export default function robots() {
  const base = 'https://ai-nav-ruci.vercel.app'
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: `${base}/sitemap.xml`,
  }
}
