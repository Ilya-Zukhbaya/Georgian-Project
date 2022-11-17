import React from 'react';
import { Card } from './Card/Card';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import data from '../assets/questions.json';
import { removeTestItems, setTestItems } from '../redux/slices/quizSlice';
import { useNavigate } from 'react-router-dom';
import { TimeContext } from '../App';

export const ImitQuiz: React.FC = () => {
  const { step, active, testItems } = useSelector((state: RootState) => state.quiz);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { seconds, timerActive, setSeconds, setTimerActive } = React.useContext(TimeContext);

  React.useEffect(() => {
    if (seconds > 0 && timerActive) {
      setTimeout(setSeconds, 100, seconds - 1);
    } else {
      setTimerActive(false);
    }
  }, [seconds, timerActive]);

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
  }, [active]);

  React.useEffect(() => {
    if (!active) {
      dispatch(removeTestItems([]));
      navigate('/');
    }
  }, []);

  return (
    <div>
      {Math.floor(seconds / 60000)} {seconds}
      {testItems
        ? testItems.filter((_, i) => i === step).map((obj, i) => <Card {...obj} key={i} />)
        : 'Sorry, no questions found!'}
    </div>
  );
};
