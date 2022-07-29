import { createContext } from 'react';
import { initialState } from './initialState';

const AppContext = createContext({
  dispatch: () => {
    // init context
  },
  state: initialState,
});

export default AppContext;
