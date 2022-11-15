import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { itemsT } from '../../@types/index';
import { quizSliceI } from '../../@types/index';

const initialState: quizSliceI = {
  active: false,
  items: [],
  step: 0,
  cardId: 0,
  variant: [],
};

export const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    setItems(state, action: PayloadAction<itemsT[]>) {
      state.items = action.payload;
    },
    setStep(state, action: PayloadAction<number>) {
      state.step = action.payload;
    },
    setActive(state, action: PayloadAction<boolean>) {
      state.active = action.payload;
    },
    setCardId(state, action: PayloadAction<number>) {
      state.cardId = action.payload;
    },
    setVariant(state, action: PayloadAction<number[]>) {
      state.variant = action.payload;
    },
  },
});

export const { setItems, setStep, setActive, setCardId, setVariant } = quizSlice.actions;

export default quizSlice.reducer;
