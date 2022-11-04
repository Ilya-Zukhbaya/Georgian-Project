import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { emptyCardP } from '../../@types/index';
import { setType } from '../../redux/slices/cardSlice';
import { RootState } from '../../redux/store';

export const FavoriteCard: React.FC<emptyCardP> = ({ subtitle, type }) => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { value } = useSelector((state: RootState) => state.theme);
  const setTypeAndSave = () => {
    localStorage.setItem('choosenType', String(type));
    dispatch(setType(type));
  };

  return (
    <Link to={`${location.pathname}/${type}`}>
      <button
        style={value === 'dark' ? { backgroundColor: '#4e4e4e' } : { backgroundColor: '#cbcbcb' }}
        onClick={setTypeAndSave}>
        {subtitle}
      </button>
    </Link>
  );
};
