import { useRouter } from 'next/router';
import Loader from '@components/Loader';
import isAuthenticated from './isAuthenticated';
import React, { useEffect, useState } from 'react';

const ProtectedRoute = ({ children }) => {
  const [isRendered, setIsRendered] = useState(false);
  const router = useRouter();
  useEffect(() => {
    if (window) {
      if (isAuthenticated()) {
        setIsRendered(true);
      } else {
        router.push('/auth/login');
      }
    }
  }, []);
  return isRendered ? children : React.createElement(Loader, null, null);
};

export default ProtectedRoute;
