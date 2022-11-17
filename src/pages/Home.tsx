import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { Quiz } from '../components/MemoQuiz';
import i18n from '../i18n';
import { EmptyMainCard } from '../components/EmptyMainCard';
import { mainCard } from '../assets/mainCard';

export const Home = () => {
  const { active } = useSelector((state: RootState) => state.quiz);

  return (
    <>
      {active ? (
        <Quiz />
      ) : (
        <div className="main">
          {mainCard
            .filter((obj) => obj.lng === i18n.resolvedLanguage)
            .map((obj, i) => (
              <EmptyMainCard key={i} {...obj} />
            ))}
        </div>
      )}
    </>
  );
};
