import React from 'react';
import styles from './index.module.scss';

import { setActive, setStep } from '../../redux/slices/quizSlice';
import { setCorrectAns } from '../../redux/slices/cardSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from '../../redux/store';
import { useTranslation } from 'react-i18next';

export const Result: React.FC = () => {
  const { t } = useTranslation();

  const { correctAns } = useSelector((state: RootState) => state.card);
  const { items, cardId, testItems } = useSelector((state: RootState) => state.quiz);

  const dispatch = useDispatch();

  const restart = () => {
    dispatch(setActive(false));
    dispatch(setStep(0));
    dispatch(setCorrectAns(0));
  };

  return (
    <div className={styles.root}>
      <h1>
        {t('result.__result')}: {correctAns} {t('result.__correct')}{' '}
        {items.length === 0 ? testItems.length : items.length} {t('result.__questions')} (
        {correctAns === 0
          ? '0'
          : items.length === 0
          ? Math.floor((correctAns / testItems.length) * 100)
          : Math.floor((correctAns / items.length) * 100)}
        %)
      </h1>
      <div className={styles.root__buttonContainer}>
        <Link to={`/card/${cardId}`}>
          <button onClick={restart}>
            <span>{t('button.__try')}</span>
          </button>
        </Link>
        <Link to="/">
          <button onClick={restart}>
            <span>{t('button.__tomain')}</span>
          </button>
        </Link>
      </div>
    </div>
  );
};
