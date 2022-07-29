import { useContext } from 'react';
import ModalWrapper from '@components/ModalWrapper';
import { AppContext, UPDATE_VALUE } from '@context/AppContext';
import PostHeader from '../shared/PostHeader';
import CommentSection from '../shared/CommentSection';
import SingleComment from '../shared/SingleComment';
import Image from 'next/image';
import { useHideModal } from 'utils/client/hooks';

const PostModal = () => {
  const {
    dispatch,
    state: { imgSrc },
  } = useContext(AppContext);

  const showModal = (value) =>
    dispatch({
      type: UPDATE_VALUE,
      payload: {
        showPostModal: value,
      },
    });
  useHideModal('postModal', showModal, true);

  return (
    <ModalWrapper>
      <div className='px-16 py-2 absolute w-full h-full bg-[rgba(0,0,0,.65)]'>
        <div
          id='postModal'
          className='mx-auto my-6 md:flex bg-white rounded-md h-[95%] max-w-[1390px] overflow-hidden'>
          <Image
            className='cursor-pointer'
            src={`https://res.cloudinary.com/drjffngwz/image/upload/q_100,c_fill,h_1200,w_1200/v1653415525/${imgSrc}`}
            layout='intrinsic'
            width={1390}
            height={600}
          />
          <div className='md:grow-[4] md:basis-[0%] min-w-[372px] w-full h-full flex flex-col'>
            <header className='items-center block border-b border-[#efefef]'>
              <PostHeader username='sczuri4' />
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
            <div className='md:hidden relative min-h-[372px] min-w-[372px] h-full w-full bg-[url("https://res.cloudinary.com/drjffngwz/image/upload/v1653414317/nextinsta/pinkamena/pinkamena2_cesf4f.jpg")] bg-cover bg-no-repeat bg-center' />
            <CommentSection isModal />
          </div>
        </div>
      </div>
    </ModalWrapper>
  );
};

export default PostModal;
