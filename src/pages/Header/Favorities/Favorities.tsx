import React from 'react';
import { emptyCardInfo } from '../../../assets/EmptyCard';
import i18n from '../../../i18n';
import styles from './index.module.scss';
import { FavoriteCard } from '../../../components/FavoriteCard/FavoriteCard';
import { useDispatch, useSelector } from 'react-redux';
import { removeAllFromFavorite } from '../../../redux/slices/cardSlice';
import { useTranslation } from 'react-i18next';
import { RootState } from '../../../redux/store';

export const Favorities: React.FC = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { value } = useSelector((state: RootState) => state.theme);

  const onRemoveClick = () => {
    if (window.confirm(t('window.__confirmFavorite'))) {
      localStorage.removeItem('favorite');
      dispatch(removeAllFromFavorite());
    }
  };

  return (
    <div className={styles.root}>
      <h1>{t('saved.__total')}</h1>
      <div>
        {emptyCardInfo
          .filter((obj) => obj.lng === i18n.resolvedLanguage)
          .slice(3)
          .map((obj, i) => (
            <FavoriteCard {...obj} key={i} />
          ))}
      </div>
      <button
        style={
          value === 'dark'
            ? { backgroundColor: 'rgb(112 112 112)' }
            : { backgroundColor: 'rgb(183 183 183)' }
        }
        onClick={onRemoveClick}
        className={styles.root__footer}>
        {t('saved.__clear')}
      </button>
    </div>
  );
};
