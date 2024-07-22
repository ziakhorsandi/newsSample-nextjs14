'use client';
import { DUMMY_NEWS } from '@/dummyNewData';
import { notFound, useRouter } from 'next/navigation';

export default function InterceptedImagePage({ params }) {
  const newsSlug = params.slug;
  const newsItem = DUMMY_NEWS.find((item) => item.slug === newsSlug);

  const router = useRouter();

  if (!newsItem) {
    notFound();
  }
  return (
    <>
      <div className='modal-backdrop' onClick={router.back}></div>
      <dialog className='modal' open>
        <div className='fullscreen-image'>
          <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        </div>
      </dialog>
    </>
  );
}
