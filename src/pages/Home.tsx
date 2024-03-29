import React from 'react';
import i18n from '../i18n';
import { EmptyMainCard } from '../components/EmptyMainCard';
import { getSavedItems } from '../utils/getFromLs';
import { mainCard } from '../assets/mainCard';

export const Home: React.FC = () => {
  const { items } = getSavedItems();

  return (
    <>
      <div className="main">
        {mainCard
          .filter((obj) => obj.lng === i18n.resolvedLanguage)
          .slice(0, -1)
          .map((obj, i) => (
            <EmptyMainCard key={i} {...obj} />
          ))}
      </div>
      {items.length === 0 ? (
        ''
      ) : (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          {mainCard
            .filter(
              (obj) => obj.lng === i18n.resolvedLanguage && obj.navigate.includes('/continue'),
            )
            .map((obj, i) => (
              <EmptyMainCard key={i} {...obj} />
            ))}
        </div>
      )}
    </>
  );
};
