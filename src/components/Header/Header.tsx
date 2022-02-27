import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { HomeIcon, XCircleIcon } from '@heroicons/react/solid';
import {
  HeartIcon,
  PaperAirplaneIcon,
  PlusCircleIcon,
  SearchCircleIcon,
  SearchIcon,
} from '@heroicons/react/outline';
import CircleIcon from '@components/CircleIcon';
import NavBtn from './NavBtn';

const Header = () => {
  const [showIcon, setShowIcon] = useState(true);
  const [searchTxt, setSearchTxt] = useState('');
  const navBtnStyles = (customStyles?: string) =>
    `h-7 md:inline-flex cursor-pointer px-2 ${customStyles}`;
  return (
    <div className='border-b border-b-stone-300 w-full'>
      <div className='mx-4 md:m-auto flex justify-between  h-16 items-center max-w-5xl '>
        <div className='relative w-24 h-12 ml-2'>
          <Link href='/'>
            <Image
              className='cursor-pointer'
              src='/img/logo.png'
              layout='fill'
              objectFit='contain'
            />
          </Link>
        </div>
        <div className='hidden md:flex bg-gray-100 p-1.5 rounded-lg items-center'>
          {showIcon && <SearchIcon className='h-5 w-8 text-gray-500 px-2' />}
          <input
            className='bg-gray-100 focus-visible:outline-none pl-2'
            placeholder='Search'
            value={searchTxt}
            onBlur={() => setShowIcon(true)}
            onFocus={() => setShowIcon(false)}
            onChange={(e) => setSearchTxt(e?.target?.value)}
          />
          {!showIcon && (
            <XCircleIcon
              className='h-6 w-8 text-gray-500 px-2 cursor-pointer'
              onClick={() => setSearchTxt('')}
            />
          )}
        </div>

        <div className='flex'>
          <NavBtn type='solid' icon='Home' href='/' />
          <NavBtn type='outline' icon='PaperAirplane' customClass='rotate-45' />
          <NavBtn type='outline' icon='PlusCircle' />
          <NavBtn type='outline' icon='SearchCircle' href='/explore' />
          <NavBtn type='outline' icon='Heart' />
          <CircleIcon />
          {/* <HomeIcon
            className={navBtnStyles()}
            onClick={() => console.log('Grr')}
          /> */}
          {/* <PaperAirplaneIcon className={navBtnStyles('rotate-45')} /> */}
        </div>
      </div>
    </div>
  );
};

export default Header;
