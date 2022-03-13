import { createContext } from 'react';
import { initialState } from './initialState';

export const AppContext = createContext({
  dispatch: (action: any) => {
    // init context
  },
  state: initialState,
});
