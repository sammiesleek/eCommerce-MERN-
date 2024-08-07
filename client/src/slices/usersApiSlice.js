import { USERS_URL } from "../constants";
import { GOOGLE_URL } from "../constants";
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
    google: builder.mutation({
      query: () => ({
        url: `${GOOGLE_URL}/google`,
        method: "GET",
      }),
    }),
    authvalidate: builder.mutation({
      query: () => ({
        url: `${GOOGLE_URL}/validate`,
        method: "GET",
      }),
    }),
    register: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}`,
        method: "POST",
        body: data,
      }),
    }),
    profile: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/profile`,
        method: "put",
        body: data,
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useGoogleMutation,
  useProfileMutation,
  useAuthvalidateMutation,
  useLogoutMutation,
  useRegisterMutation,
} = usersApiSlice;
