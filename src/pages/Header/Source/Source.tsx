import React from 'react';
import styles from './index.module.scss';
import history from '../../../assets/PDF/historyGEO.pdf';
import law from '../../../assets/PDF/lawGEO.pdf';
import language from '../../../assets/PDF/languageGEO.pdf';
import { useSelector } from 'react-redux';
import { ReactComponent as Download } from '../../../assets/pictures/header/download.svg';
import { RootState } from '../../../redux/store';

export const Source = () => {
  const { value } = useSelector((state: RootState) => state.theme);
  return (
    <div className={styles.root}>
      <h1>Here you can download all materials for your self-study</h1>
      <h2>
        Just choose <em>Topic</em> and <em>Click the download button</em> to install all questions
        from this topic
      </h2>
      <ul>
        <li>
          History:{' '}
          <a href={history} download="historyGEO.pdf">
            <Download fill={value === 'light' ? '#333' : '#b3b3b3'} />
          </a>
        </li>
        <li>
          Law:{' '}
          <a href={law} download="lawGEO.pdf">
            <Download fill={value === 'light' ? '#333' : '#b3b3b3'} />
          </a>
        </li>
        <li>
          Language:{' '}
          <a href={language} download="languageGEO.pdf">
            <Download fill={value === 'light' ? '#333' : '#b3b3b3'} />
          </a>
        </li>
      </ul>
    </div>
  );
};
