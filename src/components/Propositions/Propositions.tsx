import SingleProposition from './SingleProposition';
import UserSwitch from './UserSwitch';
import BottomLinks from './BottomLinks';

const Propositions = () => {
  return (
    <div className='hidden lg:block w-[294px] h-32 pt-7'>
      <UserSwitch />
      <div className='flex'>
        <h3 className='pl-2 my-4 font-semibold text-sm text-gray1'>
          Suggestions for you
        </h3>
        <button className='ml-auto text-xs font-semibold text-black1'>
          See All
        </button>
      </div>
      <SingleProposition username='pinkamena' bio='Suggested for you' />
      <SingleProposition username='japan' bio='Followed by beata.171' />
      <SingleProposition
        username='wild_nature'
        bio='Followed by wiktoria.brdej and mbrd...'
      />
      <SingleProposition username='szczuri4' bio='Followed by beata.171' />
      <SingleProposition
        username='szczuri4'
        bio='Followed by wiktoria.brdej and mbrd'
      />
      <BottomLinks />
    </div>
  );
};

export default Propositions;
