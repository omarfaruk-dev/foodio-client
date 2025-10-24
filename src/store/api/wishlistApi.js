import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const wishlistApi = createApi({
  reducerPath: 'wishlistApi',
  baseQuery: fetchBaseQuery({ 
    baseUrl: import.meta.env.VITE_API_URL,
    prepareHeaders: (headers, { getState }) => {
      const token = localStorage.getItem('foodio-token');
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ['Wishlist'],
  endpoints: (builder) => ({
    // Get user's wishlist
    getWishlist: builder.query({
      query: (email) => `/wishlist?email=${email}`,
      providesTags: ['Wishlist'],
    }),
    
    // Add food to wishlist
    addToWishlist: builder.mutation({
      query: ({ email, foodData }) => ({
        url: `/wishlist?email=${email}`,
        method: 'POST',
        body: foodData,
      }),
      invalidatesTags: ['Wishlist'],
    }),
    
    // Remove food from wishlist
    removeFromWishlist: builder.mutation({
      query: ({ id, email }) => ({
        url: `/wishlist/${id}?email=${email}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Wishlist'],
    }),
  }),
});

export const {
  useGetWishlistQuery,
  useAddToWishlistMutation,
  useRemoveFromWishlistMutation,
} = wishlistApi;

