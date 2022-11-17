import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { Test } from '../Test';
import { TestT } from '../../@types';
import { Link } from 'react-router-dom';
import { setActive } from '../../redux/slices/quizSlice';

export const CardVariants: React.FC = () => {
  const dispatch = useDispatch();
  const { items, cardId } = useSelector((state: RootState) => state.quiz);
  const { value } = useSelector((state: RootState) => state.theme);
  const newArray: TestT[] = [];
  const [test, setTest] = React.useState<TestT[]>([]);

  React.useEffect(() => {
    let value = Math.ceil(items.length / 20) - 1;
    if ((value + 1) % 5 === 0) value = 10;
    for (var i = 0; i < value; i++) {
      newArray.push(
        i === 0
          ? { title: 0, sub: 20 }
          : i === value - 1
          ? { title: 20 * i + 1, sub: items.length }
          : { title: 20 * i + 1, sub: 20 * (i + 1) },
      );
    }
    setTest(newArray);
  }, []);

  return (
    <>
      <Link to={`/card/${cardId}`}>
        <button
          onClick={() => dispatch(setActive(true))}
          style={value === 'dark' ? { backgroundColor: '#4e4e4e' } : { backgroundColor: '#cbcbcb' }}
          className="prepo__header">
          20 случайных вопросов
        </button>
      </Link>
      <div className="prepo">
        {test.map((obj, i) => {
          return <Test key={i} {...obj} />;
        })}
      </div>
    </>
  );
};
