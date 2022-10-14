import React from 'react';
import { Container, Pagination, Stack, PaginationItem } from '@mui/material';
import { itemsT } from '../../@types';
import { getFavoritesFromLs } from '../../utils/getFavoriteFromLS';
import styles from './index.module.scss';
import { Link, useLocation } from 'react-router-dom';

export const Favorities: React.FC = () => {
  const data = getFavoritesFromLs();
  const items: itemsT[] = data.items;
  const location = useLocation();
  const [page, setPage] = React.useState<number>(Number(location.search?.split('=')[1] || 1));

  return (
    <div className={styles.root}>
      <Container className={styles.root__container}>
        <article>
          {items.slice(page * 10 - 10, page * 10).map((obj, i) => (
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
                <PaginationItem component={Link} to={`/saved/?page=${item.page}`} {...item} />
              )}
            />
          )}
        </Stack>
      </Container>
    </div>
  );
};
