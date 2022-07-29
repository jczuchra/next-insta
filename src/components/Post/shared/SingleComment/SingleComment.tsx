import CircleIcon from '@components/CircleIcon';
import { HeartIcon } from '@heroicons/react/outline';
import { boldSmallText, normalSmallText, normalXSmallText } from '@styles';

const SingleComment = () => {
  return (
    <div className='mb-4'>
      <div className='flex w-auto'>
        <div>
          <CircleIcon size={7} src='http://placekitten.com/100/100' />
        </div>
        <div className='ml-2'>
          <div className='flex'>
            <div className='leading-[18px]'>
              <span className={boldSmallText}>username</span>
              <span className={`${normalSmallText} ml-2 text-black1`}>
                I’m up to eight minutes of four seconds in and eight seconds
                out. Thank you brother
              </span>
            </div>
            <HeartIcon className='h-5' />
          </div>
          <div className='flex mt-4'>
            <div className={`${normalXSmallText} mr-3`}>1d</div>
            <div className={`${normalXSmallText} mr-3 font-semibold`}>
              170 likes
            </div>
            <div className={`${normalXSmallText}mr-3 font-semibold`}>Reply</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleComment;
