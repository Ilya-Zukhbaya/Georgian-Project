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

export const Card: React.FC<itemsT> = (props) => {
  const [click, setClick] = React.useState<boolean>(false);
  const { t } = useTranslation();

  const { disable, correctAns } = useSelector((state: RootState) => state.card);
  const { step } = useSelector((state: RootState) => state.quiz);
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
      <h3>{props.title}</h3>
      {props.variants.map((obj, i) => (
        <button
          key={i}
          onClick={() => onVariantClick(i)}
          disabled={disable}
          className={disable ? (props.correct === i ? 'green' : 'red') : ''}>
          <span>{obj}</span>
        </button>
      ))}
      <img src={click ? unsave : save} onClick={() => setClick(!click)} alt="save" width={20} />
      <button onClick={() => onStepClick(step)}>{t('button.__next')}</button>
    </div>
  );
};
