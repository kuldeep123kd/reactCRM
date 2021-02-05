
import Axios from "axios";
import React from "react";
import { Context } from './Context';

export const Store = props => {

  const [open, setOpen] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);
  const [isPlanet, setIsPlanet] = React.useState(false);
  const [isError, setIsError] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  }

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <Context.Provider value={{
      handleClose, handleToggle, open, isPlanet, 
      setIsPlanet, isLoading, isError
      }}> 
      {props.children}
    </Context.Provider>
  );
};