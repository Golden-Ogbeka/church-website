import { appAxios } from '@/api/axios';
import LoadingIndicator from '@/common/LoadingIndicator/LoadingIndicator';
import { sendCatchFeedback } from '@/functions/feedback';
import { EventType } from '@/types/types';
import React, { useEffect, useState } from 'react';
import EventCard from './EventCard';
import { useDraggable } from 'react-use-draggable-scroll';

const EventSection = () => {
  const [data, setData] = useState<EventType[]>([]);
  const [loading, setLoading] = useState(true);
  const ref = React.useRef<any>(null);
  const { events } = useDraggable(ref);

  useEffect(() => {
    const getDevotional = async () => {
      try {
        setLoading(true);
        const response = await appAxios.get('/event?page=1');
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
    <section id='events' className='event-bg px-primary pt-[90px] pb-[178px]'>
      <h2 className='text-primary font-bold text-[30px] lg:text-[40px] text-center font-secondary  mb-[11px]'>
        Our Upcoming Events
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
          data.map((item) => <EventCard key={item.id} event={item} />)
        ) : (
          <p>No event found </p>
        )}
      </div>
    </section>
  );
};

export default EventSection;
