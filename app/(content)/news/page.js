import { DUMMY_NEWS } from '@/dummyNewData';
import NewsList from '@/components/newsList';

export default function NewsPage() {
  return (
    <>
      <h1>NewsPage</h1>
      <NewsList news={DUMMY_NEWS} />
    </>
  );
}
