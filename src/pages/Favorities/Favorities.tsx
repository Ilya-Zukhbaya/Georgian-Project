import React from 'react';
import { useSelector } from 'react-redux';
import { itemsT } from '../../@types';
import { RootState } from '../../redux/store';
import { getFavoritesFromLs } from '../../utils/getFavoriteFromLS';

export const Favorities: React.FC = () => {
  const data = getFavoritesFromLs();
  const items: itemsT[] = data.items;

  return (
    <div>
      {items.map((obj, i) => (
        <div key={i}>
          <h3>{obj.title}</h3>
          <div>
            <ul>
              {obj.variants.map((obj, i) => (
                <li key={i}>{obj}</li>
              ))}
            </ul>
          </div>
          <p>{obj.correct}</p>
        </div>
      ))}
    </div>
  );
};
