import React from 'react';
import { Link } from 'react-router-dom';
import styles from './index.module.scss';
import { ReactComponent as Light } from '../../../assets/pictures/header/light.svg';
import { ReactComponent as Dark } from '../../../assets/pictures/header/dark.svg';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';

export const Info = () => {
  const { value } = useSelector((state: RootState) => state.theme);

  return (
    <div className={styles.root}>
      <h1>Information:</h1>
      <h2>
        Here you can find all information about <em>how to use the service and navigate it</em>
      </h2>
      <ul>
        <li>
          - Click on{' '}
          <Link to="/">
            <span>G-PROJECT</span>
          </Link>{' '}
          to return to main page
        </li>
        <li>
          -{' '}
          <Link to="/progress">
            <span>Progress</span>
          </Link>{' '}
          shows how many questions you answered correctly, you can also see number ofquestions you
          completed by choosen topic
        </li>
        <li>
          -
          <Link to="/saved">
            <span>Saved</span>
          </Link>{' '}
          shows your saved questions, you can also see the total number of saved questions by
          choosen topic
        </li>
        <li>
          - Click on {value === 'light' ? <Light fill="#333" /> : <Light fill="#b3b3b3" />} or{' '}
          {value === 'light' ? <Dark fill="#333" /> : <Dark fill="#b3b3b3" />} to change your theme
        </li>
        <li>
          - Click on <span>ge</span> to change language to Georigian
        </li>
      </ul>
    </div>
  );
};
