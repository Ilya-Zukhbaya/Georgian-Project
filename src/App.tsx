import React from 'react';
import { Quiz } from './components/Quiz';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme, GlobalStyles } from './theme';
import './scss/app.scss';
import { useTranslation, Trans } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from './redux/store';
import { changeTheme } from './redux/slices/themeSlice';

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
  const theme = useSelector((state: RootState) => state.theme.value);
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();
  const [correctAns, setCorrentAns] = React.useState<number>(0);

  React.useEffect(() => {
    const value = localStorage.getItem('theme');
    if (value) {
      localStorage.setItem('theme', theme);
    } else {
      localStorage.setItem('theme', 'light');
    }
  }, [theme]);

  const switchTheme = () => {
    theme === 'light' ? dispatch(changeTheme('dark')) : dispatch(changeTheme('light'));
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
