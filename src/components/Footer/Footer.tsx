import { ReactComponent as Insta } from '../../assets/pictures/footer/insta.svg';
import { ReactComponent as Mail } from '../../assets/pictures/footer/mail.svg';
import { ReactComponent as Telegram } from '../../assets/pictures/footer/telegram.svg';
import styles from './index.module.scss';

export const Footer = () => {
  return (
    <div className={styles.root}>
      <p>© Ilya Zukhbaya. All rights reserved</p>

      <div className={styles.root__center}>
        <ul>
          <li>About Project</li>
          <li>FAQ</li>
          <li>Support</li>
        </ul>
      </div>

      <div className={styles.root__rightside}>
        <h3>Contant</h3>
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
