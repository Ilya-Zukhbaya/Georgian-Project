import React from 'react';
import { useTranslation } from 'react-i18next';
import { test } from '../Quiz';
import { TestContext } from '../../App';
import { Link } from 'react-router-dom';
import styles from './index.module.scss';

export const EmptyCard: React.FC<test> = (props) => {
  const { setCardId } = React.useContext(TestContext);
  const { t } = useTranslation();

  const onButtonClick = () => {
    props.setActive(true);
    setCardId(props.id);
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
        <Link to={`/card/:${props.id}`}>
          <button onClick={() => onButtonClick()} className={props.active ? 'disabled' : ''}>
            {t('button.__start')}
          </button>
        </Link>
      </div>
    </div>
  );
};
