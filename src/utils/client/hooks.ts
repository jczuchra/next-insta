import { useEffect } from 'react';

export const useHideModal = (
  elementId: string,
  setShowModal: (isModal: boolean) => void,
  overflowHidden?: boolean
) => {
  const showModal = (e) => {
    const parent = document.getElementById(elementId);

    if (!parent?.contains(e.target as Node)) {
      setShowModal(false);
    } else {
      setShowModal(true);
    }
  };
  useEffect(() => {
    const body = document.querySelector('body');
    const modalWrapper = document.querySelector('#modalWrapper');
    document.addEventListener('click', showModal);
    if (overflowHidden) {
      body.classList.add('overflow-hidden');
      modalWrapper.classList.remove('hidden');
    }
    return () => {
      if (overflowHidden) {
        body.classList.remove('overflow-hidden');
        modalWrapper.classList.add('hidden');
      }
      document.removeEventListener('click', showModal);
    };
  }, []);
};
