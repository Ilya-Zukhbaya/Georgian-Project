import React from 'react';

import { Card } from './index';

import { useSelector } from 'react-redux';
import { setCorrectAns } from '../redux/slices/cardSlice';
import { setItems, setStep } from '../redux/slices/quizSlice';
import { selectQuiz, useAppDispatch } from '../redux/store';

import { getSavedItems } from '../utils/getFromLs';

export const ContQuiz: React.FC = () => {
  const dispatch = useAppDispatch();
  const { active, items, step } = useSelector(selectQuiz);

  if (step === items.length - 1) {
    localStorage.setItem('savedItems', JSON.stringify([]));
  }

  React.useEffect(() => {
    const { items, currentStep, correctAns } = getSavedItems();
    dispatch(setItems(items));
    dispatch(setCorrectAns(correctAns));
    dispatch(setStep(currentStep));
  }, [active]);

  return (
    <>
      {items ? (
        items.filter((_, i) => i === step).map((obj, i) => <Card {...obj} key={i} />)
      ) : (
        <div>Sorry, no questions found!</div>
      )}
    </>
  );
};
