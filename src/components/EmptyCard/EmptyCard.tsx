import React from 'react';
import { useTranslation } from 'react-i18next';
import { emptyCardP } from '../../@types';
import { Link } from 'react-router-dom';
import styles from './index.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { setActive, setCardId } from '../../redux/slices/quizSlice';
import { RootState } from '../../redux/store';

export const EmptyCard: React.FC<emptyCardP> = ({ title, subtitle, time, id, numberOfQ }) => {
  const { t } = useTranslation();
  const { active } = useSelector((state: RootState) => state.quiz);
  const dispatch = useDispatch();

  const onButtonClick = () => {
    dispatch(setActive(true));
    dispatch(setCardId(id));
  };

  return (
    <div className={styles.root}>
      <div className={styles.root__header}>
        <h3>
          {t('emptyCard.__title')}: {title}
        </h3>
        <span>{subtitle}</span>
      </div>
      <div className={styles.root__main}>
        <span>
          {numberOfQ} {t('emptyCard.__text')} {title}
        </span>
        <time>
          {t('emptyCard.__time')}: ~{time} min
        </time>
      </div>
      <div className={styles.root__footer}>
        <Link to={`/card/${id}`}>
          <button
            onClick={() => onButtonClick()}
            className={active ? 'disabled' : styles.root__startButton}>
            <span> {t('button.__start')}</span>
          </button>
        </Link>
      </div>
    </div>
  );
};
