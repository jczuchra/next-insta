import { useState } from 'react';
import {
  BookmarkIcon,
  ChatIcon,
  EmojiHappyIcon,
  HeartIcon,
  PaperAirplaneIcon,
} from '@heroicons/react/outline';
import { boldSmallText } from '@styles';
import { getTextWidth } from '@utils';
import useMessages from '../../useMessages';
import { useEffect } from 'react';

const CommentSection = () => {
  const [isLong, setIsLong] = useState(false);
  const iconClass = 'w-7 h-7 mr-3 cursor-pointer ';
  const viewCommentClass = 'text-sm font-normal text-[#8e8e8e] pt-1 ';
  const croppedTextClass = 'line-clamp-2';
  const sampleText =
    'I’m in my sixties, and I can still balance my entire body weight on one arm. That might seem impressive, but I know that ten years from now—when I’m in my seventies, a senior citizen — I’ll still be attempting to set all kinds of records and succeeding, just as I always have';
  useEffect(() => {
    setIsLong(getTextWidth(sampleText, 'text-sm font-normal') > 500);
  }, []);
  return (
    <div>
      <div className='flex items-center p-4 pr-1 justify-between '>
        <div className='flex'>
          <HeartIcon className={iconClass} />
          <ChatIcon className={iconClass} />
          <PaperAirplaneIcon
            className={iconClass + ' rotate-[65deg] -mt-1.5'}
          />
        </div>
        <BookmarkIcon className={iconClass} />
      </div>
      <div className='p-4'>
        <div className={boldSmallText}>
          {useMessages('likes', { count: 8256 })}
        </div>
        <div className='pt-3 hidden md:block'>
          <div
            className={`text-sm font-normal ${isLong ? croppedTextClass : ''}`}>
            <span className={boldSmallText + 'mr-2'}>username</span>
            {sampleText}
          </div>
          {isLong && (
            <button
              onClick={() => setIsLong(false)}
              className='text-sm font-normal cursor-pointer text-[#8e8e8e]'>
              {useMessages('more')}
            </button>
          )}
        </div>
        <div className='text-sm font-normal pt-4 text-[#00376b] cursor-pointer hidden md:block'>
          #iceman #wimhof #armbalance #onearmbandit #strong #happy #healthy
          #wimhofmethod
        </div>
        <div className={viewCommentClass + 'cursor-pointer'}>
          {useMessages('viewAllComments', { count: 80 })}
        </div>
        <time className='text-[10px] font-size font-normal text-[#8e8e8e] pt-1 uppercase leading-3 cursor-pointer'>
          {useMessages('hoursAgo', { count: 2 })}
        </time>
      </div>
      <div className='border-t border-[#dbdbdb]'>
        <div className='flex px-4 py-3 justify-between'>
          <div className='flex flex-grow'>
            <EmojiHappyIcon className={iconClass} />
            <input
              placeholder={useMessages('addComment')}
              className={
                viewCommentClass + 'focus-visible:outline-none flex-grow'
              }
            />
          </div>
          <button className='text-sm font-semibold text-[#0095f6]'>
            {useMessages('post')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CommentSection;
