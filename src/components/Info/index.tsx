import React from 'react';

import save from '../../assets/pictures/main/add.svg';

import { useTranslation } from 'react-i18next';

export const Info: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="info">
      <p>
        - <b>{t('cardInfo.__p1B')}</b> {t('cardInfo.__p1')}
      </p>
      <p>
        - {t('cardInfo.__p2')} <img src={save} alt="add to saved" width={20} />{' '}
        {t('cardInfo.__p2p')} <b>{t('cardInfo.__p2B')}</b>
      </p>
      <p>
        - {t('cardInfo.__p3')} <b>{t('cardInfo.__p3B')}</b>
      </p>
      <p>
        - {t('cardInfo.__p4')} <b>{t('cardInfo.__p4B1')}</b> {t('source.__and')}{' '}
        <b>{t('cardInfo.__p4B2')}</b> {t('cardInfo.__p4p')}
      </p>
      <p>
        - {t('cardInfo.__p5')} <b>{t('cardInfo.__p5B')}</b>
      </p>
      <p>- {t('cardInfo.__p6')}</p>
    </div>
  );
};
