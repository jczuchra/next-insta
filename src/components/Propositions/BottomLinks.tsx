import Link from 'next/link';
import useMessages from './useMessages';

const BottomLinks = () => {
  const liClass = 'after:content-["\\00B7"] after:m-1 inline ';
  return (
    <nav className='text-xs text-gray4 font-normal mt-5'>
      <ul>
        <li className={liClass}>
          <Link href='#'>{useMessages('about')}</Link>
        </li>
        <li className={liClass}>
          <Link href='#'>{useMessages('help')}</Link>
        </li>
        <li className={liClass}>
          <Link href='#'>{useMessages('press')}</Link>
        </li>
        <li className={liClass}>
          <Link href='#'>API</Link>
        </li>
        <li className={liClass}>
          <Link href='#'>{useMessages('jobs')}</Link>
        </li>
        <li className={liClass}>
          <Link href='#'>{useMessages('privacy')}</Link>
        </li>
        <li className={liClass}>
          <Link href='#'>{useMessages('terms')}</Link>
        </li>
        <li className={liClass}>
          <Link href='#'>{useMessages('locations')}</Link>
        </li>
        <li className={liClass}>
          <Link href='#'>{useMessages('topAccounts')}</Link>
        </li>
        <li className={liClass}>
          <Link href='#'>{useMessages('hashtags')}</Link>
        </li>
        <li className={liClass}>
          <Link href='#'>{useMessages('language')}</Link>
        </li>
      </ul>
      <footer className='mt-5'>© 2022 NEXINSTA</footer>
    </nav>
  );
};

export default BottomLinks;
