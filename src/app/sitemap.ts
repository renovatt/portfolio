import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://renovatt.dev.br',
      lastModified: new Date(),
    },
  ]
}
