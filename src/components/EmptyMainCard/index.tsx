import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { emptyMainCardT } from '../../@types';
import { RootState } from '../../redux/store';
import styles from './index.module.scss';

export const EmptyMainCard: React.FC<emptyMainCardT> = ({ title, navigate }) => {
  const { value } = useSelector((state: RootState) => state.theme);
  const navigation = useNavigate();

  return (
    <button
      onClick={() => navigation(`${navigate}`)}
      className={styles.root}
      style={value === 'dark' ? { backgroundColor: '#4e4e4e' } : { backgroundColor: '#cbcbcb' }}>
      <h2>{title}</h2>
    </button>
  );
};
