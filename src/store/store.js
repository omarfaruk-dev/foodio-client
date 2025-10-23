import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './slices/themeSlice';
import authReducer from './slices/authSlice';
import { foodsApi } from './api/foodsApi';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    auth: authReducer,
    // RTK Query reducers
    [foodsApi.reducerPath]: foodsApi.reducer,
  },
  // Adding RTK Query middleware
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(foodsApi.middleware),
  // Enable Redux DevTools (always enabled in development with Vite)
  devTools: import.meta.env.MODE !== 'production',
});

