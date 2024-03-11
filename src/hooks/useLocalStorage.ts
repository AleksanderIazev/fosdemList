import { useState } from 'react';

export const useLocalStorage = <T>(key: string, defaultValue: T): [T, (newValue: T) => void] => {
    const storedValue = JSON.parse(localStorage.getItem(key) || JSON.stringify(defaultValue));

    const [data, setData] = useState<T>(storedValue);

    const setLocalStorage = (newValue: T) => {
        localStorage.setItem(key, JSON.stringify(newValue));
        setData(newValue);
    };

    return [data, setLocalStorage];
};
