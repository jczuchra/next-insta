import { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import TextInput from '@components/TextInput';
import useMessages from '@components/Auth/useMessages';
import promiseUtil from 'utils/client/promiseUtil';
import { loginUrl } from 'utils/client/apiUrl';
import { AuthRoute } from '@components/Routes';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState([]);
  const router = useRouter();

  const login = async () => {
    const resp = await promiseUtil.post(loginUrl(), {
      username,
      password,
    });
    if (resp?.error) {
      setError(resp.error?.body || [resp.error]);
    } else {
      localStorage.setItem('user', JSON.stringify(resp.user));
      router.push('/');
    }
  };
  return (
    <AuthRoute>
      <div className=''>
        <Head>
          <title>nextinsta</title>
          <link rel='icon' href='/favicon.ico' />
        </Head>
        <div className='absolute top-0 bottom-0 left-0 right-0 bg-[#fafafa] flex justify-center'>
          <div>
            <div className='min-h-[400px] w-[350px] bg-white border border-gray2 mt-[30%]'>
              <div className='relative text-center mt-12'>
                <Image src='/img/logoBig.png' width='192px' height='48px' />
                <div className='flex-row justify-center mt-8'>
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      login();
                    }}>
                    <TextInput
                      placeholder={useMessages('username')}
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                    <TextInput
                      placeholder={useMessages('password')}
                      type='password'
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <button
                      className='bg-blue-400 w-[75%] h-8 text-white text-sm font-medium rounded-sm'
                      onClick={() => login()}>
                      {useMessages('login')}
                    </button>
                  </form>
                  <div className='text-xs w-[75%] mx-auto mt-2 text-red-500'>
                    {error.map((err) => (
                      <div>{err}</div>
                    ))}
                  </div>
                  <div className='flex w-[75%] mt-6 mx-auto justify-between items-center'>
                    <div className='w-2/5 h-[1px] bg-gray2' />
                    <div className='text-gray1 text-xs font-semibold'>OR</div>
                    <div className='w-2/5 h-[1px] bg-gray2' />
                  </div>
                  <div className='text-sm mt-6 font-semibold text-blue-900'>
                    {useMessages('loginWithFacebook')}
                  </div>
                  <div className='text-xs mt-6 mb-2'>
                    {useMessages('forgotPassword')}
                  </div>
                </div>
              </div>
            </div>
            <div className='h-[60px] w-[350px] bg-white border border-gray2 text-center leading-[60px] text-sm mt-3'>
              {useMessages('dontHaveAccount')}
              <span className='text-blue-400'>
                <Link href='/auth/register'>{useMessages('signup')}</Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </AuthRoute>
  );
}
