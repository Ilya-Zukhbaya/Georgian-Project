import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { itemsT } from '../../@types/index';
import { quizSliceI } from '../../@types/index';
import { itemT } from '../../@types/index';

const initialState: quizSliceI = {
  active: false,
  items: [],
  testItems: [],
  incItems: [],
  step: 0,
  cardId: 0,
  variant: [],
  activeLink: true,
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
    setAnswer(state, action: PayloadAction<boolean>) {
      state.items[state.step].answered = action.payload;
    },
    setTestItems(state, action: PayloadAction<itemsT[]>) {
      state.testItems.push(...action.payload);
    },
    setIncItems(state, action: PayloadAction<itemT>) {
      state.incItems.push(action.payload);
    },
    setActiveLink(state, action: PayloadAction<boolean>) {
      state.activeLink = action.payload;
    },
    removeTestItems(state, action: PayloadAction<[]>) {
      state.testItems = action.payload;
    },
    removeIncItems(state, action: PayloadAction<[]>) {
      state.incItems = action.payload;
    },
    removeItems(state, action: PayloadAction<[]>) {
      state.items = action.payload;
    },
  },
});

export const {
  setItems,
  setStep,
  setActive,
  setCardId,
  setVariant,
  setAnswer,
  setIncItems,
  setTestItems,
  setActiveLink,
  removeTestItems,
  removeIncItems,
  removeItems,
} = quizSlice.actions;

export default quizSlice.reducer;
