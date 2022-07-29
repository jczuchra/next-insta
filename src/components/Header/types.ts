import { Dispatch, SetStateAction } from 'react';

export interface NavBtnProps {
  icon: string;
  customClass?: string;
  href?: string;
  onClick?: () => void;
}

export interface ProfileModalProps {
  setIsProfileModal: Dispatch<SetStateAction<boolean>>;
}
