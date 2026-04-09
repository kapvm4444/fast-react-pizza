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
        const newTheme = state.darkMode ? 'dark' : 'light';
        localStorage.setItem('theme', newTheme);

        // Also update DOM immediately
        if (state.darkMode) {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      } catch (e) {
        console.error('localStorage error:', e);
      }
    },
    setDarkMode(state, action) {
      state.darkMode = action.payload;
      try {
        const newTheme = action.payload ? 'dark' : 'light';
        localStorage.setItem('theme', newTheme);

        // Also update DOM immediately
        if (action.payload) {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      } catch (e) {
        console.error('localStorage error:', e);
      }
    },
  },
});

export const { toggleDarkMode, setDarkMode } = themeSlice.actions;
export default themeSlice.reducer;
