import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://fzbola22.online";
  return [
    {
      url: `${baseUrl}`,
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/advertise`,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/terms-of-service`,
      priority: 0.5,
    }
  ]
}