import React from 'react';
import i18n from '../../i18n';
import { emptyCardInfo } from '../../assets/EmptyCard';
import { EmptyCard } from '../../components/index';

export const Prepo: React.FC = () => {
  return (
    <div className="memo">
      {emptyCardInfo
        .filter((obj) => obj.lng === i18n.resolvedLanguage && obj.numberOfQ === 20)
        .map((obj, i) => (
          <EmptyCard key={i} {...obj} />
        ))}
    </div>
  );
};
