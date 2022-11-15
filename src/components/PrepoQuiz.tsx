import React from 'react';
import { Card } from './Card/Card';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import { setItems } from '../redux/slices/quizSlice';
import { useNavigate } from 'react-router-dom';

export const PrepoQuiz: React.FC = () => {
  const { step, items, active, variant } = useSelector((state: RootState) => state.quiz);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  React.useEffect(() => {
    dispatch(setItems(items.slice(variant[0], variant[1] + 1).sort(() => Math.random() - 0.5)));
    if (step === items.length && items.length !== 0) {
      navigate('/result');
    }
  }, [active]);
  return (
    <div>
      {items
        ? items.filter((_, i) => i === step).map((obj, i) => <Card {...obj} key={i} />)
        : 'Sorry, no questions found!'}
    </div>
  );
};
