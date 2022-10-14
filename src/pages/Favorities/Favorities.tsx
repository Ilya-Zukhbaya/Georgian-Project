import React from 'react';
import { emptyCardInfo } from '../../assets/EmptyCard';
import i18n from '../../i18n';
import styles from './index.module.scss';
import { FavoriteCard } from '../../components/FavoriteCard/FavoriteCard';

export const Favorities: React.FC = () => {
  return (
    <div className={styles.root}>
      {emptyCardInfo
        .filter((obj) => obj.lng === i18n.resolvedLanguage)
        .slice(3)
        .map((obj, i) => (
          <FavoriteCard {...obj} key={i} />
        ))}
    </div>
  );
};
