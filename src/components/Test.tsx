import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { TestT } from '../@types';
import { setVariant } from '../redux/slices/quizSlice';
import { Link, useLocation } from 'react-router-dom';

export const Test: React.FC<TestT> = ({ title, sub }) => {
  const { value } = useSelector((state: RootState) => state.theme);
  const { cardId } = useSelector((state: RootState) => state.quiz);
  const location = useLocation();
  const dispatch = useDispatch();
  const path = location.pathname.slice(location.pathname.lastIndexOf('/') + 1);

  const onButtonClick = (title: number, sub: number) => {
    dispatch(setVariant([title, sub]));
  };

  return (
    <Link to={`/prepo/${path}/card/${cardId}`}>
      <div
        onClick={() => onButtonClick(title, sub)}
        style={value === 'dark' ? { backgroundColor: '#4e4e4e' } : { backgroundColor: '#cbcbcb' }}>
        {title} - {sub}
      </div>
    </Link>
  );
};
