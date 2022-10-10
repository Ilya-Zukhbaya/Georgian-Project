import React from 'react';
import { useTranslation } from 'react-i18next';
import { emptyCardP } from '../../@types';
import { Link } from 'react-router-dom';
import styles from './index.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { setActive, setCardId } from '../../redux/slices/quizSlice';
import { RootState } from '../../redux/store';

export const EmptyCard: React.FC<emptyCardP> = (props) => {
  const { t } = useTranslation();
  const { active } = useSelector((state: RootState) => state.quiz);
  const dispatch = useDispatch();

  const onButtonClick = () => {
    dispatch(setActive(true));
    dispatch(setCardId(props.id));
  };

  return (
    <div className={styles.root}>
      <div className={styles.root__header}>
        <h3>title: {props.title}</h3>
        <span>{props.subtitle}</span>
      </div>
      <div className={styles.root__main}>
        <span>
          {props.numberOfQ} random questions from {props.title}
        </span>
        <time>time: ~{props.time} min</time>
      </div>
      <div className={styles.root__footer}>
        <Link to={`/card/${props.id}`}>
          <button onClick={() => onButtonClick()} className={active ? 'disabled' : ''}>
            {t('button.__start')}
          </button>
        </Link>
      </div>
    </div>
  );
};
