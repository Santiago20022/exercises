import React, { createContext, useContext, useMemo } from "react";

export const LocalStorageContext = createContext({
  setLocalStorageValue: () => {},
  getLocalStorageValue: () => {},
  deleteLocalStorageValue: () => {},
});

export function LocalStorageProvider({ children }) {
  
  const setLocalStorageValue = (key, value) => {
    localStorage.setItem(key, value);
    return value;
  };

  const getLocalStorageValue = (key) => {
    return localStorage.getItem(key);
  };

  const deleteLocalStorageValue = (key) => {
    localStorage.removeItem(key);
  };

  const value = useMemo(() => (
    {
      setLocalStorageValue,
      getLocalStorageValue,
      deleteLocalStorageValue
    }
  ), []);

  return (
    <LocalStorageContext.Provider value={value}>
      {children}
    </LocalStorageContext.Provider>
  );
}


