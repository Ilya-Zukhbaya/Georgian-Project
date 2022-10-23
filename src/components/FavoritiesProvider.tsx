import React from 'react';
import { Favorite } from './Favorite/Favorite';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

export const FavoritiesProvider = () => {
  const { type } = useSelector((state: RootState) => state.card);

  return <>{type !== undefined ? <Favorite type={type} /> : 'Error'}</>;
};
