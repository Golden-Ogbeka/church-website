import LoadingIndicator from '@/common/LoadingIndicator/LoadingIndicator';
import { useAppSelector } from '@/store/hooks';
import React from 'react';
import PlayIcon from '@/assets/svgs/home/play-icon.svg';
import Image from 'next/image';
import { getYoutubeLink } from '@/functions/stringManipulations';
import { useDraggable } from 'react-use-draggable-scroll';
import Link from 'next/link';
import Button from '@/common/Button';

const WorshipExperienceSection = ({ showButton = false }: { showButton?: boolean }) => {
  const { videos, loading } = useAppSelector((state) => state.youtubeVideos);
  const ref = React.useRef<any>(null);
  const { events } = useDraggable(ref);

  return (
    <section id='worship-experience' className='px-primary py-[93px]'>
      <h2 className='text-primary font-bold text-[30px] lg:text-[40px] text-center font-secondary  mb-[83px]'>
        Recent Worship Experience
      </h2>
      <div
        className='flex gap-10 overflow-x-auto max-w-full no-scroll-bar'
        ref={ref}
        {...events}
      >
        {loading ? (
          <LoadingIndicator />
        ) : videos && videos.length > 0 ? (
          videos.map((video) => (
            <div
              key={video.id}
              className='flex flex-col gap-[25px] text-center md:text-left max-w-screen-sm w-full md:min-w-[509px] md:max-w-[509px] '
            >
              <a
                style={{
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7),rgba(0, 0, 0, 0.7)), url(${video.snippet.thumbnails.standard?.url})`,
                }}
                href={getYoutubeLink(video.snippet.resourceId.videoId)}
                target='_blank'
                className='flex items-center justify-center w-full h-[316px] max-h-screen group bg-center bg-no-repeat bg-cover rounded-[20px]'
              >
                <Image
                  src={PlayIcon}
                  alt='Play'
                  className='group-hover:sepia duration-300'
                  width={95}
                  height={95}
                />
              </a>
              <div className=''>
                <p className='text-lg lg:text-[26px] font-bold text-primary mb-[10px] truncate'>
                  {video.snippet.title}
                </p>
                <p className='lg:text-xl font-medium'>
                  {new Date(video.snippet.publishedAt).toDateString()}
                </p>
              </div>
            </div>
          ))
        ) : (
          <p>No video found</p>
        )}
      </div>
      {showButton && (
        <div className='flex w-full justify-center'>
          <Link href='/messages'>
            <Button className='!w-[280px] mt-[59px]'>Recent Messages</Button>
          </Link>
        </div>
      )}
    </section>
  );
};

export default WorshipExperienceSection;
