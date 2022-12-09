import React from 'react';
import styles from './index.module.scss';
import { emptyMainCardT } from '../../@types';

import { useSelector } from 'react-redux';
import { selectTheme } from '../../redux/store';

import { useNavigate } from 'react-router-dom';

export const EmptyMainCard: React.FC<emptyMainCardT> = ({ title, navigate }) => {
  const { theme } = useSelector(selectTheme);

  const navigation = useNavigate();

  return (
    <button
      onClick={() => navigation(`${navigate}`)}
      className={styles.root}
      style={theme === 'dark' ? { backgroundColor: '#4e4e4e' } : { backgroundColor: '#cbcbcb' }}>
      <h2>{title}</h2>
    </button>
  );
};
