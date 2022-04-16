import CircleIcon from '@components/CircleIcon';
import { DotsHorizontalIcon } from '@heroicons/react/outline';
import { boldSmallText, normalXSmallText, black1 } from '@styles';

const PostHeader = () => {
  return (
    <div className='flex py-3.5 pl-2 pr-3 justify-between'>
      <div className='flex items-center'>
        <CircleIcon size={8} src='https://placekitten.com/50/50' />
        <div className='pl-2'>
          <div className={boldSmallText}>username</div>
          <div className={normalXSmallText}>Warszawka, Polandia</div>
        </div>
      </div>
      <DotsHorizontalIcon className={`w-5 cursor-pointer fill[${black1}]`} />
    </div>
  );
};

export default PostHeader;
