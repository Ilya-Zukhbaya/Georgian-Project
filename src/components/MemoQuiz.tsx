import React from 'react';
import { Card } from './Card/Card';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import data from '../assets/questions.json';
import { removeItems, setActiveLink, setItems } from '../redux/slices/quizSlice';
import { useNavigate } from 'react-router-dom';

export const Quiz: React.FC = () => {
  const { step, items, active, cardId } = useSelector((state: RootState) => state.quiz);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  React.useEffect(() => {
    dispatch(
      setItems(
        data
          .filter((obj) => (cardId < 3 ? obj.type[0] === cardId : obj.type[1] === cardId))
          .sort(() => Math.random() - 0.5)
          .slice(0, cardId < 3 ? 20 : data.length),
      ),
    );
    if (step === items.length && items.length !== 0) {
      navigate('/result');
    }
    dispatch(setActiveLink(false));
  }, [active]);

  React.useEffect(() => {
    if (!active) {
      dispatch(removeItems([]));
      navigate('/');
    }
  }, []);

  return (
    <>
      {items
        ? items.filter((_, i) => i === step).map((obj, i) => <Card {...obj} key={i} />)
        : 'Sorry, no questions found!'}
    </>
  );
};