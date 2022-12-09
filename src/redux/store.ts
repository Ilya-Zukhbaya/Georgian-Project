import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import cardSlice from './slices/cardSlice';
import quizSlice from './slices/quizSlice';
import themeSlice from './slices/themeSlice';

export const store = configureStore({
  reducer: {
    theme: themeSlice,
    quiz: quizSlice,
    card: cardSlice,
  },
});

export const selectQuiz = (state: RootState) => state.quiz;
export const selectTheme = (state: RootState) => state.theme;
export const selectCard = (state: RootState) => state.card;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
