import React, {createContext, useReducer} from 'react';
import {authStates} from './initialStates/auth';
import contact from './initialStates/contact';
import {authReducer} from './reducers/auth';
import {contactReducer} from './reducers/contact';

export const GlobalContext = createContext({});

export const GlobalProvider = ({children}) => {
  const [authState, authDispatch] = useReducer(authReducer, authStates);
  const [contacts, contactDispatch] = useReducer(contactReducer, contact);

  return (
    <GlobalContext.Provider
      value={{authDispatch, authState, contacts, contactDispatch}}>
      {children}
    </GlobalContext.Provider>
  );
};
