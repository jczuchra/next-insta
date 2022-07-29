import { useContext } from 'react';
import Image from 'next/image';
import { AppContext, UPDATE_VALUE } from '@context/AppContext';
import CommentSection from './shared/CommentSection';
import PostHeader from './shared/PostHeader';
import { PostProps } from './types';

const Post = ({
  img = 'https://placekitten.com/600/600',
  author = { username: '' },
  description,
  place,
  liked,
  saved,
  likes,
  date,
}: PostProps) => {
  const { dispatch } = useContext(AppContext);
  return (
    <div className='max-w-[480px] md:max-w-[615px] h-auto mt-6 border border-gray2 rounded-[3px] bg-white'>
      <PostHeader
        username={author.username}
        avatar={author.avatar}
        bio={place}
      />
      <div
        className='relative h-[780px] w-full'
        onClick={() =>
          dispatch({
            type: UPDATE_VALUE,
            payload: { showPostModal: true },
          })
        }>
        <Image
          className='cursor-pointer'
          layout='fill'
          objectFit='contain'
          src={img}
        />
      </div>
      <CommentSection liked={liked} saved={saved} likes={likes} />
    </div>
  );
};

export default Post;
