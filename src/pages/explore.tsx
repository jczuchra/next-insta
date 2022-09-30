import Head from 'next/head';
import Header from '@components/Header';
import { ProtectedRoute } from '@components/Routes';

export default function Explore() {
  return (
    <ProtectedRoute>
      <div className=''>
        <Head>
          <title>nextinsta</title>
          <link rel='icon' href='/favicon.ico' />
        </Head>
        <Header />
        explore
        <div className='h-[1000px] w-100 bg-[#fafafa]' />
      </div>
    </ProtectedRoute>
  );
}
