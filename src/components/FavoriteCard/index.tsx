import React from 'react';
import { emptyCardP } from '../../@types/index';

import { useSelector } from 'react-redux';
import { setType } from '../../redux/slices/cardSlice';
import { selectTheme, useAppDispatch } from '../../redux/store';

import { Link, useLocation } from 'react-router-dom';

export const FavoriteCard: React.FC<emptyCardP> = ({ subtitle, type }) => {
  const dispatch = useAppDispatch();
  const { theme } = useSelector(selectTheme);

  const location = useLocation();

  const setTypeAndSave = () => {
    localStorage.setItem('choosenType', String(type));
    dispatch(setType(type));
  };

  return (
    <Link to={`${location.pathname}/${type}`}>
      <button
        style={theme === 'dark' ? { backgroundColor: '#4e4e4e' } : { backgroundColor: '#cbcbcb' }}
        onClick={setTypeAndSave}>
        {subtitle}
      </button>
    </Link>
  );
};
