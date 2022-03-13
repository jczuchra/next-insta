import { useIntl, defineMessages } from 'react-intl';

const useMessages = (id, variables = {}) => {
  const { formatMessage } = useIntl();
  return formatMessage(messages[id], variables);
};

const messages = defineMessages({
  likes: {
    id: 'post.likes',
    defaultMessage: '{count} likes',
  },
  viewAllComments: {
    id: 'post.viewAllComments',
    defaultMessage: 'View all {count} comments',
  },
  hoursAgo: {
    id: 'post.hoursAgo',
    defaultMessage: '{count} hours ago',
  },
  addComment: {
    id: 'post.addComment',
    defaultMessage: 'Add a comment...',
  },
  post: {
    id: 'post.post',
    defaultMessage: 'Post',
  },
  more: {
    id: 'post.more',
    defaultMessage: 'more',
  },
});

export default useMessages;
