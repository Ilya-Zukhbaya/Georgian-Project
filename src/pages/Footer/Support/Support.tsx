import styles from './index.module.scss';

export const Support: React.FC = () => {
  return (
    <div className={styles.root}>
      <h1>Support</h1>
      <h2>
        If your want to help author and support project you can support by transferring to one of
        these cards for the amount you want, <em>any support will be valuable</em>
      </h2>
      <ul>
        <li>
          - Sberbank
          <span>5469 3800 1949 0076</span>
          ZUKHBAYA ILYA
        </li>
        <li>
          - Bank Of Georgia
          <span>5488 8808 0418 9822</span>
          ZUKHBAYA ILYA
        </li>
      </ul>
    </div>
  );
};
