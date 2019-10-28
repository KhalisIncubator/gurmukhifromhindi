import React, {useState} from 'react';

const ThemeContext = React.createContext();

const ThemeProvider = (props) => {
  const [bgColor, changeBgColor] = useState('black');
  const [cardColor, changeCardColor] = useState('lightgray');

  return(
    <ThemeContext.Provider 
    value={
      bgColor, 
      changeBgColor,
      cardColor,
      changeCardColor
    }>
      {props.children}
    </ThemeContext.Provider>
  );
}
export{
  ThemeContext,
  ThemeProvider
};