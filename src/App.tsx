import React from 'react';
import { Quiz } from './components/Quiz';
import { Result } from './components/Result';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme, GlobalStyles } from './theme';

function App() {
  const [theme, setTheme] = React.useState('light');

  const switchTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <h1>hello</h1>
      <Quiz />
      <button className="theme-button" onClick={switchTheme}>
        {theme === 'light' ? 'Dark mode' : 'Light Mode'}
      </button>
    </ThemeProvider>
  );
}

export default App;
