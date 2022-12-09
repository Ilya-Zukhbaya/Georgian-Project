import React from 'react';
import styles from './index.module.scss';

import { itemT } from '../../@types';

import { ReactComponent as Check } from '../../assets/pictures/main/check.svg';
import { ReactComponent as Cross } from '../../assets/pictures/main/cross.svg';

import { useSelector } from 'react-redux';
import { selectTheme } from '../../redux/store';

export const IncResult: React.FC<itemT> = ({ id, title, correctVariant, choosenVariant }) => {
  const { theme } = useSelector(selectTheme);

  return (
    <div
      className={styles.root}
      style={
        theme === 'dark'
          ? { backgroundColor: 'rgb(112 112 112)' }
          : { backgroundColor: 'rgb(183 183 183)' }
      }>
      <div className={styles.root__main}>
        <div className={styles.root__header}>
          <span>{id}. </span>
          {title}
        </div>
        <div className={styles.root__footer}>
          <div>
            <Check width={30} className={styles.root__check} />
            <span>{correctVariant}</span>
          </div>
          <div>
            <Cross width={30} className={styles.root__cross} />
            <span>{choosenVariant}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
