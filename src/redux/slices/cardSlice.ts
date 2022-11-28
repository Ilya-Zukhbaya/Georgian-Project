import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { getFavoritesFromLs } from '../../utils/getFromLs';
import { getChoosenTypeFromLs } from '../../utils/getFromLs';
import { getProgressFromLs } from '../../utils/getFromLs';
import { itemsT } from '../../@types';

const favoriteData = getFavoritesFromLs();
const choosenType = getChoosenTypeFromLs();
const progress = getProgressFromLs();

type incAns = {
  id: number;
  incAns: number;
};
export interface cardI {
  favorite: itemsT[];
  progress: itemsT[];
  disable: boolean;
  correctAns: number;
  incorrectAns: incAns[];
  type: number | undefined;
}

const initialState: cardI = {
  favorite: favoriteData.items,
  progress: progress.items,
  type: choosenType.type,
  disable: false,
  correctAns: 0,
  incorrectAns: [
    { id: 0, incAns: 0 },
    { id: 1, incAns: 0 },
    { id: 2, incAns: 0 },
  ],
};

export const cardSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {
    setDisable(state, action: PayloadAction<boolean>) {
      state.disable = action.payload;
    },
    setCorrectAns(state, action: PayloadAction<number>) {
      state.correctAns = action.payload;
    },
    setIncorrectAns(state, action: PayloadAction<number>) {
      state.incorrectAns.map((obj) => (obj.id === action.payload ? (obj.incAns += 1) : null));
    },
    setType(state, action: PayloadAction<number>) {
      state.type = action.payload;
    },
    addToFavorite(state, action: PayloadAction<itemsT>) {
      state.favorite.push(action.payload);
    },
    addToProgress(state, action: PayloadAction<itemsT>) {
      state.progress.push(action.payload);
    },
    removeFromFavorite(state, action: PayloadAction<number>) {
      state.favorite = state.favorite.filter((obj) => obj.id !== action.payload);
    },
    removeAllFromFavorite(state) {
      state.favorite = [];
    },
    removeIncorrectAns(state) {
      state.incorrectAns.map((obj) => (obj.incAns = 0));
    },
  },
});

export const {
  setDisable,
  setCorrectAns,
  addToFavorite,
  setIncorrectAns,
  setType,
  addToProgress,
  removeAllFromFavorite,
  removeFromFavorite,
  removeIncorrectAns,
} = cardSlice.actions;

export default cardSlice.reducer;
