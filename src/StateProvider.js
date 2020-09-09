// setup data layer
// We need this to track the basket

import React, { createContext, useContext, useReducer } from "react";

// DATA LAYER
export const StateContext = createContext();

// BUILD A PROVIER
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider> 
);

// use it in a component
export const useStateValue = () => useContext(StateContext); 
