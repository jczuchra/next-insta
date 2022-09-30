import { AppContext } from '@context/AppContext';
import { useContext } from 'react';
import ImagesContainer from './components/ImagesContainer';
import ProfileInfo from './components/ProfileInfo';
import PostModal from '@components/Post/PostModal';

const UserPage = () => {
  const {
    state: { showPostModal },
  } = useContext(AppContext);
  return (
    <div className='min-h-screen h-full w-100 bg-[#fafafa] pt-[65px] pb-20'>
      <ProfileInfo />
      <ImagesContainer />
      {showPostModal && <PostModal />}
    </div>
  );
};

export default UserPage;
