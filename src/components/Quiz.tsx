import React from 'react';
import { Card } from './Card/Card';
import { Result } from './Result';
import { useSelector, useDispatch } from 'react-redux';
import data from '../assets/questions.json';
import { RootState } from '../redux/store';
import { setItems, setStep, setActive } from '../redux/slices/quizSlice';
import { Header } from './Header/Header';
import { Footer } from './Footer/Footer';
import { setCorrectAns } from '../redux/slices/cardSlice';
import { Link } from 'react-router-dom';

export const Quiz: React.FC = () => {
  const { step, items, active, cardId } = useSelector((state: RootState) => state.quiz);
  const { correctAns } = useSelector((state: RootState) => state.card);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(
      setItems(
        data
          .filter((obj) => obj.type === cardId)
          .sort(() => Math.round(Math.random() * 100) - 50)
          .slice(0, data.length),
      ),
    );
  }, [active]);

  const restart = () => {
    dispatch(setActive(false));
    dispatch(setStep(0));
    dispatch(setCorrectAns(0));
  };

  if (step === items.length) {
    return (
      <div>
        <Result correctAns={correctAns} />
        <button onClick={restart}>Restart</button>
        <Link to="/">
          <button onClick={restart}>to main page</button>
        </Link>
      </div>
    );
  }

  return (
    <div>
      <Header />
      {items
        ? items.filter((_, i) => i === step).map((obj, i) => <Card {...obj} key={i} />)
        : 'Hello'}
      <Footer />
    </div>
  );
};
