import React from 'react';
import { itemsT } from '../../@types';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import {
  setDisable,
  setCorrectAns,
  addToFavorite,
  addToProgress,
  removeFromFavorite,
} from '../../redux/slices/cardSlice';
import { setStep } from '../../redux/slices/quizSlice';
import { ReactComponent as Save } from '../../assets/pictures/main/unsave.svg';
import { ReactComponent as Unsave } from '../../assets/pictures/main/save.svg';
import { useTranslation } from 'react-i18next';
import styles from './index.module.scss';
import { Link } from 'react-router-dom';
import { getFavoritesFromLs } from '../../utils/getFromLs';

export const Card: React.FC<itemsT> = ({ id, title, correct, variants, type, audio }) => {
  React.useEffect(() => {
    if (audio) {
      const newId = id.toString();
      setSrc(`${process.env.REACT_APP_URL}${type[0] + 1}/type${type[0] + 1}Q${newId}.mp3`);
    }
  }, [id]);

  const { t } = useTranslation();
  const data = getFavoritesFromLs();
  const favoriteItems: itemsT[] = data.items;
  const { disable, correctAns, favorite, progress } = useSelector((state: RootState) => state.card);
  const { step, items } = useSelector((state: RootState) => state.quiz);
  const { value } = useSelector((state: RootState) => state.theme);
  const [src, setSrc] = React.useState('');
  const dispatch = useDispatch();

  const onVariantClick = (i: number) => {
    const item = { id, title, correct, variants, type };

    if (correct === i) {
      dispatch(setCorrectAns(correctAns + 1));
      localStorage.setItem('progress', JSON.stringify(progress));
      dispatch(addToProgress(item));
    }
    dispatch(setDisable(true));
  };

  const addToFavorities = () => {
    localStorage.setItem('favorities', JSON.stringify(favorite));
    dispatch(addToFavorite({ id, title, correct, variants, type }));
  };

  const onStepClick = (step: number) => {
    dispatch(setStep(step + 1));
    dispatch(setDisable(false));
  };
  const removeFromFavorities = () => {
    dispatch(removeFromFavorite(id));
  };

  return (
    <div className={styles.root}>
      <span className={styles.root__progressBar}>
        <div>
          <b>{t('header.__progress')}: </b>
          <span>
            {step + 1} / {items.length}
          </span>
          {favoriteItems.find((obj) => obj.id === id) ? (
            <Unsave onClick={removeFromFavorities} fill={value === 'light' ? '#333' : '#b3b3b3'} />
          ) : (
            <Save onClick={addToFavorities} fill={value === 'light' ? '#333' : '#b3b3b3'} />
          )}
        </div>
        {audio ? <audio controls preload="auto" crossOrigin="anonymous" src={src}></audio> : ''}
      </span>
      <div className={styles.root__header}>
        <h3>{title}</h3>
      </div>
      <div className={styles.root__main}>
        {variants.map((obj, i) => (
          <button
            style={
              value === 'dark' ? { backgroundColor: '#4e4e4e' } : { backgroundColor: '#cbcbcb' }
            }
            key={i}
            onClick={() => onVariantClick(i)}
            disabled={disable}
            className={disable ? (correct === i ? 'green button' : 'red button') : 'button'}>
            <span>{obj}</span>
          </button>
        ))}
      </div>
      {step === items.length - 1 ? (
        <Link to="/result" className={styles.root__footer}>
          <button
            style={
              value === 'dark'
                ? { backgroundColor: 'rgb(112 112 112)' }
                : { backgroundColor: 'rgb(183 183 183)' }
            }
            onClick={() => onStepClick(step)}>
            <span>{t('button.__next')}</span>
          </button>
        </Link>
      ) : (
        <button
          style={
            value === 'dark'
              ? { backgroundColor: 'rgb(112 112 112)' }
              : { backgroundColor: 'rgb(183 183 183)' }
          }
          onClick={() => onStepClick(step)}
          className={styles.root__footer}>
          <span>{t('button.__next')}</span>
        </button>
      )}
    </div>
  );
};
