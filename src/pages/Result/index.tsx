import React from 'react';
import styles from './index.module.scss';

import { useSelector } from 'react-redux';
import * as Quiz from '../../redux/slices/quizSlice';
import { selectCard, selectQuiz, useAppDispatch } from '../../redux/store';
import { removeIncorrectAns, setCorrectAns } from '../../redux/slices/cardSlice';

import { useTranslation } from 'react-i18next';

import { Link } from 'react-router-dom';

import { IncResult } from '../../components/index';

export const Result: React.FC = () => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  const { correctAns } = useSelector(selectCard);
  const { items, testItems, incItems } = useSelector(selectQuiz);

  const restart = () => {
    dispatch(Quiz.setActive(false));
    dispatch(Quiz.setStep(0));
    dispatch(setCorrectAns(0));
    dispatch(removeIncorrectAns());
    dispatch(Quiz.removeTestItems([]));
    dispatch(Quiz.removeItems([]));
    dispatch(Quiz.removeIncItems([]));
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
      <div>
        {t('result.__how')} {incItems.length} {t('result.__how2')}:
        <div>
          <div className={styles.root__incResult}>
            {incItems.map((obj, i) => (
              <IncResult {...obj} key={i} />
            ))}
          </div>
        </div>
      </div>
      <div className={styles.root__buttonContainer}>
        <Link to="/">
          <button onClick={restart}>
            <span>{t('button.__tomain')}</span>
          </button>
        </Link>
      </div>
    </div>
  );
};
