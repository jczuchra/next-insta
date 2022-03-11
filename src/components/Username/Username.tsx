import { UsernameProps } from './types';
import { boldSmallText } from '@styles';

const Username = ({ username, bioname }: UsernameProps) => {
  return (
    <div className='pl-2'>
      <div className={boldSmallText}>username</div>
      <div className='font-normal text-sm text-[#8e8e8e]'>bioname</div>
    </div>
  );
};

export default Username;
