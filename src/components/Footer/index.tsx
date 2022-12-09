import React from 'react';
import { ReactComponent as Insta } from '../../assets/pictures/footer/insta.svg';
import { ReactComponent as Mail } from '../../assets/pictures/footer/mail.svg';
import { ReactComponent as Telegram } from '../../assets/pictures/footer/telegram.svg';

import { useSelector } from 'react-redux';
import { selectTheme } from '../../redux/store';

import { Link, useLocation } from 'react-router-dom';

import { useTranslation } from 'react-i18next';

export const Footer: React.FC = () => {
  const [active, setActive] = React.useState<boolean>(false);

  const { theme } = useSelector(selectTheme);

  const location = useLocation();

  const { t } = useTranslation();

  return (
    <div
      className={
        location.pathname !== '/' ? 'footer__container footer__active' : 'footer__container'
      }>
      <p className={location.pathname !== '/' ? 'activeP' : ''}>© All rights reserved</p>

      <div className="footer__center">
        <ul>
          <Link to="/about">
            <button className={location.pathname === '/about' ? 'bold' : ''}>
              {t('footer.__about')}
            </button>
          </Link>
          <Link to="/faq">
            <button className={location.pathname === '/faq' ? 'bold' : ''}>
              {t('footer.__FAQ')}
            </button>
          </Link>
          <Link to="/support">
            <button className={location.pathname === '/support' ? 'bold' : ''}>
              {t('footer.__support')}
            </button>
          </Link>
        </ul>
      </div>

      <div className="footer__rightside">
        <h3 onClick={() => setActive(!active)} className={active ? 'bold' : ''}>
          {t('footer.__contact')}
        </h3>
        <ul className={active ? 'active ' : 'inactive'}>
          <li>
            <a href="https://www.instagram.com/ilya_perepletov">
              <Insta fill={theme === 'light' ? '#333' : '#b3b3b3'} />
            </a>
          </li>
          <li>
            <a href="mailto:ilya.perepletovv@gmail.com">
              <Mail fill={theme === 'light' ? '#333' : '#b3b3b3'} />
            </a>
          </li>
          <li>
            <a href="https://t.me/ilya_perepletov">
              <Telegram fill={theme === 'light' ? '#333' : '#b3b3b3'} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
