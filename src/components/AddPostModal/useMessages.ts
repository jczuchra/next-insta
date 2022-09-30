import { useIntl, defineMessages } from 'react-intl';

const useMessages = () => {
  const { formatMessage } = useIntl();
  return (id) => formatMessage(messages[id]);
};

const messages = defineMessages({
  createNewPost: {
    id: 'addPostModal.createNewPost',
    defaultMessage: 'Create new post',
  },
  dragPhotos: {
    id: 'addPostModal.dragPhotos',
    defaultMessage: 'Drag photos and videos here',
  },
  select: {
    id: 'addPostModal.select',
    defaultMessage: 'Select from computer',
  },
  upload: {
    id: 'addPostModal.upload',
    defaultMessage: 'Upload',
  },
  send: {
    id: 'addPostModal.send',
    defaultMessage: 'Send',
  },
});

export default useMessages;
