import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { XCircleIcon } from '@heroicons/react/solid';
import { SearchIcon } from '@heroicons/react/outline';
import useMessages from './useMessages';
import SearchModal from './SearchModal';
import NavBtn from './NavBtn';
import ProfileIcon from './ProfileIcon';
import AddPostModal from '@components/AddPostModal/AddPostModal';

const Header = () => {
  const [showIcon, setShowIcon] = useState(true);
  const [searchTxt, setSearchTxt] = useState('');
  const [isAddPostModal, setIsAddPostModal] = useState(false);
  const showSearchModal = (e) => {
    const parent = document.getElementById('searchParent');
    if (!parent?.contains(e.target as Node)) {
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
    <>
      {isAddPostModal && <AddPostModal setIsAddPostModal={setIsAddPostModal} />}
      <div className='border-b border-b-stone-300 w-full fixed bg-white z-50'>
        <div className='mx-4 md:m-auto flex justify-between h-[60px] items-center max-w-[975px] px-5'>
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
              className='bg-[#efefef] pl-2 w-64'
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
            <div className='flex w-[230px]'>
              <NavBtn icon='Home' href='/' />
              <NavBtn icon='Direct' href='/direct/inbox' />
              <NavBtn icon='Post' onClick={() => setIsAddPostModal(true)} />
              <NavBtn icon='Explore' href='/explore' />
              <NavBtn icon='Heart' />
            </div>
            <ProfileIcon />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
