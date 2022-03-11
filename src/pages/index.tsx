import { useEffect, useState, useContext } from 'react';
import Head from 'next/head';
import Header from '@components/Header';
import Feed from '@components/Feed';
import Propositions from '@components/Propositions';
import PostModal from '@components/Post/PostModal';
import Post from '@components/Post';
import { AppContext } from '@utils';

export default function Home() {
  const context = useContext(AppContext);
  const {
    state: { showPostModal },
  } = context;
  return (
    <>
      <div className=''>
        <Head>
          <title>nextinsta</title>
          <link rel='icon' href='/favicon.ico' />
        </Head>
        <Header />
        <div className='h-100 w-100 bg-[#fafafa] pt-[65px]'>
          <div className='pt-[30px] w-[975px] mx-auto flex pb-7'>
            <div>
              <Feed />
              <div>
                <Post />
                <Post />
                {showPostModal && <PostModal />}
              </div>
            </div>
            <Propositions />
          </div>
        </div>
      </div>
      <div className='t-0 absolute invisible -z-20' id='ruler' />
    </>
    // <Feed />
    // <Propositions />
    // <Post />
  );
}
