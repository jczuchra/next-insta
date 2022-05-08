import { useRouter } from 'next/router';
import Loader from '@components/Loader';
import isAuthenticated from './isAuthenticated';
import React, { useEffect, useState } from 'react';

const AuthRoute = ({ children }) => {
  const [isRendered, setIsRendered] = useState(false);
  const router = useRouter();
  useEffect(() => {
    if (window) {
      if (isAuthenticated()) {
        router.push('/');
      } else {
        setIsRendered(true);
      }
    }
  }, []);
  return isRendered ? children : React.createElement(Loader, null, null);
};

export default AuthRoute;
