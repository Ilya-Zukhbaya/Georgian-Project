import React from 'react';
import { emptyCardInfo } from '../../../assets/EmptyCard';
import i18n from '../../../i18n';
import styles from './index.module.scss';
import { FavoriteCard } from '../../../components/FavoriteCard/FavoriteCard';
import { useDispatch } from 'react-redux';
import { removeAllFromFavorite } from '../../../redux/slices/cardSlice';
import { useTranslation } from 'react-i18next';

export const Favorities: React.FC = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const onRemoveClick = () => {
    if (window.confirm('Are you sure you want to remove questions?')) {
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
      <button onClick={onRemoveClick} className={styles.root__footer}>
        {t('saved.__clear')}
      </button>
    </div>
  );
};
