import React from 'react';
import { resultP } from '../@types';

export const Result: React.FC<resultP> = (props) => {
  return <div>Result: {props.correctAns}</div>;
};
