import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { emptyCardP } from '../../@types/index';
import { setType } from '../../redux/slices/cardSlice';

export const FavoriteCard: React.FC<emptyCardP> = ({ subtitle, type }) => {
  const location = useLocation();
  const dispatch = useDispatch();
  const setTypeAndSave = () => {
    localStorage.setItem('choosenType', String(type));
    dispatch(setType(type));
  };

  return (
    <Link to={`${location.pathname}/${type}`}>
      <button onClick={setTypeAndSave}>{subtitle}</button>
    </Link>
  );
};
