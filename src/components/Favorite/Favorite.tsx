import React from 'react';
import { Container, Pagination, Stack, PaginationItem } from '@mui/material';
import { itemsT } from '../../@types';
import { getFavoritesFromLs } from '../../utils/getFromLs';
import styles from './index.module.scss';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

type favoriteT = {
  type: number;
};

export const Favorite: React.FC<favoriteT> = ({ type }) => {
  const data = getFavoritesFromLs();
  const items: itemsT[] = data.items;
  const location = useLocation();
  const { t } = useTranslation();
  const [page, setPage] = React.useState<number>(Number(location.search?.split('=')[1] || 1));
  const id = location.pathname.split('ed/')[1].slice(0, 1);

  return (
    <div className={styles.root}>
      {items.filter((obj) => obj.type[0] === type).length !== 0 ? (
        <Container className={styles.root__container}>
          <article>
            {items
              .filter((obj) => obj.type[0] === type)
              .slice(page * 10 - 10, page * 10)
              .map((obj, i) => (
                <div key={i}>
                  <h3>{obj.title}</h3>
                  <div>
                    <ul>
                      {obj.variants.map((obj, i) => (
                        <li key={i}>{obj}</li>
                      ))}
                    </ul>
                  </div>
                  <p>{obj.correct}</p>
                </div>
              ))}
          </article>
          <Stack spacing={2} className={styles.root__footer}>
            {!!items && (
              <Pagination
                showFirstButton
                showLastButton
                count={Math.ceil(items.length / 10)}
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
        <h1>{t('saved.__h1')}</h1>
      )}
    </div>
  );
};
