import { useState } from "react";

const useLocalStorage = (key, initalValue) => {
  const [value, setValue] = useState(() => {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : initalValue;
  });
  const setStoredValue = (newValue) => {
    setValue(newValue);
    localStorage.setItem(key,JSON.stringify(newValue))
 };
return  {value,setStoredValue};
};

export default useLocalStorage;

