import React from 'react';
import { Card } from './Card/Card';
import { Result } from '../pages/Result/Result';
import { useSelector, useDispatch } from 'react-redux';
import data from '../assets/questions.json';
import { RootState } from '../redux/store';
import { setItems } from '../redux/slices/quizSlice';

export const Quiz: React.FC = () => {
  const { step, items, active, cardId } = useSelector((state: RootState) => state.quiz);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(
      setItems(
        data
          .filter((obj) => obj.type === cardId)
          .sort(() => Math.random() - 0.5)
          .slice(0, data.length),
      ),
    );
  }, [active]);

  if (step === items.length) {
    return <Result />;
  }

  return (
    <div>
      {items
        ? items.filter((_, i) => i === step).map((obj, i) => <Card {...obj} key={i} />)
        : 'Hello'}
    </div>
  );
};
