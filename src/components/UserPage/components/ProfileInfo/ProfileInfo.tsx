import CircleIcon from '@components/CircleIcon';
import { useRouter } from 'next/router';
import { FollowingSolid, DownSolid } from 'svg';
import { DotsHorizontalIcon } from '@heroicons/react/outline';
import { getAvatarUrl } from 'utils/client/apiUrl';
import { ProfileButtonProps } from './types';

const ProfileInfo = () => {
  const { name } = useRouter().query;

  return (
    <div className='max-w-[975px] mx-auto px-5 pt-2 flex'>
      <div className='hidden md:flex w-1/3  justify-center mt-4'>
        <CircleIcon src={getAvatarUrl(name)} size={37} isHighlight />
      </div>
      <div className='md:hidden w-1/3  justify-center mt-4'>
        <CircleIcon src={getAvatarUrl(name)} size={20} isHighlight />
      </div>
      <div className='w-2/3 mx-auto'>
        <div className='flex flex-wrap md:flex-nowrap gap-2 md:gap-10 py-5 items-center'>
          <div className='text-[28px] font-extralight'>{name}</div>
          <div className='flex gap-3 items-center'>
            <ProfileButton txt='Message' />
            <ProfileButton wide txt={<FollowingSolid />} />
            <ProfileButton txt={<DownSolid />} />
            <DotsHorizontalIcon className={`w-7 cursor-pointer fill-black1`} />
          </div>
        </div>
        <div className='flex gap-8 pb-4'>
          <div>
            <span className='font-semibold'>3,044</span> posts
          </div>
          <div>
            <span className='font-semibold'>45,4m</span> followers
          </div>
          <div>
            <span className='font-semibold'>1,330</span> following
          </div>
        </div>
        <div>
          Conor McGregor Official The face of the fight game, Mr. Whiskey 🥃
          livefast.page.link/Uhbh
        </div>
        <div className='py-4 pb-8 text-xs font-semibold text-gray1'>
          Followed by{' '}
          <span className='text-black1'>
            sylwiabugaj, szkolawalkidrwala, dillondanis
          </span>{' '}
          +10 more
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;

const ProfileButton = ({ txt, wide }: ProfileButtonProps) => (
  <button
    className={`h-7 bg-gray3 text-gray-800 font-semibold px-2 border border-gray2 rounded text-sm ${
      wide && 'w-16 flex items-center justify-center'
    }`}>
    {txt}
  </button>
);
