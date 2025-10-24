import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './slices/themeSlice';
import authReducer from './slices/authSlice';
import { foodsApi } from './api/foodsApi';
import { ordersApi } from './api/ordersApi';
import { wishlistApi } from './api/wishlistApi';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    auth: authReducer,
    // RTK Query reducers
    [foodsApi.reducerPath]: foodsApi.reducer,
    [ordersApi.reducerPath]: ordersApi.reducer,
    [wishlistApi.reducerPath]: wishlistApi.reducer,
  },
  // Adding RTK Query middleware
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          'auth/setUser',
          'wishlistApi/executeQuery/pending',
          'wishlistApi/executeQuery/fulfilled',
          'wishlistApi/executeQuery/rejected',
          'wishlistApi/executeMutation/pending',
          'wishlistApi/executeMutation/fulfilled',
          'wishlistApi/executeMutation/rejected',
        ],
        ignoredPaths: ['auth.user'],
      },
    }).concat(
      foodsApi.middleware, 
      ordersApi.middleware,
      wishlistApi.middleware
    ),
  // Enable Redux DevTools (always enabled in development with Vite)
  devTools: import.meta.env.MODE !== 'production',
});

