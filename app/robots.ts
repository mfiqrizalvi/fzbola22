import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  const baseUrl= "https://fzbola22.online"  
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/watch/*', 
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}