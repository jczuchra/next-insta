import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Logout() {
  const router = useRouter();

  const logout = (router) => {
    localStorage.setItem('user', JSON.stringify({}));
    router.push('/auth/login');
  };
  useEffect(() => {
    logout(router);
  }, []);
  return <div></div>;
}
