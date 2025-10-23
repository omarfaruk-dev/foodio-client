import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './slices/themeSlice';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
  // Enable Redux DevTools (always enabled in development with Vite)
  devTools: import.meta.env.MODE !== 'production',
});

