import { XIcon } from '@heroicons/react/outline';
import CircleIcon from '@components/CircleIcon';
import Username from '@components/Username';

const SingleSearch = () => {
  return (
    <div className='flex mb-4 justify-between px-4'>
      <div className='w-[200px] flex'>
        <CircleIcon
          src={
            'http://placekitten.com/100/100?image=' +
            Math.floor(Math.random() * 15)
          }
          size={10}
        />
        <Username username='username' />
      </div>
      <XIcon className='w-6 text-gray1 cursor-pointer' />
    </div>
  );
};

export default SingleSearch;
