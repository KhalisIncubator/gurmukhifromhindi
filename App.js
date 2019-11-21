import React, {Component} from 'react';
import Routes from './Routes';
import {ThemeProvider} from './contexts/ThemeContext';

const App = () => {
  return(
    <ThemeProvider>
      <Routes />
    </ThemeProvider>
  );

}

export default App;