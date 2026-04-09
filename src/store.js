import { configureStore } from '@reduxjs/toolkit';
import userSlice from './features/user/userSlice.js';
import cartSlice from './features/cart/cartSlice.js';
import themeSlice from './features/theme/themeSlice.js';

const store = configureStore({
  reducer: {
    user: userSlice,
    cart: cartSlice,
    theme: themeSlice,
  },
});

export default store;
