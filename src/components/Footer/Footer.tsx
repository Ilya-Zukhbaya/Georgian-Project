import { ReactComponent as Insta } from '../../assets/pictures/footer/insta.svg';
import { ReactComponent as Mail } from '../../assets/pictures/footer/mail.svg';
import { ReactComponent as Telegram } from '../../assets/pictures/footer/telegram.svg';

export const Footer = () => {
  return (
    <div>
      <p>© Ilya Zukhbaya. All rights reserved</p>

      <div>
        <ul>
          <li>About Project</li>
          <li>FAQ</li>
          <li>Support</li>
        </ul>
      </div>

      <div>
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
