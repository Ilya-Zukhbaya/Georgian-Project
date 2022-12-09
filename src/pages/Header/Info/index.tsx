import React from 'react';
import styles from './index.module.scss';

import { Link } from 'react-router-dom';
import { ReactComponent as Light } from '../../../assets/pictures/header/light.svg';
import { ReactComponent as Dark } from '../../../assets/pictures/header/dark.svg';

import { useSelector } from 'react-redux';
import { selectTheme } from '../../../redux/store';

import { useTranslation } from 'react-i18next';

export const Info: React.FC = () => {
  const { t } = useTranslation();

  const { theme } = useSelector(selectTheme);

  return (
    <div className={styles.root}>
      <h1>{t('info.__total')}:</h1>
      <h2>
        {t('info.__subtitle')} <em>{t('info.__subtitle1')}</em>
      </h2>
      <ul>
        <li>
          - {t('info.__click')}{' '}
          <Link to="/">
            <span>G-PROJECT</span>
          </Link>{' '}
          {t('info.__1li')}
        </li>
        <li>
          -{' '}
          <Link to="/progress">
            <span>{t('info.__progress')}</span>
          </Link>{' '}
          {t('info.__2li')}
        </li>
        <li>
          -
          <Link to="/saved">
            <span>{t('info.__saved')}</span>
          </Link>{' '}
          {t('info.__3li')}
        </li>
        <li>
          - {t('info.__click')}{' '}
          {theme === 'light' ? <Light fill="#333" /> : <Light fill="#b3b3b3" />} {t('info.__or')}{' '}
          {theme === 'light' ? <Dark fill="#333" /> : <Dark fill="#b3b3b3" />} {t('info.__4li')}
        </li>
        <li>
          - {t('info.__click')} <span>EN, GE, RU</span> {t('info.__5li')}
        </li>
      </ul>
    </div>
  );
};
