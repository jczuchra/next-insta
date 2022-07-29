import Head from 'next/head';
import Header from '@components/Header';
import Feed from '@components/Feed';
import Propositions from '@components/Propositions';
import PostsContainer from '@components/PostsContainer';
import { ProtectedRoute } from '@components/Routes';

export default function Home() {
  return (
    <ProtectedRoute>
      <>
        <div className=''>
          <Head>
            <title>nextinsta</title>
            <link rel='icon' href='/favicon.ico' />
          </Head>
          <Header />
          <div className='h-full w-full bg-[#fafafa] pt-[65px] min-h-[1000px]'>
            <div className='pt-[16px] md:w-[750px] lg:w-[935px] mx-auto flex pb-7 '>
              <div className='mx-auto'>
                <Feed />
                <PostsContainer />
              </div>
              <Propositions />
            </div>
          </div>
        </div>
      </>
    </ProtectedRoute>
  );
}
