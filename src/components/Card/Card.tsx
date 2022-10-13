import React from 'react';
import { itemsT } from '../../@types';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { setDisable, setCorrectAns, addToFavotite } from '../../redux/slices/cardSlice';
import { setStep } from '../../redux/slices/quizSlice';
import save from '../../assets/pictures/main/unsave.svg';
import unsave from '../../assets/pictures/main/save.svg';
import { useTranslation } from 'react-i18next';
import styles from './index.module.scss';
import { Link } from 'react-router-dom';
import { getFavoritesFromLs } from '../../utils/getFavoriteFromLS';

export const Card: React.FC<itemsT> = ({ id, title, correct, variants, type }) => {
  const { t } = useTranslation();

  const data = getFavoritesFromLs();
  const favoriteItems: itemsT[] = data.items;

  const { disable, correctAns, favorite } = useSelector((state: RootState) => state.card);
  const { step, items } = useSelector((state: RootState) => state.quiz);
  const dispatch = useDispatch();

  const onVariantClick = (i: number) => {
    if (correct === i) {
      dispatch(setCorrectAns(correctAns + 1));
    }
    dispatch(setDisable(true));
  };

  const addToFavorities = () => {
    localStorage.setItem('favorities', JSON.stringify(favorite));
    dispatch(addToFavotite({ id, title, correct, variants, type }));
  };

  const onStepClick = (step: number) => {
    dispatch(setStep(step + 1));
    dispatch(setDisable(false));
  };
  const removeFromFavorites = () => {
    console.log('remove');
  };

  return (
    <div className={styles.root}>
      <div className={styles.root__header}>
        <h3>{title}</h3>
        <img
          src={save}
          onClick={
            favoriteItems.find((obj) => obj.id === id) ? removeFromFavorites : addToFavorities
          }
          alt="save"
          width={20}
        />
      </div>
      <div className={styles.root__main}>
        {variants.map((obj, i) => (
          <button
            key={i}
            onClick={() => onVariantClick(i)}
            disabled={disable}
            className={disable ? (correct === i ? 'green' : 'red') : ''}>
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
