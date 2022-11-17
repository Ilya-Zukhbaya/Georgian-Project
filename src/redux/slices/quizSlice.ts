import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { itemsT } from '../../@types/index';
import { quizSliceI } from '../../@types/index';

const initialState: quizSliceI = {
  active: false,
  items: [],
  testItems: [],
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
    setTestItems(state, action: PayloadAction<itemsT[]>) {
      state.testItems.push(...action.payload);
    },
    removeTestItems(state, action: PayloadAction<[]>) {
      state.testItems = action.payload;
    },
  },
});

export const {
  setItems,
  setStep,
  setActive,
  setCardId,
  setVariant,
  setTestItems,
  removeTestItems,
} = quizSlice.actions;

export default quizSlice.reducer;
