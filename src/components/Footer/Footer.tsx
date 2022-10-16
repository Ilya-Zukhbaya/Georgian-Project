import { ReactComponent as Insta } from '../../assets/pictures/footer/insta.svg';
import { ReactComponent as Mail } from '../../assets/pictures/footer/mail.svg';
import { ReactComponent as Telegram } from '../../assets/pictures/footer/telegram.svg';
import styles from './index.module.scss';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

export const Footer = () => {
  const { t } = useTranslation();
  const { value } = useSelector((state: RootState) => state.theme);

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
            <a href="https://www.instagram.com/ilya_perepletov">
              <Insta fill={value === 'light' ? '#333' : '#b3b3b3'} />
            </a>
          </li>
          <li>
            <a href="mailto:ilya.perepletovv@gmail.com">
              <Mail fill={value === 'light' ? '#333' : '#b3b3b3'} />
            </a>
          </li>
          <li>
            <a href="https://t.me/ilya_perepletov">
              <Telegram fill={value === 'light' ? '#333' : '#b3b3b3'} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
