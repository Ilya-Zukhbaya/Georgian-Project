import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '../../redux/store';
import { changeTheme } from '../../redux/slices/themeSlice';
import { ReactComponent as Light } from '../../assets/pictures/header/light.svg';
import { ReactComponent as Dark } from '../../assets/pictures/header/dark.svg';

const lngs: any = {
  en: { nativeName: 'English', geName: 'en' },
  ge: { nativeName: 'Georgian', geName: 'ge' },
};

export const Header = () => {
  const theme = useSelector((state: RootState) => state.theme.value);
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();
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
    <div>
      <h1>G-PROJECT</h1>
      <div>
        <nav>
          <p>{t('header.__progress')}</p>
          <p>{t('header.__saved')}</p>
          <p>{t('header.__info')}</p>
          <p>{t('header.__src')}</p>
        </nav>
      </div>
      <div>
        {Object.keys(lngs).map((lng) => (
          <button
            key={lng}
            style={{ fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal' }}
            type="submit"
            onClick={() => i18n.changeLanguage(lng)}>
            {lng === 'en' ? (
              <span>{t('lngs.__buttonEn')}</span>
            ) : (
              <span>{t('lngs.__buttonGe')}</span>
            )}
          </button>
        ))}
        <button className="theme-button" onClick={switchTheme}>
          {theme === 'light' ? <Dark /> : <Light className="light" />}
        </button>
      </div>
    </div>
  );
};
