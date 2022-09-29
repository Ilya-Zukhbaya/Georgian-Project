import React from 'react';
import { TestProps } from './Quiz';
import { TestContext } from '../App';

export const Card: React.FC<TestProps> = (props) => {
  const { correctAns, setCorrentAns } = React.useContext(TestContext);
  const onVariantClick = (i: number) => {
    if (props.correct === i) {
      setCorrentAns(correctAns + 1);
    }
    props.setDisable(true);
  };
  return (
    <div>
      <h3>{props.title}</h3>
      {props.variants.map((obj, i) => (
        <button
          key={i}
          onClick={() => onVariantClick(i)}
          disabled={props.disable}
          className={props.disable ? (props.correct === i ? 'green' : 'red') : ''}>
          <span>{obj}</span>
        </button>
      ))}
    </div>
  );
};
