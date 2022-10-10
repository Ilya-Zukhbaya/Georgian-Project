import { configureStore } from '@reduxjs/toolkit';
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

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
