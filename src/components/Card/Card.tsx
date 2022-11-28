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
  setIncorrectAns,
} from '../../redux/slices/cardSlice';
import { Info } from '../Info';
import { setAnswer, setIncItems, setStep } from '../../redux/slices/quizSlice';
import { ReactComponent as Save } from '../../assets/pictures/main/unsave.svg';
import { ReactComponent as Unsave } from '../../assets/pictures/main/save.svg';
import { ReactComponent as Inf } from '../../assets/pictures/main/info.svg';
import { useTranslation } from 'react-i18next';
import styles from './index.module.scss';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { getFavoritesFromLs } from '../../utils/getFromLs';
import { itemT } from '../../@types';

export const Card: React.FC<itemsT> = ({ id, title, correct, variants, type, audio, answered }) => {
  React.useEffect(() => {
    if (audio) {
      const newId = id.toString();
      setSrc(`${process.env.REACT_APP_URL}${type[0] + 1}/type${type[0] + 1}Q${newId}.mp3`);
    }
  }, [id]);

  const [infoActive, setInfoActive] = React.useState<boolean>(false);
  const { t } = useTranslation();
  const data = getFavoritesFromLs();
  const favoriteItems: itemsT[] = data.items;
  const { disable, correctAns, favorite, progress } = useSelector((state: RootState) => state.card);
  const { step, items, testItems } = useSelector((state: RootState) => state.quiz);
  const { value } = useSelector((state: RootState) => state.theme);
  const [src, setSrc] = React.useState('');
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (location.pathname.includes('/test/st') && step === testItems.length - 1) {
      navigate('/result');
    }
  }, [step]);

  const path = location.pathname.slice(location.pathname.lastIndexOf('/') + 1);

  const onExitClick = () => {
    if (location.pathname.includes('/continue')) {
      if (window.confirm(t('window.__confirmExit'))) {
        localStorage.setItem('ca', JSON.stringify(correctAns));
        localStorage.setItem('step', JSON.stringify(step));
        localStorage.setItem('savedItems', JSON.stringify(items));
        dispatch(setStep(0));
        dispatch(setCorrectAns(0));
        navigate('/');
      }
    }

    if (location.pathname.includes('/card') && Number(path) >= 3) {
      if (window.confirm(t('window.__confirmExit'))) {
        localStorage.setItem('ca', JSON.stringify(correctAns));
        localStorage.setItem('step', JSON.stringify(step));
        localStorage.setItem('savedItems', JSON.stringify(items));
        navigate('/');
      }
    }

    if (location.pathname.includes('/card') && Number(path) < 3) {
      if (window.confirm(t('window.__confirmExit'))) {
        navigate('/');
      }
    }
  };

  const onVariantClick = (i: number, obj: string, choosen: string) => {
    const item: itemT = {
      id,
      title,
      correct,
      variants,
      type,
      answered,
      correctVariant: obj,
      choosenVariant: choosen,
    };

    if (location.pathname.includes('/test/st')) {
      dispatch(setStep(step + 1));
    }

    if (correct === i) {
      dispatch(setCorrectAns(correctAns + 1));
      localStorage.setItem('progress', JSON.stringify(progress));
      dispatch(addToProgress(item));
    }

    if (correct !== i && location.pathname.includes('test/st')) {
      dispatch(setIncorrectAns(type[0]));
    }

    if (correct !== i) {
      dispatch(setIncItems(item));
    }

    if (!location.pathname.includes('test/st')) {
      dispatch(setDisable(true));
      dispatch(setAnswer(true));
    }
  };
  const addToFavorities = () => {
    localStorage.setItem('favorities', JSON.stringify(favorite));
    dispatch(addToFavorite({ id, title, correct, variants, type, answered }));
  };

  const onStepClick = (step: number) => {
    dispatch(setStep(step + 1));

    if (!location.pathname.includes('test/st')) {
      if (items[step + 1].answered === true) {
        dispatch(setDisable(true));
      } else {
        dispatch(setDisable(false));
      }
    }
  };

  const onBackClick = (step: number) => {
    if (step !== 0) {
      dispatch(setStep(step - 1));
    }

    if (items[step - 1].answered === true) {
      dispatch(setDisable(true));
    }
  };

  const removeFromFavorities = () => {
    dispatch(removeFromFavorite(id));
  };

  return (
    <div className={styles.root}>
      <div className={styles.root__progressBar}>
        <div className={styles.root__progressContainer}>
          <b className={styles.root__progressBar__progress}>{t('header.__progress')}: </b>
          <span>
            {step + 1} / {location.pathname.includes('/test') ? testItems.length : items.length}
          </span>
          {favoriteItems.find((obj) => obj.id === id) ? (
            <Unsave onClick={removeFromFavorities} fill={value === 'light' ? '#333' : '#b3b3b3'} />
          ) : (
            <Save onClick={addToFavorities} fill={value === 'light' ? '#333' : '#b3b3b3'} />
          )}
        </div>
        <div>
          {location.pathname.includes('/test/st') ? (
            ''
          ) : audio ? (
            <>
              <Inf width={30} height={30} onClick={() => setInfoActive(!infoActive)} />
              <audio controls preload="auto" crossOrigin="anonymous" src={src}></audio>
            </>
          ) : (
            <Inf width={30} height={30} onClick={() => setInfoActive(!infoActive)} />
          )}
        </div>
        {infoActive ? <Info /> : ''}
      </div>
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
            onClick={() => onVariantClick(i, variants[correct], variants[i])}
            disabled={disable}
            className={disable ? (correct === i ? 'green button' : 'red button') : 'button'}>
            <span>{obj}</span>
          </button>
        ))}
      </div>
      {location.pathname.includes('/test') ? (
        ''
      ) : step === items.length - 1 ? (
        <div>
          <Link to="/result">
            <button
              style={
                value === 'dark'
                  ? { backgroundColor: 'rgb(112 112 112)' }
                  : { backgroundColor: 'rgb(183 183 183)' }
              }
              onClick={() => onStepClick(step)}
              className={styles.root__footer}>
              <span>{t('button.__show')}</span>
            </button>
          </Link>
        </div>
      ) : (
        <div>
          <div className={styles.root__buttonContainer}>
            <button
              style={
                value === 'dark'
                  ? { backgroundColor: 'rgb(112 112 112)' }
                  : { backgroundColor: 'rgb(183 183 183)' }
              }
              onClick={() => onBackClick(step)}
              className={styles.root__footer}>
              <span>{t('button.__prev')}</span>
            </button>
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
          </div>
          <div className={styles.root__outButton}>
            <button
              style={
                value === 'dark'
                  ? { backgroundColor: 'rgb(112 112 112)' }
                  : { backgroundColor: 'rgb(183 183 183)' }
              }
              onClick={onExitClick}
              className={styles.root__footer}>
              <span>{t('button.__exit')}</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
