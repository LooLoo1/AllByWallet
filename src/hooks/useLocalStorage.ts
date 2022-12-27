import { useState, useCallback } from "react";

export const useLocalStorageState = ({ key, value }:{ key:string, value:object }) => {
  const parsedLocalStorage = JSON.parse(localStorage.getItem(key) || '{}');
  const initialValue = Object.keys(parsedLocalStorage).length > 0 ? parsedLocalStorage : value;
  const [localStorageState, setLocalStorageState] =   useState(initialValue);
  const handleUpdateLocalStorageState = useCallback((x:object) => {
      setLocalStorageState(x);
      localStorage.setItem(key, JSON.stringify(x));
    },
    [key]
  );
  return [localStorageState, handleUpdateLocalStorageState];
};