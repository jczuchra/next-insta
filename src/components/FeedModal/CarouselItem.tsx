import { useState } from 'react';
import Image from 'next/image';
import { PaperAirplaneIcon } from '@heroicons/react/outline';
import { CarouselItemProps } from './types';

const CarouselItem = ({ id, level, setActive }: CarouselItemProps) => {
  const [img] = useState(
    'http://placekitten.com/500/900?image=' + Math.floor(Math.random() * 15)
  );
  const levelClass =
    'h-[39%] w-[12%] duration-500 scale-100 absolute rounded-lg cursor-pointer ' +
    itemLevel[level];

  return (
    <div className={levelClass} onClick={() => setActive(id - 1)}>
      {!level && (
        <div className='w-[90%] h-[1px] relative z-10 flex mx-auto top-2'>
          <div className='bg-white w-full mr-[1px]' />
          <div className='bg-gray-300 opacity-80 w-full mr-[1px]' />
          <div className='bg-gray-300 opacity-80 w-full mr-[1px]' />
          <div className='bg-gray-300 opacity-80 w-full' />
        </div>
      )}
      {!level && <FeedComment />}
      <Image className='rounded-lg' layout='fill' src={img} />
    </div>
  );
};

const itemLevel = {
  '-2': 'right-[5%]',
  '-1': 'right-[20%]',
  '0': 'right-[45%] scale-[2.5] cursor-auto',
  '1': 'right-[70%]',
  '2': 'right-[85%]',
};

const FeedComment = () => {
  return (
    <div className='absolute h-10 z-10 -bottom-1 flex scale-[0.4] w-[500px] translate-x-[-32%] justify-center items-center'>
      <input
        placeholder='Reply to Pan kitku-1'
        className='border rounded-full text-white text-sm font-extralight p-3 w-[70%] bg-transparent placeholder:text-white '
      />

      <PaperAirplaneIcon className='w-6 h-6 cursor-pointer rotate-[65deg] ml-3 -mt-1.5 text-white' />
    </div>
  );
};

export default CarouselItem;
