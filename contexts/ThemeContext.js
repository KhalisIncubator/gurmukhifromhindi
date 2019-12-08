import React, { useState } from 'react';

const ThemeContext = React.createContext();

const ThemeProvider = (props) => {
  const [bgColor, setBgColor] = useState('white');

  return (
    <ThemeContext.Provider
      value={{
        bgColor,
        setBgColor,
      }}>
      {props.children}
    </ThemeContext.Provider>
  );
}
export {
  ThemeProvider,
  ThemeContext
};