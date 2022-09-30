import Head from 'next/head';
import Header from '@components/Header';
import { ProtectedRoute } from '@components/Routes';
import UserPage from '@components/UserPage';

export default function Profile() {
  return (
    <ProtectedRoute>
      <>
        <div className=''>
          <Head>
            <title>nextinsta</title>
            <link rel='icon' href='/favicon.ico' />
          </Head>
          <Header />
          <UserPage />
        </div>
      </>
    </ProtectedRoute>
  );
}
