import { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import TextInput from '@components/TextInput';
import promiseUtil from 'utils/client/promiseUtil';
import { registerUrl } from 'utils/client/apiUrl';
import { AuthRoute } from '@components/Routes';
import useMessages from '@components/Auth/useMessages';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [error, setError] = useState([]);
  const router = useRouter();

  const register = async () => {
    const resp = await promiseUtil.post(registerUrl(), {
      email,
      password,
      username,
    });
    if (resp?.error) {
      setError(resp.error?.body || [resp.error]);
    } else {
      router.push('/auth/login');
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
            <div className='min-h-[600px] w-[350px] bg-white border border-gray2 mt-[10%]'>
              <div className='relative text-center mt-12'>
                <Image src='/img/logoBig.png' width='192px' height='48px' />
                <h3 className='w-[90%] text-center mx-auto my-4 font-semibold text-lg text-gray1'>
                  {useMessages('registerH3')}
                </h3>
                <button
                  className='bg-blue-400 w-[75%] h-8 text-white text-sm font-medium rounded-sm'
                  onClick={() => register()}>
                  {useMessages('loginWithFacebook')}
                </button>
                <div className='flex w-[75%] mt-6 mx-auto justify-between items-center'>
                  <div className='w-2/5 h-[1px] bg-gray2' />
                  <div className='text-gray1 text-xs font-semibold'>OR</div>
                  <div className='w-2/5 h-[1px] bg-gray2' />
                </div>
                <div className='flex-row justify-center mt-4'>
                  <TextInput
                    placeholder={useMessages('email')}
                    value={email}
                    type='email'
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <TextInput
                    placeholder={useMessages('password')}
                    type='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <TextInput
                    placeholder={useMessages('username')}
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                  <div>
                    <button
                      className='bg-blue-400 w-[75%] h-8 text-white text-sm font-medium rounded-sm'
                      onClick={() => register()}>
                      {useMessages('register')}
                    </button>
                    <div className='text-xs w-[75%] mx-auto mt-2 text-red-500'>
                      {error.map((err) => (
                        <div>{err}</div>
                      ))}
                    </div>
                    <div className='text-xs w-[75%] mx-auto mt-6 text-gray1'>
                      {useMessages('termsInfo')}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='h-[60px] w-[350px] bg-white border border-gray2 text-center leading-[60px] text-sm mt-3'>
              {useMessages('haveAccount')}
              <span className='text-blue-400'>
                <Link href='/auth/login'>{useMessages('login')}</Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </AuthRoute>
  );
}
