import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface cardI {
  disable: boolean;
  correctAns: number;
}

const initialState = {
  disable: false,
  correctAns: 0,
};

export const quizSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {
    setDisable(state, action: PayloadAction<boolean>) {
      state.disable = action.payload;
    },
    setCorrectAns(state, action: PayloadAction<number>) {
      state.correctAns = action.payload;
    },
  },
});

export const { setDisable, setCorrectAns } = quizSlice.actions;

export default quizSlice.reducer;
