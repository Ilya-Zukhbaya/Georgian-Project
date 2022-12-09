import React from 'react';
import styles from './index.module.scss';

import history from '../../../assets/PDF/historyGEO.pdf';
import law from '../../../assets/PDF/lawGEO.pdf';
import language from '../../../assets/PDF/languageGEO.pdf';
import { ReactComponent as Download } from '../../../assets/pictures/header/download.svg';

import { useSelector } from 'react-redux';
import { selectTheme } from '../../../redux/store';

import { useTranslation } from 'react-i18next';

export const Source: React.FC = () => {
  const { t } = useTranslation();
  const { theme } = useSelector(selectTheme);

  return (
    <div className={styles.root}>
      <h1>{t('source.__h1')}</h1>
      <h2>
        {t('source.__sub1')} <em>{t('source.__topic')}</em> {t('source.__and')}{' '}
        <em>{t('source.__click')}</em> {t('source.__sub2')}
      </h2>
      <ul>
        <li>
          {t('source.__history')}:{' '}
          <a href={history} download="historyGEO.pdf">
            <Download fill={theme === 'light' ? '#333' : '#b3b3b3'} />
          </a>
        </li>
        <li>
          {t('source.__law')}:{' '}
          <a href={law} download="lawGEO.pdf">
            <Download fill={theme === 'light' ? '#333' : '#b3b3b3'} />
          </a>
        </li>
        <li>
          {t('source.__languages')}:{' '}
          <a href={language} download="languageGEO.pdf">
            <Download fill={theme === 'light' ? '#333' : '#b3b3b3'} />
          </a>
        </li>
      </ul>
    </div>
  );
};
