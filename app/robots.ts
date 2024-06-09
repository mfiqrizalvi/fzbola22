import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  const baseUrl= "https://fzbola22.online"  
  return {
    rules: {
      userAgent: '*',
      allow: ['/', '/stream', '/stream/watch/*'],
      disallow: '/stream/watch$', 
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}