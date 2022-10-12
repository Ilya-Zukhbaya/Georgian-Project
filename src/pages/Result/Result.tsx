import React from 'react';
import styles from './index.module.scss';

import { setActive, setStep } from '../../redux/slices/quizSlice';
import { setCorrectAns } from '../../redux/slices/cardSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from '../../redux/store';

export const Result: React.FC = () => {
  const dispatch = useDispatch();
  const { correctAns } = useSelector((state: RootState) => state.card);
  const { items, cardId } = useSelector((state: RootState) => state.quiz);

  const restart = () => {
    dispatch(setActive(false));
    dispatch(setStep(0));
    dispatch(setCorrectAns(0));
  };

  return (
    <div className={styles.root}>
      <h1>
        Result: {correctAns} correct answers from {items.length} questions (
        {Math.floor((correctAns / items.length) * 100)} %)
      </h1>
      <div className={styles.root__buttonContainer}>
        <Link to={`/card/${cardId}`}>
          <button onClick={restart}>
            <span>Try again</span>
          </button>
        </Link>
        <Link to="/">
          <button onClick={restart}>
            <span>To main page</span>
          </button>
        </Link>
      </div>
    </div>
  );
};
