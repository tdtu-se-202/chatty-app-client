import { createSlice } from '@reduxjs/toolkit';

export interface ThemeState {
    value: 'light' | 'dark';
    isDarkMode: boolean;
}

const initialState: ThemeState = {
    value: 'light',
    isDarkMode: true,
};

export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        toggleTheme: (state) => {
            state.value = state.value === 'light' ? 'dark' : 'light';
            state.isDarkMode = !state.isDarkMode;
        },
        setTheme: (state, action) => {
            state.value = action.payload;
        },
    },
});

export const { toggleTheme, setTheme  } = themeSlice.actions;

export default themeSlice.reducer;
