import React from 'react';
import { TestT } from '../@types';

import { useSelector } from 'react-redux';
import { selectQuiz, selectTheme, useAppDispatch } from '../redux/store';
import { setActive, setVariant } from '../redux/slices/quizSlice';

import { Link, useLocation } from 'react-router-dom';

export const Test: React.FC<TestT> = ({ title, sub }) => {
  const dispatch = useAppDispatch();
  const { theme } = useSelector(selectTheme);
  const { cardId } = useSelector(selectQuiz);

  const location = useLocation();
  const path = location.pathname.slice(location.pathname.lastIndexOf('/') + 1);

  const onButtonClick = (title: number, sub: number) => {
    dispatch(setVariant([title, sub]));
    dispatch(setActive(true));
  };

  return (
    <Link to={`/prepo/${path}/card/${cardId}`}>
      <div
        onClick={() => onButtonClick(title, sub)}
        style={theme === 'dark' ? { backgroundColor: '#4e4e4e' } : { backgroundColor: '#cbcbcb' }}>
        {title} - {sub}
      </div>
    </Link>
  );
};
