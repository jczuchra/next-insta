import { useEffect, useState, useContext } from 'react';
import CircleIcon from '@components/CircleIcon';
import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/outline';
import { normalXSmallText, black1 } from '@styles';
import { AppContext, UPDATE_VALUE } from '@utils';

const Feed = () => {
  const { dispatch } = useContext(AppContext);
  const [currentFeeds, setCurrentFeeds] = useState([]);
  const [pointer, setPointer] = useState(8);
  const mock = [];
  for (let i = 0; i < 21; i++) {
    mock.push(
      <div className=''>
        <CircleIcon
          src={
            'http://placekitten.com/50/50?image=' +
            Math.floor(Math.random() * 15)
          }
          isHighlight
          size={16}
          customClass='transition'
          onClick={() =>
            dispatch({
              type: UPDATE_VALUE,
              payload: {
                showFeedModal: true,
              },
            })
          }
        />
        <div
          className={`${normalXSmallText} text-xs text-center !text-[#262626] mt-1`}>
          Pan kitku-{i}
        </div>
      </div>
    );
  }

  const showNext = () => {
    setCurrentFeeds(mock.slice(pointer - 4, pointer + 4));
    setPointer(pointer + 4);
  };

  const showPrevious = () => {
    setCurrentFeeds(mock.slice(pointer - 12, pointer - 4));
    setPointer(pointer - 4);
  };

  useEffect(() => {
    setCurrentFeeds(mock.slice(0, pointer));
  }, []);

  return (
    <div
      id='feed'
      className='w-[480px] h-[110px] md:w-[615px] bg-white border-[#dbdbdb] py-4 border rounded-[3px] mr-7 flex items-center overflow-hidden relative'>
      {currentFeeds}
      {pointer < mock.length && (
        <div className='bg-white rounded-full absolute h-6 w-6 right-2 flex justify-center'>
          <ChevronRightIcon
            className='h-4 w-4 m-auto cursor-pointer'
            onClick={() => showNext()}
          />
        </div>
      )}
      {pointer > 10 && (
        <div className='bg-white rounded-full absolute h-6 w-6 left-2 flex justify-center'>
          <ChevronLeftIcon
            className='h-4 w-4 m-auto cursor-pointer'
            onClick={() => showPrevious()}
          />
        </div>
      )}
    </div>
  );
};

export default Feed;
