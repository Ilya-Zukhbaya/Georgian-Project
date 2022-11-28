import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { setActive } from '../../redux/slices/quizSlice';
import { RootState } from '../../redux/store';
import styles from './index.module.scss';

export const Imitation: React.FC = () => {
  const { value } = useSelector((state: RootState) => state.theme);
  const dispatch = useDispatch();
  const { t } = useTranslation();

  return (
    <div
      className={styles.root}
      style={value === 'dark' ? { backgroundColor: '#4e4e4e' } : { backgroundColor: '#cbcbcb' }}>
      <div className={styles.root__header}>
        <h3>{t('imitation.__h3')}</h3>
      </div>
      <div className={styles.root__main}>
        <h4>{t('imitation.__h4')}</h4> <span>{t('imitation.__h4S')}</span>
        <br />
        <span>
          {t('imitation.__h4S3')} <b>{t('imitation.__h4B')}</b>
        </span>
        <br />
        <span>
          {t('imitation.__h4S2')}
          <b>{t('imitation.__h4B1')}</b>
        </span>
      </div>
      <Link to={'/test/st'}>
        <div className={styles.root__footer}>
          <button onClick={() => dispatch(setActive(true))}>{t('imitation.__h4B1')}</button>
        </div>
      </Link>
    </div>
  );
};
