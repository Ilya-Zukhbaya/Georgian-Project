import React from 'react';

import { Card } from './index';

import { useSelector } from 'react-redux';
import { selectQuiz, useAppDispatch } from '../redux/store';
import { setActiveLink, setItems } from '../redux/slices/quizSlice';

import { useNavigate } from 'react-router-dom';

export const PrepoQuiz: React.FC = () => {
  const dispatch = useAppDispatch();
  const { step, items, active, variant } = useSelector(selectQuiz);

  const navigate = useNavigate();

  React.useEffect(() => {
    dispatch(setItems(items.slice(variant[0], variant[1] + 1).sort(() => Math.random() - 0.5)));
    if (step === items.length && items.length !== 0) {
      navigate('/result');
    }
    dispatch(setActiveLink(false));
  }, [active]);

  return (
    <>
      {items
        ? items.filter((_, i) => i === step).map((obj, i) => <Card {...obj} key={i} />)
        : 'Sorry, no questions found!'}
    </>
  );
};
