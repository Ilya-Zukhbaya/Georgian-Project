import React from 'react';
import { testContext } from '../App';

export const Result: React.FC<testContext> = (props) => {
  return <div>Result: {props.correctAns}</div>;
};
