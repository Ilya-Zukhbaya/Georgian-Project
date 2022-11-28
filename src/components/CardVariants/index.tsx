import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { Test } from '../Test';
import { TestT } from '../../@types';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { removeItems, setActive } from '../../redux/slices/quizSlice';
import { useTranslation } from 'react-i18next';

export const CardVariants: React.FC = () => {
  const dispatch = useDispatch();
  const { items, cardId } = useSelector((state: RootState) => state.quiz);
  const { value } = useSelector((state: RootState) => state.theme);
  const newArray: TestT[] = [];
  const { t } = useTranslation();
  const navigate = useNavigate();
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

    if (items.length === 0) {
      navigate('/');
    }
  }, []);

  return (
    <>
      <Link to={`/card/${cardId}`}>
        <button
          onClick={() => dispatch(setActive(true))}
          style={value === 'dark' ? { backgroundColor: '#4e4e4e' } : { backgroundColor: '#cbcbcb' }}
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
