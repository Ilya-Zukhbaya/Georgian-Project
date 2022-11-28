import React from 'react';
import styles from './index.module.scss';

import {
  removeIncItems,
  removeItems,
  removeTestItems,
  setActive,
  setStep,
} from '../../redux/slices/quizSlice';
import { removeIncorrectAns, setCorrectAns } from '../../redux/slices/cardSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from '../../redux/store';
import { useTranslation } from 'react-i18next';
import { IncResult } from '../../components/IncResult';

export const Result: React.FC = () => {
  const { t } = useTranslation();

  const { correctAns } = useSelector((state: RootState) => state.card);
  const { items, testItems, incItems } = useSelector((state: RootState) => state.quiz);

  const dispatch = useDispatch();

  const restart = () => {
    dispatch(setActive(false));
    dispatch(setStep(0));
    dispatch(setCorrectAns(0));
    dispatch(removeIncorrectAns());
    dispatch(removeTestItems([]));
    dispatch(removeItems([]));
    dispatch(removeIncItems([]));
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
