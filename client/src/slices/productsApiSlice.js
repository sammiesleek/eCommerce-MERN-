import { CATEGORIES_URL, PRODUCTS_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const productsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createProduct: builder.mutation({
      query: (data) => ({
        url: PRODUCTS_URL,
        method: "post",
        body: data,
      }),
    }),
    getProducts: builder.query({
      query: () => ({
        url: PRODUCTS_URL,
      }),
      keepUnusedDataFor: 5,
    }),

    getProductDetails: builder.query({
      query: (productId) => ({
        url: `${PRODUCTS_URL}/${productId}`,
      }),
      keepUnusedDataFor: 5,
    }),
    updateProduct: builder.mutation({
      query: (data) => ({
        url: `${PRODUCTS_URL}/${data.id}`,
        method: "put",
        body: data,
      }),
    }),
    getCategories: builder.query({
      query: () => ({
        url: CATEGORIES_URL,
      }),
      keepUnusedDataFor: 5,
    }),
    createCategory: builder.mutation({
      query: (data) => ({
        url: CATEGORIES_URL,
        method: "post",
        body: data,
      }),
    }),
    deleteCategory: builder.mutation({
      query: (productId) => ({
        url: `${CATEGORIES_URL}/${productId}`,
        method: "DELETE",
      }),
    }),
    updateCategory: builder.mutation({
      query: (data) => ({
        url: `${CATEGORIES_URL}/${data.id}`,
        method: "put",
        body: data,
      }),
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetCategoriesQuery,
  useGetProductDetailsQuery,
  useCreateProductMutation,
  useCreateCategoryMutation,
  useUpdateCategoryMutation,
  useUpdateProductMutation,
  useDeleteCategoryMutation,
} = productsApiSlice;
