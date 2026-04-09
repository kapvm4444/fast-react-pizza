import { createSlice } from '@reduxjs/toolkit';

const getInitialDarkMode = () => {
  try {
    const saved = localStorage.getItem('theme');
    if (saved === 'dark') return true;
    if (saved === 'light') return false;
  } catch (e) {
    console.error('localStorage error:', e);
  }
  return false;
};

const initialState = {
  darkMode: getInitialDarkMode(),
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleDarkMode(state) {
      state.darkMode = !state.darkMode;
      try {
        localStorage.setItem('theme', state.darkMode ? 'dark' : 'light');
      } catch (e) {
        console.error('localStorage error:', e);
      }
    },
    setDarkMode(state, action) {
      state.darkMode = action.payload;
      try {
        localStorage.setItem('theme', action.payload ? 'dark' : 'light');
      } catch (e) {
        console.error('localStorage error:', e);
      }
    },
  },
});

export const { toggleDarkMode, setDarkMode } = themeSlice.actions;
export default themeSlice.reducer;
