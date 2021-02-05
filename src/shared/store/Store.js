
import Axios from "axios";
import React from "react";
import { Context } from './Context';

export const Store = props => {

  return (
    <Context.Provider value={{
      }}> 
      {props.children}
    </Context.Provider>
  );
};