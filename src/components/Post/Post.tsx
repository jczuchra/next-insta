import { useContext } from 'react';
import Image from 'next/image';
import { AppContext, UPDATE_VALUE } from '@utils';
import CommentSection from './shared/CommentSection';
import PostHeader from './shared/PostHeader';

const Post = () => {
  const { dispatch } = useContext(AppContext);
  return (
    <div className='max-w-[480px] md:max-w-[615px] h-auto mt-6 border border-[#dbdbdb] rounded-[3px] bg-white'>
      <PostHeader />
      <div className='relative h-[615px] w-full'>
        <Image
          className='cursor-pointer'
          onClick={() =>
            dispatch({
              type: UPDATE_VALUE,
              payload: { showPostModal: true },
            })
          }
          layout='fill'
          objectFit='contain'
          src='https://placekitten.com/600/600'
        />
      </div>
      <CommentSection />
    </div>
  );
};

export default Post;
