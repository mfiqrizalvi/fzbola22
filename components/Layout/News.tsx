'use client';
import { useEffect, useState, useCallback, useMemo } from 'react';
import axios from 'axios';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Component.module.css'

interface NewsItem {
  title: string;
  pubDate: string;
  link: string;
  content: string;
}

const NewsItemComponent = ({ item }: { item: NewsItem }) => {
  return (
    <div className={styles.news}>
      <div className={styles.newsitem}>
        <span>
      <Image
            className={styles.iconimg}
            src="/assets/img/news-reader.png"
            alt="Hot-News"
            width={14}
            height={14}
            priority
          />&nbsp; FZBOLA22
          </span>
        <p>{item.pubDate}</p>
      </div>
      <div className={styles.newstitle}>
        <Link href={item.link} target="_blank" rel="noopener noreferrer">
          <span dangerouslySetInnerHTML={{ __html: `${item.title}` }} />
        </Link>
      </div>
    </div>
  );
};

const LoadMoreButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <div>
      <button className={styles.button} onClick={onClick}>
        Show More
      </button>
    </div>
  );
};

const SeeLessButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <div>
      <button className={styles.button} onClick={onClick}>
        Show Less
      </button>
    </div>
  );
};

const News = () => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [visibleNewsCount, setVisibleNewsCount] = useState(5); 

  const fetchNews = async (): Promise<void> => {
    try {
      const response = await axios.get(
        process.env.NEXT_PUBLIC_RSS_CON as string,
        {
          params: {
            rss_url: process.env.NEXT_PUBLIC_RSS_URL,
            api_key: process.env.NEXT_PUBLIC_RSS_KEY,
          },
        }
      );
      setNews(response.data.items);
      setLoading(false);
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError('An unknown error occurred');
      }
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  const handleLoadMore = useCallback(() => {
    setVisibleNewsCount(visibleNewsCount + 5); 
  }, [visibleNewsCount]);

  const handleSeeLess = useCallback(() => {
    setVisibleNewsCount(5);
  }, []);

  const memoizedNews = useMemo(() => news.slice(0, visibleNewsCount), [news, visibleNewsCount]);

  return (
    <>
      <div className={styles.menuh}>
        <Image
          className={styles.iconh}
          src="/assets/img/news.webp"
          alt="Football News"
          width={14}
          height={14}
          priority
        />
        <span>FOOTBALL NEWS</span>
      </div>
      <div className={styles.spacenews}>
        {loading ? (
          <p className={styles.footcol}>Loading...</p>
        ) : (
          <div>
            {memoizedNews.map((item) => (
              <NewsItemComponent key={item.link} item={item} />
            ))}
            {news.length > visibleNewsCount && (
              <LoadMoreButton onClick={handleLoadMore} />
            )}
            {visibleNewsCount > 5 && (
              <SeeLessButton onClick={handleSeeLess} />
            )}
          </div>
        )}
        {error && <p>Error: {error}</p>}
        <p>Sourced from Google News</p>
      </div>
    </>
  );
};

export default News;