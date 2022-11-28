import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCorrectAns } from '../redux/slices/cardSlice';
import { setItems, setStep } from '../redux/slices/quizSlice';
import { RootState } from '../redux/store';
import { getSavedItems } from '../utils/getFromLs';
import { Card } from './Card/Card';

export const ContQuiz: React.FC = () => {
  const { active, items, step } = useSelector((state: RootState) => state.quiz);
  const dispatch = useDispatch();

  React.useEffect(() => {
    const { items, currentStep, correctAns } = getSavedItems();
    dispatch(setItems(items));
    dispatch(setCorrectAns(correctAns));
    dispatch(setStep(currentStep));
  }, [active]);

  return (
    <>
      {items
        ? items.filter((_, i) => i === step).map((obj, i) => <Card {...obj} key={i} />)
        : 'Sorry, no questions found!'}
    </>
  );
};
