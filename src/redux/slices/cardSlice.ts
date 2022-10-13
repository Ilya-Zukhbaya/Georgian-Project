import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { getFavoritesFromLs } from '../../utils/getFavoriteFromLS';
import { itemsT } from '../../@types';

const favoriteData = getFavoritesFromLs();

export interface cardI {
  favorite: itemsT[];
  disable: boolean;
  correctAns: number;
}

const initialState: cardI = {
  favorite: favoriteData.items,
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
    addToFavotite(state, action: PayloadAction<itemsT>) {
      state.favorite.push(action.payload);
    },
  },
});

export const { setDisable, setCorrectAns, addToFavotite } = cardSlice.actions;

export default cardSlice.reducer;
