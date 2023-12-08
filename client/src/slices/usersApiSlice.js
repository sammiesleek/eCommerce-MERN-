import { USERS_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const usersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/auth`,
        method: "POST",
        body: data,
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: `${USERS_URL}/logout`,
        method: "POST",
      }),
    }),
    register: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}`,
        method: "POST",
        body: data,
      }),
    }),
    googleAuth: builder.query({
      query: () => ({
        url: `${USERS_URL}/auth/google`,
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useGoogleAuthQuery,
  useLogoutMutation,
  useRegisterMutation,
} = usersApiSlice;
