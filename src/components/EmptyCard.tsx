import React from 'react';
import { useTranslation } from 'react-i18next';
import { test } from './Quiz';
import { TestContext } from '../App';

export const EmptyCard: React.FC<test> = (props) => {
  const { setCardId } = React.useContext(TestContext);
  const { t } = useTranslation();

  const onButtonClick = () => {
    props.setActive(true);
    setCardId(props.id);
  };

  return (
    <div>
      <h3>{props.title}</h3>
      <button onClick={() => onButtonClick()} className={props.active ? 'disabled' : ''}>
        {t('button.__start')}
      </button>
    </div>
  );
};
