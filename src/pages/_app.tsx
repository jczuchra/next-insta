import { useEffect, useState, useReducer } from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { IntlProvider } from 'react-intl';
import { AppContext, initialState, reducer } from '@utils';
import lang from '../lang';
import '../styles/index.css';

function MyApp({ Component, pageProps }: AppProps) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [localMessages, setLocalMessages] = useState('');
  const [locale, setLocale] = useState('en');
  const langsSupported = ['en'];
  const appState = {
    dispatch,
    state,
  };
  useEffect(() => {
    const { languages } = navigator;
    setLocale(languages[0]);
    const lg = lang[locale] ? lang[locale] : lang['en'];
    setLocalMessages(lg);
  }, []);
  return (
    <>
      <AppContext.Provider value={appState}>
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
          <Component {...pageProps} />
        </IntlProvider>
      </AppContext.Provider>
    </>
  );
}

export default MyApp;
