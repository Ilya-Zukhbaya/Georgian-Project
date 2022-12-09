import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { getTheme } from '../../utils/getFromLs';
import { ThemeState } from '../../@types';

const themeData = getTheme();

const initialState: ThemeState = {
  theme: themeData.value,
};

export const themeSlice = createSlice({
  name: 'themeSlice',
  initialState,
  reducers: {
    changeTheme: (state, action: PayloadAction<string>) => {
      state.theme = action.payload;
    },
  },
});

export const { changeTheme } = themeSlice.actions;

export default themeSlice.reducer;
