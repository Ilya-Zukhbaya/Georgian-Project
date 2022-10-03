import React from 'react';
import { test } from './Quiz';

export const EmptyCard: React.FC<test> = (props) => {
  return (
    <button onClick={() => props.setActive(true)} className={props.active ? 'disabled' : ''}>
      Start
    </button>
  );
};
