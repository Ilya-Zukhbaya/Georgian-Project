import React from 'react';
import styles from './index.module.scss';

import data from '../../../assets/questions.json';
import { ReactComponent as Done } from '../../../assets/pictures/header/done.svg';

import { selectCard, selectTheme } from '../../../redux/store';
import { useSelector } from 'react-redux';

import { useTranslation } from 'react-i18next';

export const Progress: React.FC = () => {
  const { t } = useTranslation();

  const { progress } = useSelector(selectCard);
  const { theme } = useSelector(selectTheme);

  const history = progress.filter((obj) => obj.type[0] === 0).length;
  const historyTotal = data.filter((obj) => obj.type[0] === 0).length;
  const law = progress.filter((obj) => obj.type[0] === 1).length;
  const lawTotal = data.filter((obj) => obj.type[0] === 1).length;
  const lng = progress.filter((obj) => obj.type[0] === 2).length;
  const lngTotal = data.filter((obj) => obj.type[1] === 5).length;

  return (
    <div className={styles.root}>
      <h1>
        {t('progress.__total')}: {progress.length} / {data.length}{' '}
        <span>({Math.ceil((progress.length / data.length) * 100)}%)</span>
      </h1>
      <ul>
        <li>
          - {t('progress.__history')}:{' '}
          <span>
            {history} {theme === 'light' ? <Done fill="#333" /> : <Done fill="#b3b3b3" />}{' '}
          </span>{' '}
          {t('progress.__from')} <b>{historyTotal}</b> {t('progress.__questions')} (~
          {history === 0 ? 0 : Math.ceil((history / historyTotal) * 100)}
          %)
        </li>
        <li>
          - {t('progress.__law')}:{' '}
          <span>
            {law} {theme === 'light' ? <Done fill="#333" /> : <Done fill="#b3b3b3" />}{' '}
          </span>{' '}
          {t('progress.__from')} <b>{lawTotal} </b> {t('progress.__questions')} (~
          {law === 0 ? 0 : Math.ceil((law / lawTotal) * 100)}
          %)
        </li>
        <li>
          - {t('progress.__languages')}:{' '}
          <span>
            {lng} {theme === 'light' ? <Done fill="#333" /> : <Done fill="#b3b3b3" />}{' '}
          </span>{' '}
          {t('progress.__from')} <b>{lngTotal} </b> {t('progress.__questions')} (~
          {lng === 0 ? 0 : Math.ceil((lng / lngTotal) * 100)}
          %)
        </li>
      </ul>
      <p>
        {t('progress.__totalLeft')}: {data.length - progress.length}
      </p>
    </div>
  );
};
