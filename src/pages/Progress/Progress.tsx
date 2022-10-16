import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import styles from './index.module.scss';
import data from '../../assets/questions.json';

export const Progress = () => {
  const { progress } = useSelector((state: RootState) => state.card);
  const history = progress.filter((obj) => obj.type[0] === 0).length;
  const historyTotal = data.filter((obj) => obj.type[0] === 0).length;
  const law = progress.filter((obj) => obj.type[0] === 1).length;
  const lawTotal = data.filter((obj) => obj.type[0] === 1).length;
  const lng = progress.filter((obj) => obj.type[0] === 2).length;
  const lngTotal = data.filter((obj) => obj.type[0] === 2).length;

  return (
    <div className={styles.root}>
      <h1>
        Total Progress: {progress.length} / {data.length}{' '}
        <span>({Math.ceil((progress.length / data.length) * 100)}%)</span>
      </h1>
      <ul>
        <li>
          - History: <span>{history} галочка</span> from {historyTotal} questions (~
          {history === 0 ? 0 : Math.ceil((history / historyTotal) * 100)}
          %)
        </li>
        <li>
          - Law: <span>{law} галочка</span> from {lawTotal} questions (~
          {law === 0 ? 0 : Math.ceil((law / lawTotal) * 100)}
          %)
        </li>
        <li>
          - Language: <span>{lng} галочка</span> from {lngTotal} questions (~
          {lng === 0 ? 0 : Math.ceil((lng / lngTotal) * 100)}
          %)
        </li>
      </ul>
      <p>Total questions left: {data.length - progress.length}</p>
    </div>
  );
};
