import React from 'react';
import { Quiz } from './components/Quiz';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme, GlobalStyles } from './theme';
import './scss/app.scss';

export type testContext = {
  correctAns: number;
  setCorrentAns?: any;
};

export const TestContext = React.createContext({} as testContext);

function App() {
  const [theme, setTheme] = React.useState('light');
  const [correctAns, setCorrentAns] = React.useState<number>(0);
  console.log(correctAns);

  const switchTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };
  return (
    <TestContext.Provider value={{ correctAns, setCorrentAns }}>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <GlobalStyles />
        <div className="app">
          <h1 className="header">hello</h1>
          <Quiz />
          <button className="theme-button" onClick={switchTheme}>
            {theme === 'light' ? 'Dark mode' : 'Light Mode'}
          </button>
        </div>
      </ThemeProvider>
    </TestContext.Provider>
  );
}

export default App;
