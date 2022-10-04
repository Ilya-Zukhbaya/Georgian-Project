import { ReactComponent as Insta } from '../../assets/pictures/footer/insta.svg';
import { ReactComponent as Mail } from '../../assets/pictures/footer/mail.svg';
import { ReactComponent as Telegram } from '../../assets/pictures/footer/telegram.svg';
import styles from './index.module.scss';
import { useTranslation } from 'react-i18next';

export const Footer = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.root}>
      <p>© Ilya Zukhbaya. All rights reserved</p>

      <div className={styles.root__center}>
        <ul>
          <li>{t('footer.__about')}</li>
          <li>{t('footer.__FAQ')}</li>
          <li>{t('footer.__support')}</li>
        </ul>
      </div>

      <div className={styles.root__rightside}>
        <h3>{t('footer.__contact')}</h3>
        <ul>
          <li>
            <Insta />
          </li>
          <li>
            <Mail />
          </li>
          <li>
            <Telegram />
          </li>
        </ul>
      </div>
    </div>
  );
};
