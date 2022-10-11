import React from 'react';
import styles from './index.module.scss';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '../../redux/store';
import { changeTheme } from '../../redux/slices/themeSlice';
import { ReactComponent as Light } from '../../assets/pictures/header/light.svg';
import { ReactComponent as Dark } from '../../assets/pictures/header/dark.svg';
import { lngs } from '../../assets/Languages';
import { Link, useLocation } from 'react-router-dom';
import { setActive, setStep } from '../../redux/slices/quizSlice';
import { setCorrectAns, setDisable } from '../../redux/slices/cardSlice';

export const Header = () => {
  const theme = useSelector((state: RootState) => state.theme.value);
  const location = useLocation();
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
  const switchLng = (lng: string) => {
    window.location.reload();
    i18n.changeLanguage(lng);
  };

  const onHeaderClick = () => {
    dispatch(setActive(false));
    dispatch(setCorrectAns(0));
    dispatch(setStep(0));
    dispatch(setDisable(false));
  };

  return (
    <div className={styles.root}>
      <div className={styles.root__lefside}>
        <Link to="/">
          <h1 onClick={onHeaderClick}>G-PROJECT</h1>
        </Link>
        <nav>
          <p>{t('header.__progress')}</p>
          <p>{t('header.__saved')}</p>
          <p>{t('header.__info')}</p>
          <p>{t('header.__src')}</p>
        </nav>
      </div>
      <div className={styles.root__rightside}>
        {!location.pathname.includes('/card')
          ? Object.keys(lngs).map((lng) => (
              <button
                key={lng}
                style={{ fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal' }}
                type="submit"
                className={styles.root__lngButton}
                onClick={() => switchLng(lng)}>
                {lng === 'en' ? (
                  <span>{t('lngs.__buttonEn')}</span>
                ) : (
                  <span>{t('lngs.__buttonGe')}</span>
                )}
              </button>
            ))
          : ''}
        <button className="theme-button" onClick={switchTheme}>
          {theme === 'light' ? (
            <Dark width={48} height={48} />
          ) : (
            <Light className="light" width={48} height={48} />
          )}
        </button>
      </div>
    </div>
  );
};
