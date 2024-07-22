import NewsList from '@/components/newsList';
import { getLatestNews } from '@/lib/news';

export default function LatestNewsPage() {
  const latestNews = getLatestNews();
  return (
    <>
      <h2>LatestNewsPage</h2>
      <NewsList news={latestNews} />
    </>
  );
}
