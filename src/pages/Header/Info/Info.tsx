import React from 'react';
import { Link } from 'react-router-dom';
import styles from './index.module.scss';
import { ReactComponent as Light } from '../../../assets/pictures/header/light.svg';
import { ReactComponent as Dark } from '../../../assets/pictures/header/dark.svg';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import { useTranslation } from 'react-i18next';

export const Info = () => {
  const { t } = useTranslation();
  const { value } = useSelector((state: RootState) => state.theme);

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
          {value === 'light' ? <Light fill="#333" /> : <Light fill="#b3b3b3" />} {t('info.__or')}{' '}
          {value === 'light' ? <Dark fill="#333" /> : <Dark fill="#b3b3b3" />} {t('info.__4li')}
        </li>
        <li>
          - {t('info.__click')}{' '}
          <span>
            {t('lngs.__buttonEn')}, {t('lngs.__buttonGe')}, {t('lngs.__buttonRu')}
          </span>{' '}
          {t('info.__5li')}
        </li>
      </ul>
    </div>
  );
};
