import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <div
            id='modalWrapper'
            className='hidden fixed top-0 left-0 bottom-0 right-0 z-50 '
          />
          <NextScript />
        </body>
      </Html>
    );
  }
}
