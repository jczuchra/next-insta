import SingleSearch from './SingleSearch';
import useMessages from './useMessages';

const SearchModal = () => {
  return (
    <div className='hidden md:block absolute mx-auto left-0 right-0 rounded-md top-[65px] w-[375px] h-[365px] z-10'>
      <div className='absolute bg-white rotate-45 w-5 h-5 -top-1.5 mx-auto left-0 right-0 shadow-csm' />
      <div className='absolute left-0 right-0 rounded-md w-[375px] h-[365px] shadow-5csm bg-white border-1 overflow-y-scroll'>
        <div className='flex pt-4 px-4 justify-between'>
          <h4 className='font-semibold text-base'>{useMessages('latest')}</h4>
          <h4 className='font-semibold text-sm text-sky-500 cursor-pointer'>
            {useMessages('clearAll')}
          </h4>
        </div>
        <div className='mt-4'>
          <SingleSearch />
          <SingleSearch />
          <SingleSearch />
          <SingleSearch />
          <SingleSearch />
          <SingleSearch />
          <SingleSearch />
          <SingleSearch />
          <SingleSearch />
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
