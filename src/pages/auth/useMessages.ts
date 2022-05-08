import { useIntl, defineMessages } from 'react-intl';

const useMessages = (id) => {
  const { formatMessage } = useIntl();
  return formatMessage(messages[id]);
};

const messages = defineMessages({
  register: {
    id: 'register.register',
    defaultMessage: 'Register',
  },
  username: {
    id: 'register.username',
    defaultMessage: 'Username',
  },
  password: {
    id: 'register.password',
    defaultMessage: 'Password',
  },
  email: {
    id: 'register.email',
    defaultMessage: 'Email',
  },
  registerH3: {
    id: 'register.registerH3',
    defaultMessage: 'Sign up to see photos and videos from your friends.',
  },
  haveAccount: {
    id: 'register.haveAccount',
    defaultMessage: 'Have an account? ',
  },
  login: {
    id: 'register.login',
    defaultMessage: 'Log in',
  },
  loginWithFacebook: {
    id: 'register.loginWithFacebook',
    defaultMessage: 'Log in with Facebook',
  },
  termsInfo: {
    id: 'register.loginWithFacebook',
    defaultMessage:
      'By signing up, you agree to our Terms . Learn how we collect, use and share your data in our Data Policy and how we use cookies and similar technology in our Cookies Policy .',
  },
  dontHaveAccount: {
    id: 'login.dontHaveAccount',
    defaultMessage: "Dont't have an account? ",
  },
  signup: {
    id: 'login.signup',
    defaultMessage: 'Sign up',
  },
  forgotPassword: {
    id: 'login.forgotPassword',
    defaultMessage: 'Forgot password?',
  },
});

export default useMessages;
