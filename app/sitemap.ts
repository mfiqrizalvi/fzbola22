import { MetadataRoute } from "next";

export const revalidate = 10;
export const runtime = 'edge';

interface Item {
  id: string;
}

type ChangeFrequency = "daily" | "always" | "hourly" | "weekly" | "monthly" | "yearly" | "never";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://fzbola22.online";
  const apiURL = process.env.NEXT_PUBLIC_API_LIVE;

  try {
    const response = await fetch(`${apiURL}`);
    const data = await response.json();

    const dynamicUrls = data.length > 0 ? data.map((item: Item) => ({
      url: `${baseUrl}/watch/${item.id}`,
      priority: 0.5,
      changeFrequency: 'monthly' as ChangeFrequency,
    })) : [];

    const staticRoutes: MetadataRoute.Sitemap = [
      {
        url: `${baseUrl}`,
        priority: 1,
        changeFrequency: 'monthly' as ChangeFrequency,
      },
    ];

    return [ ...staticRoutes, ...dynamicUrls ];
  } catch (error) {
    console.error(error);
    return [];
  }
}