import { useIntl, defineMessages } from 'react-intl';

const useMessages = (id) => {
  const { formatMessage } = useIntl();
  return formatMessage(messages[id]);
};

const messages = defineMessages({
  search: {
    id: 'header.search',
    defaultMessage: 'Search',
  },
  latest: {
    id: 'header.latest',
    defaultMessage: 'Latest',
  },
  clearAll: {
    id: 'header.clearAll',
    defaultMessage: 'Clear all',
  },
});

export default useMessages;
