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
import { setStep } from '../../redux/slices/quizSlice';
import { setCorrectAns } from '../../redux/slices/cardSlice';

export const Header: React.FC = () => {
  const theme = useSelector((state: RootState) => state.theme.value);
  const { step, items } = useSelector((state: RootState) => state.quiz);
  const { correctAns } = useSelector((state: RootState) => state.card);
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

  const path = location.pathname.slice(location.pathname.lastIndexOf('/') + 1);

  const saveInfo = () => {
    localStorage.setItem('ca', JSON.stringify(correctAns));
    localStorage.setItem('step', JSON.stringify(step));
    localStorage.setItem('savedItems', JSON.stringify(items));
  };

  const removeInfo = () => {
    dispatch(setStep(0));
    dispatch(setCorrectAns(0));
  };

  const confirmSavedInfo = () => {
    if (
      (location.pathname.includes('/card') && Number(path) >= 3) ||
      location.pathname.includes('continue')
    ) {
      saveInfo();
    }

    if (location.pathname.includes('/continue')) {
      removeInfo();
    }
  };

  return (
    <div className={styles.root}>
      <div>
        <Link to="/">
          <button style={{ backgroundColor: 'unset', border: 'unset' }}>
            <h1 onClick={() => confirmSavedInfo()}>G-PROJECT</h1>
          </button>
        </Link>
      </div>
      <div className={styles.root__lefside}>
        <nav>
          <Link to="/progress">
            <button
              className={location.pathname === '/progress' ? 'bold' : ''}
              onClick={() => confirmSavedInfo()}>
              {t('header.__progress')}
            </button>
          </Link>
          <Link to="/saved">
            <button
              className={location.pathname === '/saved' ? 'bold' : ''}
              onClick={() => confirmSavedInfo()}>
              {t('header.__saved')}
            </button>
          </Link>
          <Link to="/info">
            <button
              className={location.pathname === '/info' ? 'bold' : ''}
              onClick={() => confirmSavedInfo()}>
              {t('header.__info')}
            </button>
          </Link>
          <Link to="/source">
            <button
              className={location.pathname === '/source' ? 'bold' : ''}
              onClick={() => confirmSavedInfo()}>
              {t('header.__src')}
            </button>
          </Link>
        </nav>
      </div>
      <div
        className={`${styles.root__rightside} ${
          location.pathname.includes('/card') || location.pathname.includes('/test/st')
            ? ''
            : styles.root__rightSideMob
        }`}>
        {location.pathname.includes('/card') ||
        location.pathname.includes('/result') ||
        location.pathname.includes('/test/st')
          ? ''
          : Object.keys(lngs).map((lng) => (
              <button
                key={lng}
                style={{ fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal' }}
                type="submit"
                className={styles.root__lngButton}
                onClick={() => switchLng(lng)}>
                {lng === 'en' ? <span>EN</span> : lng === 'ge' ? <span>GE</span> : <span>RU</span>}
              </button>
            ))}
        <button className="theme-button" onClick={switchTheme}>
          {theme === 'light' ? <Dark fill="#333" /> : <Light fill="#b3b3b3" />}
        </button>
      </div>
    </div>
  );
};
