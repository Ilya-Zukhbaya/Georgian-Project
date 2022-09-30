import React from 'react';
import { Quiz } from './components/Quiz';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme, GlobalStyles } from './theme';
import './scss/app.scss';
import { useSelector } from 'react-redux';
import type { RootState } from './redux/store';
import { Header } from './components/Header/Header';

export type testContext = {
  correctAns: number;
  setCorrentAns?: any;
};

export const TestContext = React.createContext({} as testContext);

function App() {
  const theme = useSelector((state: RootState) => state.theme.value);
  const [correctAns, setCorrentAns] = React.useState<number>(0);

  return (
    <TestContext.Provider value={{ correctAns, setCorrentAns }}>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <GlobalStyles />
        <div className="app">
          <Header />
          <Quiz />
        </div>
      </ThemeProvider>
    </TestContext.Provider>
  );
}

export default App;
