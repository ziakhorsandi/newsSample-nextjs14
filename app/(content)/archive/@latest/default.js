import NewsList from '@/components/newsList';
import { getLatestNews } from '@/lib/news';

export default async function LatestNewsPage() {
  const latestNews = await getLatestNews();
  return (
    <>
      <h2>LatestNewsPage</h2>
      <NewsList news={latestNews} />
    </>
  );
}
