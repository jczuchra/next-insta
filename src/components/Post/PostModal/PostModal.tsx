import { useContext, useEffect } from 'react';
import ModalWrapper from '@components/ModalWrapper';
import { AppContext, UPDATE_VALUE } from '@utils';
import PostHeader from '../shared/PostHeader';
import CommentSection from '../shared/CommentSection';
import SingleComment from '../shared/SingleComment';

const PostModal = () => {
  const { dispatch } = useContext(AppContext);
  const showModal = (e) => {
    const parent = document.getElementById('postModal');
    if (!parent.contains(e.target as Node)) {
      dispatch({
        type: UPDATE_VALUE,
        payload: {
          showPostModal: false,
        },
      });
    }
  };

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

  useEffect(() => {
    document.addEventListener('click', showModal);
    return () => {
      document.removeEventListener('click', showModal);
    };
  }, []);

  return (
    <ModalWrapper>
      <div className='px-16 py-2 absolute w-full h-full bg-[rgba(0,0,0,.65)]'>
        <div
          id='postModal'
          className='mx-auto my-6 md:flex bg-white rounded-md h-[95%] max-w-[1390px] overflow-hidden'>
          <div className='md:grow-[7] md:basis-[0%] hidden md:block relative min-h-[372px] min-w-[372px] h-full w-full bg-[url("https://placekitten.com/600/600")] bg-cover bg-no-repeat bg-center' />
          <div className='md:grow-[4] md:basis-[0%] min-w-[372px] w-full h-full flex flex-col'>
            <header className='items-center block border-b border-[#efefef]'>
              <PostHeader />
            </header>
            <div className='hidden md:block p-4 max-h-[70%] overflow-scroll scrollbar-hide'>
              <SingleComment />
              <SingleComment />
              <SingleComment />
              <SingleComment />
              <SingleComment />
              <SingleComment />
              <SingleComment />
              <SingleComment />
              <SingleComment />
            </div>
            <div className='md:hidden relative min-h-[372px] min-w-[372px] h-full w-full bg-[url("https://placekitten.com/600/600")] bg-cover bg-no-repeat bg-center' />
            <CommentSection isModal />
          </div>
        </div>
      </div>
    </ModalWrapper>
  );
};

export default PostModal;
