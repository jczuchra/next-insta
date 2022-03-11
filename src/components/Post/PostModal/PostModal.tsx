import { useContext } from 'react';
import ModalWrapper from '@components/ModalWrapper';
import { useEffect } from 'react';
import { AppContext, UPDATE_VALUE } from '@utils';
import PostHeader from '../shared/PostHeader';
import CommentSection from '../shared/CommentSection';

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
      <div className='px-10 absolute w-[100%] h-[100%] bg-[rgba(0,0,0,.65)]'>
        <div
          id='postModal'
          className='mx-auto my-6 md:flex bg-white rounded-md h-[90%] max-w-[1200px]'>
          <div className='md:grow-[3] md:basis-[0%] hidden md:block relative min-h-[372px] min-w-[372px] h-100% w-100% bg-[url("https://placekitten.com/600/600")] bg-cover bg-no-repeat bg-center' />
          <div className='md:grow-[2] md:basis-[0%] min-w-[372px] w-100% h-100% flex-column'>
            <header className='items-center block'>
              <PostHeader />
            </header>
            <div className='md:hidden relative min-h-[372px] min-w-[372px] h-100% w-100% bg-[url("https://placekitten.com/600/600")] bg-cover bg-no-repeat bg-center' />
            <CommentSection />
          </div>
        </div>
      </div>
    </ModalWrapper>
  );
};

export default PostModal;
