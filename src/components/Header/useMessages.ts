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
  profile: {
    id: 'header.profile',
    defaultMessage: 'Profile',
  },
  saved: {
    id: 'header.saved',
    defaultMessage: 'Saved',
  },
  settings: {
    id: 'header.settings',
    defaultMessage: 'Settings',
  },
  switchAccount: {
    id: 'header.switchAccount',
    defaultMessage: 'Switch account',
  },
  logout: {
    id: 'header.logout',
    defaultMessage: 'Log out',
  },
});

export default useMessages;
