import { useContext, useEffect } from 'react';
import Image from 'next/image';
import ModalWrapper from '@components/ModalWrapper';
import { XIcon } from '@heroicons/react/outline';
import { AppContext, UPDATE_VALUE } from '@context/AppContext';
import Carousel from './FeedCarousel';

const FeedModal = () => {
  const { dispatch } = useContext(AppContext);
  const hideModal = () =>
    dispatch({
      type: UPDATE_VALUE,
      payload: {
        showFeedModal: false,
      },
    });

  useEffect(() => {
    const body = document.querySelector('body');
    const modalWrapper = document.querySelector('#modalWrapper');
    body.classList.add('overflow-hidden');
    modalWrapper.classList.remove('hidden');
    return () => {
      body.classList.remove('overflow-hidden');
      modalWrapper.classList.add('hidden');
    };
  }, []);

  return (
    <ModalWrapper>
      <div id='feedModal' className={`bg-[#262626] w-full h-full`}>
        <div className='hidden md:block absolute w-24 h-12 ml-2 left-1 top-1'>
          <Image
            className='cursor-pointer'
            src='/img/logow.png'
            layout='fill'
            objectFit='contain'
            onClick={() => hideModal()}
          />
        </div>
        <XIcon
          className='text-white h-9 w-9 absolute right-5 top-5 cursor-pointer'
          onClick={() => hideModal()}
        />

        <div className='relative top-3 h-[97%] w-[90%] mx-auto flex items-center'>
          <Carousel />
        </div>
      </div>
    </ModalWrapper>
  );
};

export default FeedModal;
