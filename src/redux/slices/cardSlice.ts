import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { getFavoritesFromLs } from '../../utils/getFavoriteFromLS';
import { itemsT } from '../../@types';
import { getChoosenTypeFromLs } from '../../utils/getChoosenTypeFromLS';

const favoriteData = getFavoritesFromLs();
const choosenType = getChoosenTypeFromLs();

export interface cardI {
  favorite: itemsT[];
  disable: boolean;
  correctAns: number;
  type: number | undefined;
}

const initialState: cardI = {
  favorite: favoriteData.items,
  disable: false,
  correctAns: 0,
  type: choosenType.type,
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
    removeFromFavorite(state, action: PayloadAction<number>) {
      state.favorite = state.favorite.filter((obj) => obj.id !== action.payload);
    },
  },
});

export const { setDisable, setCorrectAns, addToFavorite, removeFromFavorite, setType } =
  cardSlice.actions;

export default cardSlice.reducer;
