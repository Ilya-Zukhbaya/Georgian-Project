import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './index.module.scss';

export const Faq: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.root}>
      <h1>{t('faq.__title')}</h1>
      <ul>
        <li>
          {t('faq.__li1')}
          <em>- {t('faq.__li1o1')}</em>
        </li>
        <li>
          {t('faq.__li2')}
          <em>- {t('faq.__li2o1')} </em>
        </li>
        <li>
          {t('faq.__li3')}
          <em>- {t('faq.__li3o1')}</em>
        </li>
        <li>
          {t('faq.__li4')}
          <em>- {t('faq.__li4o1')}</em>
        </li>
        <li>
          {t('faq.__li5')}
          <em>- {t('faq.__li5o1')}</em>
        </li>
      </ul>
    </div>
  );
};
