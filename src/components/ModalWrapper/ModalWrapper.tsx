import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

const ModalWrapper = ({ children }) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);
  return mounted
    ? createPortal(children, document.getElementById('modalWrapper'))
    : null;
};

export default ModalWrapper;
