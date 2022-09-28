import React from 'react';
import { Card } from './Card';
import { Result } from './Result';
import { TestContext } from '../App';

export type Array = {
  id: number;
  title: string;
  variants: string[];
  correct: number;
};

export const Quiz: React.FC = () => {
  const { correctAns, setCorrentAns } = React.useContext(TestContext);
  let array: Array[] = [
    {
      id: 0,
      title: 'hello',
      variants: ['3', '2', '3'],
      correct: 1,
    },
    {
      id: 1,
      title: 'world',
      variants: ['4', '2', '3'],
      correct: 0,
    },
    {
      id: 2,
      title: 'Hi',
      variants: ['5', '2', '3'],
      correct: 2,
    },
    {
      id: 3,
      title: 'my Name',
      variants: ['6', '2', '3'],
      correct: 0,
    },
    {
      id: 4,
      title: 'Ilya',
      variants: ['7', '2', '3'],
      correct: 1,
    },
    {
      id: 5,
      title: 'Ne Pere',
      variants: ['8', '2', '3'],
      correct: 2,
    },
  ];
  const [active, setActive] = React.useState<boolean>(false);
  const [items, setItems] = React.useState<Array[]>([]);
  const [step, setStep] = React.useState<number>(0);
  let question = items[step];

  React.useEffect(() => {
    setItems(array.sort(() => Math.random() - 0.5));
  }, [active]);

  function restart() {
    setActive(false);
    setStep(0);
    setCorrentAns(0);
  }

  if (step === items.length) {
    return (
      <>
        <Result correctAns={correctAns} />
        <button onClick={restart}>Restart</button>
      </>
    );
  }

  return (
    <>
      {active ? <Card {...question} /> : ''}
      <button onClick={() => setActive(true)}>Start</button>
      {active ? <button onClick={() => setStep(step + 1)}>Next</button> : ''}
    </>
  );
};