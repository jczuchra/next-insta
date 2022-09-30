import React, { useReducer } from 'react';
import AppContext from './AppContext';
import { initialState } from './initialState';
import { reducer, UPDATE_VALUE } from './reducer';

const AppContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return React.createElement(
    AppContext.Provider,
    { value: { state, dispatch } },
    children
  );
};
export { AppContext, initialState, reducer, UPDATE_VALUE, AppContextProvider };
