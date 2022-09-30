import CircleIcon from '@components/CircleIcon';
import Username from '@components/Username';
import { getAvatarUrl } from 'utils/client/apiUrl';
import { SinglePropositionProps } from './types';
import useMessages from './useMessages';

const SingleProposition = ({ username, bio }: SinglePropositionProps) => {
  return (
    <div className='flex items-center'>
      <div className='w-12 h-12 flex items-center'>
        <CircleIcon src={getAvatarUrl(username)} size={8} />
      </div>
      <Username username={username} bioname={bio} bioClassName='!text-xs' />
      <button className='ml-auto text-xs font-semibold text-blue1'>
        {useMessages('follow')}
      </button>
    </div>
  );
};

export default SingleProposition;
