import { useState } from "react"

export const useLocalStorage = <T>(key: string, defaultValue: T): [T, (newValue: T) => void] => {
      const [data, setData]  = useState(() => {
            localStorage.setItem(key, JSON.stringify(defaultValue));
            return defaultValue;
      });

      const setLocalStorage = (newValue: T) => {
            localStorage.setItem(key, JSON.stringify(newValue));
            setData(newValue);
      }

      return [
            data,
            setLocalStorage
      ]
}     

