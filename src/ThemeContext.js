import React, { createContext, useState, useContext } from 'react';

// Create ThemeContext using React.createContext()
const ThemeContext = createContext();

// Implement the ThemeProvider component
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Implement the useTheme hook
export const useTheme = () => useContext(ThemeContext);
