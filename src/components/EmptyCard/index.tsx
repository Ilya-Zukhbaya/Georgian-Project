import React from 'react';
import styles from './index.module.scss';
import { emptyCardP } from '../../@types';

import data from '../../assets/questions.json';

import { useSelector } from 'react-redux';
import { setActive, setCardId, setItems } from '../../redux/slices/quizSlice';
import { selectQuiz, selectTheme, useAppDispatch } from '../../redux/store';

import { Link } from 'react-router-dom';

import { useTranslation } from 'react-i18next';

export const EmptyCard: React.FC<emptyCardP> = ({
  title,
  time,
  id,
  numberOfQ,
  subtitle,
  navTitle,
}) => {
  const dispatch = useAppDispatch();
  const { active } = useSelector(selectQuiz);
  const { theme } = useSelector(selectTheme);

  const { t } = useTranslation();

  const onButtonClick = () => {
    dispatch(setActive(true));
    dispatch(setCardId(id));
  };

  const onCardVariantClick = () => {
    dispatch(setCardId(id));
    dispatch(setItems(data.filter((obj) => (id < 3 ? obj.type[0] === id : obj.type[1] === id))));
  };

  return (
    <div
      className={styles.root}
      style={theme === 'dark' ? { backgroundColor: '#4e4e4e' } : { backgroundColor: '#cbcbcb' }}>
      <div className={styles.root__header}>
        <h3>{subtitle}</h3>
      </div>
      <div className={styles.root__main}>
        <span>
          {numberOfQ} {t('emptyCard.__text')} {t('emptyCard.__from')} {title}
        </span>
        <time>
          {t('emptyCard.__time')}: ~{time} min
        </time>
      </div>
      <div className={styles.root__footer}>
        {numberOfQ < 200 ? (
          <Link to={`/prepo/${navTitle}`}>
            <button
              style={
                theme === 'dark'
                  ? { backgroundColor: 'rgb(112 112 112)' }
                  : { backgroundColor: 'rgb(183 183 183)' }
              }
              onClick={() => onCardVariantClick()}
              className={active ? 'disabled' : styles.root__startButton}>
              <span> {t('button.__start')}</span>
            </button>
          </Link>
        ) : (
          <Link to={`/card/${id}`}>
            <button
              style={
                theme === 'dark'
                  ? { backgroundColor: 'rgb(112 112 112)' }
                  : { backgroundColor: 'rgb(183 183 183)' }
              }
              onClick={() => onButtonClick()}
              className={active ? 'disabled' : styles.root__startButton}>
              <span> {t('button.__start')}</span>
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};
