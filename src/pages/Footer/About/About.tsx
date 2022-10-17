import React from 'react';
import styles from './index.module.scss';

export const About: React.FC = () => {
  return (
    <div className={styles.root}>
      <h1>About Project</h1>
      <ul>
        <li>
          - This project was created in order{' '}
          <em>to help people with training with pre-exam questions</em>
          for obtaining citizenship of Georgia
        </li>
        <li>
          - If this project <em>helped you with passing exams</em>, then the project really needed
          its implementation
        </li>
        <li>
          - <em>I wish you success in your practice</em> of test tasks and I hope that my project
          helped you with this
        </li>
      </ul>
    </div>
  );
};
