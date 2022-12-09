import React from 'react';

import { TestT } from '../../@types';

import { Test } from '../index';

import { useSelector } from 'react-redux';
import { selectQuiz, selectTheme, useAppDispatch } from '../../redux/store';
import { setActive } from '../../redux/slices/quizSlice';

import { Link, useNavigate } from 'react-router-dom';

import { useTranslation } from 'react-i18next';

export const CardVariants: React.FC = () => {
  const dispatch = useAppDispatch();
  const { items, cardId } = useSelector(selectQuiz);
  const { theme } = useSelector(selectTheme);

  const [test, setTest] = React.useState<TestT[]>([]);
  const newArray: TestT[] = [];

  const { t } = useTranslation();

  const navigate = useNavigate();

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

    if (items.length === 0) {
      navigate('/');
    }
  }, []);

  return (
    <>
      <Link to={`/card/${cardId}`}>
        <button
          onClick={() => dispatch(setActive(true))}
          style={theme === 'dark' ? { backgroundColor: '#4e4e4e' } : { backgroundColor: '#cbcbcb' }}
          className="prepo__header">
          {t('button.__randomQ')}
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
