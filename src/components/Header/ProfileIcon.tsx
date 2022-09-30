import React, { useState } from 'react';
import CircleIcon from '@components/CircleIcon';
import ProfileModal from './ProfileModal';

const ProfileIcon = () => {
  const [isProfileModal, setIsProfileModal] = useState(false);
  return (
    <div onClick={() => setIsProfileModal(true)}>
      <CircleIcon src='/img/test.png' size={6} />
      {isProfileModal && <ProfileModal setIsProfileModal={setIsProfileModal} />}
    </div>
  );
};

export default ProfileIcon;
