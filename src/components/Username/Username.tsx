import { UsernameProps } from './types';
import { boldSmallText } from '@styles';
import { useRouter } from 'next/router';

const Username = ({
  username = 'username',
  bioname = 'bioname',
  bioClassName = '',
}: UsernameProps) => {
  const router = useRouter();
  return (
    <div
      className='pl-2 cursor-pointer'
      onClick={() => router.push(`/${username}`)}>
      <div className={boldSmallText}>{username}</div>
      <div className={`font-normal text-sm text-gray1 ${bioClassName}`}>
        {bioname}
      </div>
    </div>
  );
};

export default Username;
