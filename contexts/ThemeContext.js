import React, {useState} from 'react';

const ThemeContext = React.createContext();

const ThemeProvider = (props) => {
  const [bgColor, setBgColor] = useState('white');
  const [cardColor, setCardColor] = useState('lightgray');

  return(
    <ThemeContext.Provider 
    value={{
      bgColor, 
      setBgColor,
      cardColor,
      setCardColor
    }}>
      {props.children}
    </ThemeContext.Provider>
  );
}
export{
  ThemeProvider,
  ThemeContext
};