import React from 'react';
import { XIcon } from '@heroicons/react/outline';
import CircleIcon from '@components/CircleIcon';

const SingleSearch = () => {
  return (
    <div className='flex mb-4 justify-between px-4'>
      <div className='w-[200px] flex'>
        <CircleIcon
          src={
            'http://placekitten.com/100/100?image=' +
            Math.floor(Math.random() * 15)
          }
          customClass='w-12 h-12'
        />
        <div className='pl-2'>
          <div className='font-semibold text-sm'>username</div>
          <div className='font-normal text-sm text-[#8e8e8e]'>bioname</div>
        </div>
      </div>
      <XIcon className='w-6 text-[#8e8e8e] cursor-pointer' />
    </div>
  );
};

export default SingleSearch;
