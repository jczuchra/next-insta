import { useState, useEffect } from 'react';
import SvgIcon from '@components/SvgIcon';
import { boldSmallText, normalSmallText } from '@styles';
import { getTextWidth } from 'utils/client/helpers';
import useMessages from '../../useMessages';
import PostIcons from '../PostIcons';
import { CommentSectionProps } from './types';

const CommentSection = ({
  isModal = false,
  likes = 0,
  liked,
  saved,
}: CommentSectionProps) => {
  const [isLong, setIsLong] = useState(false);
  const viewCommentClass = `${normalSmallText} text-gray1 pt-1 `;
  const croppedTextClass = 'line-clamp-2';
  const sampleText =
    'I’m in my sixties, and I can still balance my entire body weight on one arm. That might seem impressive, but I know that ten years from now—when I’m in my seventies, a senior citizen — I’ll still be attempting to set all kinds of records and succeeding, just as I always have';
  useEffect(() => {
    setIsLong(getTextWidth(sampleText, normalSmallText) > 500);
  }, []);

  return (
    <div className='mt-auto'>
      <PostIcons liked={liked} saved={saved} />
      <div className='p-4'>
        <div className={boldSmallText}>
          {useMessages('likes', { count: likes })}
        </div>
        {!isModal && (
          <div className='pt-3 hidden md:block'>
            <div
              className={`${normalSmallText} ${
                isLong ? croppedTextClass : ''
              }`}>
              <span className={boldSmallText + 'mr-2'}>username</span>
              {sampleText}
            </div>
            {isLong && (
              <button
                onClick={() => setIsLong(false)}
                className={`${normalSmallText} cursor-pointer text-gray1`}>
                {useMessages('more')}
              </button>
            )}
          </div>
        )}
        {!isModal && (
          <div
            className={`${normalSmallText} pt-4 text-[#00376b] cursor-pointer hidden md:block`}>
            #iceman #wimhof #armbalance #onearmbandit #strong #happy #healthy
            #wimhofmethod
          </div>
        )}
        {!isModal && (
          <div className={viewCommentClass + 'cursor-pointer'}>
            {useMessages('viewAllComments', { count: 80 })}
          </div>
        )}
        <time className='text-[10px] font-size font-normal text-gray1 pt-1 uppercase leading-3 cursor-pointer'>
          {useMessages('hoursAgo', { count: 2 })}
        </time>
      </div>
      <div className='border-t border-gray2'>
        <div className='flex px-4 py-3 justify-between'>
          <div className='flex flex-grow'>
            <SvgIcon
              icon='EmojiOutline'
              className='w-7 h-7 mr-3 cursor-pointer '
            />
            <input
              placeholder={useMessages('addComment')}
              className={viewCommentClass + ' flex-grow'}
            />
          </div>
          <button className='text-sm font-semibold text-blue1'>
            {useMessages('post')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CommentSection;
