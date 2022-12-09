import React from 'react';
import styles from './index.module.scss';

import { useTranslation } from 'react-i18next';

export const About: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.root}>
      <h1>{t('about.__title')}</h1>
      <ul>
        <li>
          - {t('about.__li1')} <em>{t('about.__li1o1')}</em>
          {t('about.__li1o2')}
        </li>
        <li>
          - {t('about.__li2')} <em>{t('about.__li2o1')}</em>, {t('about.__li2o2')}
        </li>
        <li>
          - <em>{t('about.__li3')}</em> {t('about.__li3o1')}
        </li>
      </ul>
    </div>
  );
};
