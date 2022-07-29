import { useEffect, useState } from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { IntlProvider } from 'react-intl';
import { AppContextProvider } from '@context/AppContext';
import lang from '../lang';
import { useRouter } from 'next/router';
import '../styles/index.css';

function MyApp({ Component, pageProps }: AppProps) {
  const [localMessages, setLocalMessages] = useState('');
  const [locale, setLocale] = useState('en');
  const router = useRouter();

  useEffect(() => {
    const { languages } = navigator;
    setLocale(languages[0]);
    const lg = lang[locale] ? lang[locale] : lang['en'];
    setLocalMessages(lg);
  }, []);

  return (
    <>
      <AppContextProvider>
        <IntlProvider
          messages={localMessages as any}
          locale={locale}
          defaultLocale='en'>
          <Head>
            <title>nextinsta</title>
            <meta
              name='viewport'
              content='initial-scale=1.0, width=device-width'
            />
          </Head>
          <Component {...pageProps} key={router.asPath} />
          <div className='top-0 absolute invisible -z-20' id='ruler' />
        </IntlProvider>
      </AppContextProvider>
    </>
  );
}

export default MyApp;
