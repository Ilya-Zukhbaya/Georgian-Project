import React from 'react';
import styles from './index.module.scss';

export const Faq = () => {
  return (
    <div className={styles.root}>
      <h1>FAQ</h1>
      <ul>
        <li>
          Do I need to pay to use the service?
          <em>- No, the service is completely free </em>
        </li>
        <li>
          Where can I text a message to the author?
          <em>
            - If you have any troubles or question, you can text me in Telegram, Email or Instagram{' '}
          </em>
        </li>
        <li>
          Is my progress saved?
          <em>
            - Yes, your theme, language, progress and highlight questions settings are saved on your
            device
          </em>
        </li>
        <li>
          Will anything new be added to the service?
          <em>
            - Yes, new features will be added in the future, including the creation of a personal
            account
          </em>
        </li>
        <li>
          How can i support the project?
          <em>
            - you can go to the support section and find additional information or write to me
            personally
          </em>
        </li>
      </ul>
    </div>
  );
};
