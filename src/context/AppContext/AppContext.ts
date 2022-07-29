import { createContext } from 'react';
import { initialState } from './initialState';

const AppContext = createContext({
  dispatch: (action: any) => {
    // init context
  },
  state: initialState,
});

export default AppContext;
