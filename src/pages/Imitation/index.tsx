import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { TimeContext } from '../../App';
import { setActive } from '../../redux/slices/quizSlice';
import { RootState } from '../../redux/store';
import styles from './index.module.scss';

export const Imitation: React.FC = () => {
  const { value } = useSelector((state: RootState) => state.theme);
  const { setSeconds, setTimerActive } = React.useContext(TimeContext);
  const dispatch = useDispatch();

  const activeTimer = () => {
    setTimerActive(true);
    dispatch(setActive(true));
    setSeconds(1200000);
  };

  return (
    <div
      className={styles.root}
      style={value === 'dark' ? { backgroundColor: '#4e4e4e' } : { backgroundColor: '#cbcbcb' }}>
      <div className={styles.root__header}>
        <h3>Имитация теста</h3>
      </div>
      <div className={styles.root__main}>
        <h4>10 случайных вопросов из каждой темы</h4> <span>На выполнение дается 20 минут</span>
        <br />
        <span>
          Пропускать, сохрянять и прослушивать вопросы <b>нельзя</b>
        </span>
        <br />
        <span>
          Таймер начнет отсчет после нажатия кнопки <b>старт</b>
        </span>
      </div>
      <Link to={'/test/st'}>
        <div className={styles.root__footer}>
          <button onClick={activeTimer}>старт</button>
        </div>
      </Link>
    </div>
  );
};
