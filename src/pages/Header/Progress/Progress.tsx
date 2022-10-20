import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import styles from './index.module.scss';
import data from '../../../assets/questions.json';
import { ReactComponent as Done } from '../../../assets/pictures/header/done.svg';
import { useTranslation } from 'react-i18next';

export const Progress = () => {
  const { progress } = useSelector((state: RootState) => state.card);
  const { value } = useSelector((state: RootState) => state.theme);

  const { t } = useTranslation();

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
            {history} {value === 'light' ? <Done fill="#333" /> : <Done fill="#b3b3b3" />}{' '}
          </span>{' '}
          from <b>{historyTotal}</b> {t('progress.__questions')} (~
          {history === 0 ? 0 : Math.ceil((history / historyTotal) * 100)}
          %)
        </li>
        <li>
          - {t('progress.__law')}:{' '}
          <span>
            {law} {value === 'light' ? <Done fill="#333" /> : <Done fill="#b3b3b3" />}{' '}
          </span>{' '}
          from <b>{lawTotal} </b> {t('progress.__questions')} (~
          {law === 0 ? 0 : Math.ceil((law / lawTotal) * 100)}
          %)
        </li>
        <li>
          - {t('progress.__languages')}:{' '}
          <span>
            {lng} {value === 'light' ? <Done fill="#333" /> : <Done fill="#b3b3b3" />}{' '}
          </span>{' '}
          from <b>{lngTotal} </b> {t('progress.__questions')} (~
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
