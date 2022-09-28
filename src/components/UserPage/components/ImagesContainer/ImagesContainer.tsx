import { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import promiseUtil from 'utils/client/promiseUtil';
import { PostsOutline, ReelsOutline, VideosOutline, TaggedOutline } from 'svg';
import { AppContext, UPDATE_VALUE } from '@context/AppContext';
import { ImagesTabProps } from './types';

const ImagesContainer = () => {
  const { dispatch } = useContext(AppContext);
  const [images, setImages] = useState([]);
  const [error, setError] = useState();

  const router = useRouter();

  useEffect(() => {
    promiseUtil
      .get(`/api/post/getProfilePosts?username=${router.query.name}`)
      .then((resp) => setImages(resp.data))
      .catch((err) => setError(err));
  }, []);

  return (
    <div className='max-w-[975px] mx-auto px-5'>
      <div className='flex border-t border-gray2 justify-center gap-[60px] '>
        <ImagesTab Img={PostsOutline} txt={'POSTS'} isSelected />
        <ImagesTab Img={ReelsOutline} txt={'REELS'} />
        <ImagesTab Img={VideosOutline} txt={'VIDEOS'} />
        <ImagesTab Img={TaggedOutline} txt={'TAGGED'} />
      </div>
      <div className='grid grid-cols-3 gap-[2px] md:gap-4 lg:gap-6 w-full'>
        {!error &&
          images.map((img) => (
            <Image
              onClick={() =>
                dispatch({
                  type: UPDATE_VALUE,
                  payload: { showPostModal: true, imgSrc: img.id },
                })
              }
              className='cursor-pointer'
              src={img.href}
              layout='intrinsic'
              width={293}
              height={293}
            />
          ))}
      </div>
    </div>
  );
};

const ImagesTab = ({ Img, txt, isSelected }: ImagesTabProps) => (
  <div
    className={`flex gap-2 items-center py-4 text-xs font-semibold tracking-[1px] text-gray1 -mt-[1px] ${
      isSelected ? 'border-t border-black1 text-black1' : ''
    }`}>
    <Img color={isSelected ? '#262626' : '#8e8e8e'} />
    <div>{txt}</div>
  </div>
);

export default ImagesContainer;
