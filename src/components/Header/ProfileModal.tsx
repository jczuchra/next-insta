import { useRouter } from 'next/router';
import React from 'react';
import { useHideModal } from 'utils/client/hooks';
import {
  ProfileOutline,
  SettingsOutline,
  SwitchOutline,
  SaveOutline,
} from 'svg';
import useMessages from './useMessages';
import { ProfileModalProps } from './types';

const ProfileModal = ({ setIsProfileModal }: ProfileModalProps) => {
  const router = useRouter();
  useHideModal('profileModal', setIsProfileModal);
  const elementClass =
    'bg-white flex h-[20%] items-center pl-4 text-sm cursor-pointer hover:bg-gray3 active:bg-gray2';
  const svgClass = 'pr-3';

  return (
    <div
      id='profileModal'
      className=' absolute z-10 top-[60px] ml-[-170px] w-[230px] h-[195px] bg-white rounded-lg flex-row justify-center shadow-csm'>
      <div className='absolute -z-10 bg-white rotate-45 w-5 h-5 -top-1.5 right-7 shadow-csm' />
      <div className={elementClass + ' rounded-t-lg'}>
        <div className={svgClass}>
          <ProfileOutline />
        </div>
        {useMessages('profile')}
      </div>
      <div className={elementClass}>
        <div className={svgClass}>
          <SaveOutline size={16} />
        </div>
        {useMessages('saved')}
      </div>
      <div className={elementClass}>
        <div className={svgClass}>
          <SettingsOutline />
        </div>
        {useMessages('settings')}
      </div>
      <div className={elementClass}>
        <div className={svgClass}>
          <SwitchOutline />
        </div>
        {useMessages('switchAccount')}
      </div>
      <div
        className={elementClass + ' border-t border-gray2 rounded-b-lg'}
        onClick={() => logout(router)}>
        {useMessages('logout')}
      </div>
    </div>
  );
};

const logout = (router) => {
  localStorage.setItem('user', JSON.stringify({}));
  router.push('/auth/login');
};

export default ProfileModal;
