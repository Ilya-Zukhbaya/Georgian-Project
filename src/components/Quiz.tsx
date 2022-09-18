import React from 'react';
import { Card } from './Card';
import { Result } from './Result';

export type Array = {
  id: number;
  title: string;
};

export const Quiz: React.FC = () => {
  let array: Array[] = [
    {
      id: 0,
      title: 'hello',
    },
    {
      id: 1,
      title: 'world',
    },
    {
      id: 2,
      title: 'Hi',
    },
    {
      id: 3,
      title: 'my Name',
    },
    {
      id: 4,
      title: 'Ilya',
    },
    {
      id: 5,
      title: 'Ne Pere',
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
  }

  if (step === items.length) {
    return (
      <>
        <Result />
        <button onClick={restart}>Restart</button>
      </>
    );
  }

  return (
    <>
      {active ? <p>{question.title}</p> : ''}
      <button onClick={() => setActive(true)}>Start</button>
      {active ? <button onClick={() => setStep(step + 1)}>Next</button> : ''}
    </>
  );
};
