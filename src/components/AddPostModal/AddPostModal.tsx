import { useState } from 'react';
import MediaOutline from '@svg/MediaOutline';
import { useHideModal } from 'utils/client/hooks';
import { uploadPostUrl } from 'utils/client/apiUrl';
import promiseUtil from 'utils/client/promiseUtil';
import Loader from '@components/Loader';
import useMessages from './useMessages';

const AddPostModal = ({ setIsAddPostModal }) => {
  useHideModal('addPostModal', setIsAddPostModal, true);
  const [file, setFile] = useState('');
  const [filePath, setFilePath] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const getMessage = useMessages();
  const parent = document.getElementById('addPostModal');

  const handleAddFile = (data) => {
    let reader = new FileReader();
    const url = URL.createObjectURL(data.target.files[0]);
    setFile(url);
    reader.readAsDataURL(data.target.files[0]);
    reader.onload = async () => {
      setFilePath(reader.result);
    };
  };

  const handleUpload = async () => {
    setIsLoading(true);
    await promiseUtil.post(uploadPostUrl(), {
      data: JSON.stringify(filePath),
    });
    setIsAddPostModal(false);
  };

  return (
    <div className='absolute w-full h-full bg-[rgba(0,0,0,.84)] z-[60]'>
      <div
        id='addPostModal'
        className='absolute z-[60] w-[77vh] h-[81vh] m-auto left-0 right-0 top-0 bottom-0 rounded-2xl bg-white overflow-hidden'>
        <div className='w-full h-full flex-row flex-wrap'>
          <div className='w-full border-b border-gray2 p-2 font-semibold text-center text-black2 flex justify-center'>
            <div>{getMessage('createNewPost')}</div>
            {file && (
              <div
                className='absolute text-blue1 text-sm right-3 cursor-pointer'
                onClick={handleUpload}>
                {getMessage('upload')}
              </div>
            )}
          </div>

          {isLoading ? (
            <Loader />
          ) : (
            <div className='w-full h-full flex flex-col items-center justify-center wrap'>
              {!file && <MediaOutline />}
              {!file && <h4 className='my-3'>{getMessage('dragPhotos')}</h4>}
              {!file && (
                <form>
                  <label
                    htmlFor='img'
                    className='block py-1 px-2 m-auto bg-blue1 rounded-[3px] text-white text-sm font-semibold cursor-pointer'>
                    {getMessage('select')}
                  </label>
                  <input
                    type='file'
                    className='hidden'
                    id='img'
                    onChange={handleAddFile}
                  />
                  {file && (
                    <input
                      className='block p-2 m-auto bg-blue1  text-white text-xs font-semibold'
                      type='submit'
                      value={getMessage('send')}
                    />
                  )}
                </form>
              )}
              {file && (
                <div
                  className={`w-max h-max bg-cover bg-no-repeat bg-center`}
                  style={{
                    backgroundImage: `url(${file})`,
                    height: parent.clientHeight,
                    width: parent.clientWidth + 2,
                  }}
                />
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AddPostModal;
