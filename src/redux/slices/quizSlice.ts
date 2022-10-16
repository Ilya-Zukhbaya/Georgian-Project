import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { itemsT } from '../../@types/index';
export interface quizSliceI {
  items: itemsT[];
  step: number;
  active: boolean;
  cardId: number;
}
const initialState: quizSliceI = {
  active: false,
  items: [],
  step: 0,
  cardId: 0,
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
  },
});

export const { setItems, setStep, setActive, setCardId } = quizSlice.actions;

export default quizSlice.reducer;
