import Head from 'next/head';
import Header from '@components/Header';

export default function Explore() {
  return (
    <>
      <div className=''>
        <Head>
          <title>nextinsta</title>
          <link rel='icon' href='/favicon.ico' />
        </Head>
        <Header />
        explore
        <div className='h-[1000px] w-100 bg-[#fafafa]' />
      </div>
    </>
  );
}
