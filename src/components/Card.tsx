import React from 'react';
import { Array } from './Quiz';
import { TestContext } from '../App';

export const Card: React.FC<Array> = ({ title, variants, correct }) => {
  const { correctAns, setCorrentAns } = React.useContext(TestContext);
  return (
    <div>
      <h3>{title}</h3>
      {variants.map((obj, i) => (
        <button key={i} onClick={() => (correct === i ? setCorrentAns(correctAns + 1) : '')}>
          {obj}
        </button>
      ))}
    </div>
  );
};
