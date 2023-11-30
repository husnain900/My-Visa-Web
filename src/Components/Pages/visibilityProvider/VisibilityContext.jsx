import React, { createContext, useContext, useState } from "react";

const VisibilityContext = createContext();

export const useVisibility = () => {
  return useContext(VisibilityContext);
};

export const VisibilityProvider = ({ children }) => {
  const [showLowerComponent, setShowLowerComponent] = useState(false);
  const [classs, setClass] = useState("visibilty-hidden");

  const toggleLowerComponent = () => {
    setShowLowerComponent(!showLowerComponent);
  };
  const classhandle = () => {
    setClass("visibilty-show");
  };
  return (
    <VisibilityContext.Provider
      value={{ showLowerComponent, toggleLowerComponent, classhandle,classs,setClass}}
    >
      {children}
    </VisibilityContext.Provider>
  );
};
