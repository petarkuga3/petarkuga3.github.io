import React, { createContext, useState, useContext, useEffect } from 'react';
import { loadFromLocalStorage, saveToLocalStorage } from '../../store';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(() => loadFromLocalStorage('theme', 'dark'));

    useEffect(() => {
        saveToLocalStorage('theme', theme);
    }, [theme]);

    const toggleTheme = () => { 
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

