import React from 'react';

import { Favorite } from './index';

import { useSelector } from 'react-redux';
import { selectCard } from '../redux/store';

export const FavoritiesProvider: React.FC = () => {
  const { type } = useSelector(selectCard);

  return <>{type !== undefined ? <Favorite type={type} /> : 'Error'}</>;
};
