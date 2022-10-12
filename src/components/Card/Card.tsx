import React from 'react';
import { itemsT } from '../../@types';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { setDisable, setCorrectAns } from '../../redux/slices/cardSlice';
import { setStep } from '../../redux/slices/quizSlice';
import save from '../../assets/pictures/main/unsave.svg';
import unsave from '../../assets/pictures/main/save.svg';
import { useTranslation } from 'react-i18next';
import styles from './index.module.scss';
import { Link } from 'react-router-dom';

export const Card: React.FC<itemsT> = (props) => {
  const [click, setClick] = React.useState<boolean>(false);
  const { t } = useTranslation();

  const { disable, correctAns } = useSelector((state: RootState) => state.card);
  const { step, items } = useSelector((state: RootState) => state.quiz);
  const dispatch = useDispatch();

  const onVariantClick = (i: number) => {
    if (props.correct === i) {
      dispatch(setCorrectAns(correctAns + 1));
    }
    dispatch(setDisable(true));
  };

  const onStepClick = (step: number) => {
    dispatch(setStep(step + 1));
    dispatch(setDisable(false));
  };

  return (
    <div className={styles.root}>
      <div className={styles.root__header}>
        <h3>{props.title}</h3>
        <img src={click ? unsave : save} onClick={() => setClick(!click)} alt="save" width={20} />
      </div>
      <div className={styles.root__main}>
        {props.variants.map((obj, i) => (
          <button
            key={i}
            onClick={() => onVariantClick(i)}
            disabled={disable}
            className={disable ? (props.correct === i ? 'green' : 'red') : ''}>
            <span>{obj}</span>
          </button>
        ))}
      </div>
      {step === items.length - 1 ? (
        <Link to="/result" className={styles.root__footer}>
          <button onClick={() => onStepClick(step)}>
            <span>{t('button.__next')}</span>
          </button>
        </Link>
      ) : (
        <button onClick={() => onStepClick(step)} className={styles.root__footer}>
          <span>{t('button.__next')}</span>
        </button>
      )}
    </div>
  );
};
