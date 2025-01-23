import { appAxios } from '@/api/axios';
import LoadingIndicator from '@/common/LoadingIndicator/LoadingIndicator';
import { sendCatchFeedback } from '@/functions/feedback';
import { AnnouncementType } from '@/types/types';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useDraggable } from 'react-use-draggable-scroll';

const AnnouncementSection = () => {
  const [data, setData] = useState<AnnouncementType[]>([]);
  const [loading, setLoading] = useState(true);
  const ref = React.useRef<any>(null);
  const { events } = useDraggable(ref);
  const router = useRouter();

  useEffect(() => {
    const getDevotional = async () => {
      try {
        setLoading(true);
        const response = await appAxios.get('/announcement?page=1');
        setData(response.data.data?.data);
      } catch (error) {
        sendCatchFeedback(error);
      } finally {
        setLoading(false);
      }
    };
    getDevotional();
  }, []);
  return (
    <section id='announcement' className='px-primary py-[100px]'>
      <h2 className='text-primary font-bold text-[30px] lg:text-[40px] text-center font-secondary  mb-[11px]'>
        Announcement
      </h2>
      <p className='text-lg lg:text-2xl text-center font-medium mb-[56px]'>
        Join us to celebrate our scheduled events
      </p>
      <div
        className='flex gap-[35px] overflow-x-auto max-w-full no-scroll-bar'
        ref={ref}
        {...events}
      >
        {loading ? (
          <LoadingIndicator />
        ) : data && data.length ? (
          data.map((item) => (
            <Image
              onClick={() => router.push('/announcement/' + item.id)}
              key={item.id}
              src={item.image}
              alt={item.title}
              width={500}
              height={500}
              className='!w-[526px] h-[368px] object-cover rounded-[10px] cursor-pointer'
            />
          ))
        ) : (
          <p>No announcement found </p>
        )}
      </div>
    </section>
  );
};

export default AnnouncementSection;
