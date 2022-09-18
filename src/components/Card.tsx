import React from 'react';
import { Array } from './Quiz';

export const Card: React.FC<Array> = ({ title }) => {
  return <div>{title}</div>;
};
