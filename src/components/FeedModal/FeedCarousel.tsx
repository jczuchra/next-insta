import React, { useState } from 'react';
import CarouselItem from './CarouselItem';
import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/outline';

const Carousel = ({}) => {
  const [active, setActive] = useState(0);
  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const generateItems = () => {
    const arr = [];
    for (let i = active - 2; i < active + 3; i++) {
      var index = i;
      if (i < 0) {
        index = items.length + i;
      } else if (i >= items.length) {
        index = i % items.length;
      }
      const level = active - i;
      arr.push(
        <CarouselItem
          key={index}
          id={items[index]}
          level={level}
          setActive={setActive}
        />
      );
    }
    return arr;
  };

  const leftClick = () => {
    const newActive = active - 1;
    setActive(newActive < 0 ? items.length - 1 : newActive);
  };

  const rightClick = () => {
    setActive((active + 1) % items.length);
  };

  return (
    <div
      id='carousel'
      className='h-[90%] w-[90%] flex content-between items-center'>
      <div className='bg-slate-200 opacity-20 hover:opacity-100 rounded-full absolute h-6 w-6 left-[32%] flex justify-center z-10'>
        <ChevronLeftIcon
          className='h-4 w-4 m-auto cursor-pointer'
          onClick={leftClick}
        />
      </div>
      <div className='bg-slate-200 opacity-20 bg-img hover:opacity-100 rounded-full absolute h-6 w-6 right-[34%] flex justify-center z-10'>
        <ChevronRightIcon
          className='h-4 w-4 m-auto cursor-pointer '
          onClick={rightClick}
        />
      </div>
      {generateItems()}
    </div>
  );
};

export default Carousel;
