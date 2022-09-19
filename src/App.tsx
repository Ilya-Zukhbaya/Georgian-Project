import React from 'react';
import { Quiz } from './components/Quiz';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme, GlobalStyles } from './theme';
import './scss/app.scss';
import { useTranslation, Trans } from 'react-i18next';

export type testContext = {
  correctAns: number;
  setCorrentAns?: any;
};

const lngs: any = {
  en: { nativeName: 'English' },
  ge: { nativeName: 'Georgian' },
};

export const TestContext = React.createContext({} as testContext);

function App() {
  const { t, i18n } = useTranslation();
  const [theme, setTheme] = React.useState('light');
  const [correctAns, setCorrentAns] = React.useState<number>(0);

  const switchTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };
  return (
    <TestContext.Provider value={{ correctAns, setCorrentAns }}>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <GlobalStyles />
        <div className="app">
          <div>
            {Object.keys(lngs).map((lng) => (
              <button
                key={lng}
                style={{ fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal' }}
                type="submit"
                onClick={() => i18n.changeLanguage(lng)}>
                {lngs[lng].nativeName}
              </button>
            ))}
          </div>
          <h1 className="header">
            <Trans i18nKey="description.part1">hello</Trans>
            <p>{t('description.part2')}</p>
          </h1>
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
