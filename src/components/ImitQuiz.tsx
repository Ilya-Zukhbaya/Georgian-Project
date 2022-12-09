import React from 'react';

import data from '../assets/questions.json';

import { Card } from './index';
import { CountDown } from './index';

import { useSelector } from 'react-redux';
import { selectCard, selectQuiz, useAppDispatch } from '../redux/store';
import { removeTestItems, setActiveLink, setTestItems } from '../redux/slices/quizSlice';

import { useNavigate } from 'react-router-dom';

import { useTranslation } from 'react-i18next';

export const ImitQuiz: React.FC = () => {
  const dispatch = useAppDispatch();
  const { step, active, testItems } = useSelector(selectQuiz);
  const { incorrectAns } = useSelector(selectCard);

  const { t } = useTranslation();

  const navigate = useNavigate();

  React.useEffect(() => {
    incorrectAns.map((obj) => {
      if (obj.incAns > 3) {
        navigate('/result');
      }
    });
  }, [step]);

  React.useEffect(() => {
    for (let i = 0; i < 3; i++) {
      dispatch(
        setTestItems(
          data
            .filter((obj) => obj.type[0] === i)
            .sort(() => Math.random() - 0.5)
            .slice(0, 10),
        ),
      );
    }

    if (step === testItems.length && testItems.length !== 0) {
      navigate('/result');
    }
    dispatch(setActiveLink(false));
  }, [active]);

  React.useEffect(() => {
    if (!active) {
      dispatch(removeTestItems([]));
      navigate('/');
    }
  }, []);

  return (
    <div>
      <div className="timer">
        {t('timer.__left')}
        <b>
          <CountDown hours={0} minutes={20} />
        </b>
      </div>
      {testItems
        ? testItems.filter((_, i) => i === step).map((obj, i) => <Card {...obj} key={i} />)
        : 'Sorry, no questions found!'}
    </div>
  );
};
