// themeSlice.ts
import { createSlice } from '@reduxjs/toolkit';

export interface ThemeState {
    value: 'light' | 'dark';
}

const initialState: ThemeState = {
    value: 'light',
};

export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        toggleTheme: (state) => {
            state.value = state.value === 'light' ? 'dark' : 'light';
        },
        setTheme: (state, action) => {
            state.value = action.payload;
        },
    },
});

export const { toggleTheme, setTheme  } = themeSlice.actions;

export default themeSlice.reducer;
