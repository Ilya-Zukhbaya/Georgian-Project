import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { getTheme } from '../../utils/getThemeFromLS';

const themeData = getTheme();

export interface ThemeState {
  value: string;
}

const initialState: ThemeState = {
  value: themeData.value,
};

export const themeSlice = createSlice({
  name: 'themeSlice',
  initialState,
  reducers: {
    changeTheme: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { changeTheme } = themeSlice.actions;

export default themeSlice.reducer;
