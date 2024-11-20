import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: ['/', '/projects', '/contact'],
      disallow: ['/profile', '/skills'],
    },
    sitemap: 'https://renovatt.dev.br/sitemap.xml',
  }
}
