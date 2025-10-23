import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const foodsApi = createApi({
  reducerPath: 'foodsApi',
  baseQuery: fetchBaseQuery({ 
    baseUrl: import.meta.env.VITE_API_URL,
  }),
  tagTypes: ['Foods', 'MyFoods'],
  endpoints: (builder) => ({
    // Get all foods
    getAllFoods: builder.query({
      query: (search = '') => `/foods?search=${search}`,
      providesTags: ['Foods'],
    }),
    
    // Get single food by ID
    getFoodById: builder.query({
      query: (id) => `/foods/${id}`,
      providesTags: (result, error, id) => [{ type: 'Foods', id }],
    }),
    
    // Get top foods
    getTopFoods: builder.query({
      query: () => '/top-foods',
      providesTags: ['Foods'],
    }),
    
    // Get my foods (user's added foods)
    getMyFoods: builder.query({
      query: (email) => ({
        url: `/my-foods?email=${email}`,
        headers: {
          authorization: `Bearer ${localStorage.getItem('foodio-token')}`,
        },
      }),
      providesTags: ['MyFoods'],
    }),
    
    // Add new food (mutation)
    addFood: builder.mutation({
      query: (newFood) => ({
        url: '/foods',
        method: 'POST',
        body: newFood,
      }),
      invalidatesTags: ['Foods', 'MyFoods'],
    }),
    
    // Update food
    updateFood: builder.mutation({
      query: ({ id, email, updatedFood }) => ({
        url: `/foods/${id}?email=${email}`,
        method: 'PUT',
        body: updatedFood,
      }),
      invalidatesTags: ['Foods', 'MyFoods'],
    }),
    
    // Delete food
    deleteFood: builder.mutation({
      query: ({ id, email }) => ({
        url: `/foods/${id}?email=${email}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Foods', 'MyFoods'],
    }),
  }),
});

export const {
  useGetAllFoodsQuery,
  useGetFoodByIdQuery,
  useGetTopFoodsQuery,
  useGetMyFoodsQuery,
  useAddFoodMutation,
  useUpdateFoodMutation,
  useDeleteFoodMutation,
} = foodsApi;

