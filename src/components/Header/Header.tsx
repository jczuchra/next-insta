import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { XCircleIcon } from '@heroicons/react/solid';
import { SearchIcon } from '@heroicons/react/outline';
import CircleIcon from '@components/CircleIcon';
import useMessages from './useMessages';
import SearchModal from './SearchModal';
import NavBtn from './NavBtn';

const Header = () => {
  const [showIcon, setShowIcon] = useState(true);
  const [searchTxt, setSearchTxt] = useState('');
  const showSearchModal = (e) => {
    const parent = document.getElementById('searchParent');
    if (!parent.contains(e.target as Node)) {
      setShowIcon(true);
    }
  };
  useEffect(() => {
    document.addEventListener('click', showSearchModal);
    return () => {
      document.removeEventListener('click', showSearchModal);
    };
  }, []);
  return (
    <div className='border-b border-b-stone-300 w-full fixed bg-white z-50'>
      <div className='mx-4 md:m-auto flex justify-between  h-16 items-center max-w-[975px] '>
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
        <div
          className='hidden md:flex bg-[#efefef] p-1.5 rounded-lg items-center ml-32 w-[268px]'
          id='searchParent'>
          {showIcon && <SearchIcon className='h-5 w-8 text-gray-500 px-2' />}
          <input
            className='bg-[#efefef] focus-visible:outline-none pl-2 w-64'
            placeholder={useMessages('search')}
            value={searchTxt}
            onFocus={() => setShowIcon(false)}
            onChange={(e) => setSearchTxt(e.target.value)}
          />
          {!showIcon && (
            <XCircleIcon
              className='h-6 w-8 text-gray-500 px-2 cursor-pointer'
              onClick={() => {
                setSearchTxt('');
                setShowIcon(true);
              }}
            />
          )}
          {!showIcon && <SearchModal />}
        </div>
        <div className='flex items-center'>
          <div className='flex w-[240px]'>
            <NavBtn icon='Home' href='/' />
            <NavBtn
              icon='PaperAirplane'
              customClass='rotate-[65deg] -mt-[2px]'
              href='/direct/inbox'
            />
            <NavBtn icon='PlusCircle' />
            <NavBtn icon='SearchCircle' href='/explore' />
            <NavBtn icon='Heart' />
          </div>
          <div>
            <CircleIcon src='/img/test.png' size={7} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
