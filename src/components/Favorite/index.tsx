import React from 'react';
import styles from './index.module.scss';
import { Container, Pagination, Stack, PaginationItem } from '@mui/material';

import { favoriteT, itemsT } from '../../@types';

import { getFavoritesFromLs } from '../../utils/getFromLs';

import { Link, useLocation } from 'react-router-dom';

import { useTranslation } from 'react-i18next';

export const Favorite: React.FC<favoriteT> = ({ type }) => {
  const data = getFavoritesFromLs();
  const items: itemsT[] = data.items;

  const location = useLocation();
  const id = location.pathname.split('ed/')[1].slice(0, 1);
  const [page, setPage] = React.useState<number>(Number(location.search?.split('=')[1] || 1));

  const { t } = useTranslation();
  return (
    <>
      {items.filter((obj) => obj.type[0] === type).length !== 0 ? (
        <Container className={styles.root}>
          <article>
            {items
              .filter((obj) => obj.type[0] === type)
              .slice(page * 6 - 6, page * 6 > items.length ? items.length : page * 6)
              .map((obj, i) => (
                <div key={i}>
                  <h3>{obj.title}</h3>
                  <ul>
                    {obj.variants.map((obj, i) => (
                      <li key={i}>
                        - <span>{i + 1}</span>: {obj}
                      </li>
                    ))}
                  </ul>
                  <p>
                    <span>{t('saved.__correct')}: </span> <b>{obj.correct + 1}</b>
                  </p>
                </div>
              ))}
          </article>
          <Stack spacing={2} className={styles.root__footer}>
            {!!items && (
              <Pagination
                showFirstButton
                showLastButton
                count={Math.ceil(items.filter((obj) => obj.type[0] === type).length / 6)}
                page={page}
                onChange={(_, num) => setPage(num)}
                renderItem={(item) => (
                  <PaginationItem
                    component={Link}
                    to={`/saved/${id}/?page=${item.page}`}
                    {...item}
                  />
                )}
              />
            )}
          </Stack>
        </Container>
      ) : (
        <h1 className={styles.root__noSaved}>{t('saved.__h1')}</h1>
      )}
    </>
  );
};
