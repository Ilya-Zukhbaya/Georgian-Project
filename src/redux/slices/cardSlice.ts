import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { getFavoritesFromLs } from '../../utils/getFromLs';
import { getChoosenTypeFromLs } from '../../utils/getFromLs';
import { getProgressFromLs } from '../../utils/getFromLs';
import { itemsT } from '../../@types';

const favoriteData = getFavoritesFromLs();
const choosenType = getChoosenTypeFromLs();
const progress = getProgressFromLs();

export interface cardI {
  favorite: itemsT[];
  progress: itemsT[];
  disable: boolean;
  correctAns: number;
  type: number | undefined;
}

const initialState: cardI = {
  favorite: favoriteData.items,
  progress: progress.items,
  type: choosenType.type,
  disable: false,
  correctAns: 0,
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
  },
});

export const {
  setDisable,
  setCorrectAns,
  addToFavorite,
  removeFromFavorite,
  setType,
  addToProgress,
  removeAllFromFavorite,
} = cardSlice.actions;

export default cardSlice.reducer;
