import React, { createContext, useReducer } from 'react';

const createDataContext = (reducer, actions, initialState) => {
  const Context = createContext();

  const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const boundedActions = {};
    for (const key in actions) {
      boundedActions[key] = actions[key](dispatch);
    }

    return <Context.Provider value={{ state, ...boundedActions }}>{children}</Context.Provider>;
  };

  return { Context, Provider };
};

export default createDataContext;
