import { useIntl, defineMessages } from 'react-intl';

const useMessages = (id, variables = {}) => {
  const { formatMessage } = useIntl();
  return formatMessage(messages[id], variables);
};

const messages = defineMessages({
  about: {
    id: 'propositions.bottomLinks.about',
    defaultMessage: 'About',
  },
  help: {
    id: 'propositions.bottomLinks.help',
    defaultMessage: 'Help',
  },
  press: {
    id: 'propositions.bottomLinks.press',
    defaultMessage: 'Press',
  },
  jobs: {
    id: 'propositions.bottomLinks.jobs',
    defaultMessage: 'Jobs',
  },
  privacy: {
    id: 'propositions.bottomLinks.privacy',
    defaultMessage: 'Privacy',
  },
  terms: {
    id: 'propositions.bottomLinks.terms',
    defaultMessage: 'Terms',
  },
  locations: {
    id: 'propositions.bottomLinks.locations',
    defaultMessage: ' Locations',
  },
  topAccounts: {
    id: 'propositions.bottomLinks.topAccounts',
    defaultMessage: 'Top Accounts',
  },
  hashtags: {
    id: 'propositions.bottomLinks.hashtags',
    defaultMessage: 'Hashtags',
  },
  language: {
    id: 'propositions.bottomLinks.language',
    defaultMessage: 'Language',
  },
  follow: {
    id: 'propositions.singleProposition.follow',
    defaultMessage: 'Follow',
  },
});

export default useMessages;
