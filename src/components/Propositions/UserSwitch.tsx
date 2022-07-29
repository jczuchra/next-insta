import CircleIcon from '@components/CircleIcon';
import Username from '@components/Username';

const UserSwitch = () => {
  return (
    <div className='flex items-center'>
      <div className='w-20 h-14 flex items-center'>
        <CircleIcon src='/img/test.png' size={14} />
      </div>
      <Username username='szczuri4' bioname='jc' />
      <button className='ml-auto text-xs font-semibold text-blue1'>
        Switch
      </button>
    </div>
  );
};

export default UserSwitch;
