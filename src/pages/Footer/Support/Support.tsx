import { useTranslation } from 'react-i18next';
import styles from './index.module.scss';

export const Support: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.root}>
      <h1>{t('support.__title')}</h1>
      <h2>
        {t('support.__subtitle')}
        <em>{t('support.__subtitle1')}</em>
      </h2>
      <ul>
        <li>
          - Sberbank
          <span>5469 3800 1949 0076</span>
          ZUKHBAYA ILYA
        </li>
        <li>
          - Bank Of Georgia
          <span>5488 8808 0418 9822</span>
          ZUKHBAYA ILYA
        </li>
      </ul>
    </div>
  );
};
