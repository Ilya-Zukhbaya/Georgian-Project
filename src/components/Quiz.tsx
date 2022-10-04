import React from 'react';
import { Card } from './Card';
import { Result } from './Result';
import { TestContext } from '../App';
import data from '../assets/questions.json';
import { EmptyCard } from './EmptyCard';

export type Array = {
  id: number;
  title: string;
  type: number;
  variants: string[];
  correct: number;
};

export type TestProps = {
  id: number;
  title: string;
  variants: string[];
  correct: number;
  step: number;
  disable: boolean;
  setDisable: (disable: boolean) => void;
  setStep: (step: number) => void;
};
export type test = {
  id: number;
  active: boolean;
  title: string;
  setActive: (active: boolean) => void;
};

export const Quiz: React.FC = () => {
  const test = [
    { id: 0, title: 'History' },
    { id: 1, title: 'Law' },
    { id: 2, title: 'Language' },
    { id: 3, title: 'History' },
    { id: 4, title: 'Law' },
    { id: 5, title: 'Language' },
  ];
  const [active, setActive] = React.useState<boolean>(false);
  React.useEffect(() => {
    setItems(
      data
        .filter((obj) => obj.type === cardId)
        .sort(() => Math.round(Math.random() * 100) - 50)
        .slice(0, data.length),
    );
  }, [active]);

  const { correctAns, setCorrentAns, cardId } = React.useContext(TestContext);
  const [disable, setDisable] = React.useState(false);
  const [items, setItems] = React.useState<Array[]>([]);
  const [step, setStep] = React.useState<number>(0);
  let question = items[step];

  function restart() {
    setActive(false);
    setStep(0);
    setCorrentAns(0);
  }

  const onStepClick = (step: number) => {
    setStep(step + 1);
    setDisable(false);
  };

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
      {active ? (
        <Card
          title={question.title}
          id={question.id}
          variants={question.variants}
          correct={question.correct}
          step={step}
          disable={disable}
          setDisable={setDisable}
          setStep={setStep}
        />
      ) : (
        test.map((_, i) => (
          <EmptyCard key={i} active={active} setActive={setActive} id={i} title={test[i].title} />
        ))
      )}
      {active ? <button onClick={() => onStepClick(step)}>Next</button> : ''}
    </>
  );
};
