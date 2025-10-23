import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const ordersApi = createApi({
  reducerPath: 'ordersApi',
  baseQuery: fetchBaseQuery({ 
    baseUrl: import.meta.env.VITE_API_URL,
  }),
  tagTypes: ['Orders'],
  endpoints: (builder) => ({
    // Get my orders (user's orders)
    getMyOrders: builder.query({
      query: (email) => ({
        url: `/my-orders?email=${email}`,
        headers: {
          authorization: `Bearer ${localStorage.getItem('foodio-token')}`,
        },
      }),
      providesTags: ['Orders'],
    }),
    
    // Create new order (purchase food)
    createOrder: builder.mutation({
      query: (orderData) => ({
        url: '/orders',
        method: 'POST',
        body: orderData,
      }),
      invalidatesTags: ['Orders', 'Foods'], // Invalidate orders and foods cache
    }),
    
    // Delete order
    deleteOrder: builder.mutation({
      query: (orderId) => ({
        url: `/my-orders/${orderId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Orders', 'Foods'], // Invalidate orders and foods cache
    }),
  }),
});

export const {
  useGetMyOrdersQuery,
  useCreateOrderMutation,
  useDeleteOrderMutation,
} = ordersApi;

