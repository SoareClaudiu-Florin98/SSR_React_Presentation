import { apiSlice } from '../../api/apiSlice'
import LoginRequestDto from '../../model/requests/loginRequestDto'
import RegisterRequestDto from '../../model/requests/registerRequestDto'

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials: LoginRequestDto) => ({
        url: '/auth/login',
        method: 'POST',
        body: { ...credentials },
      }),
    }),
    register: builder.mutation({
      query: (credentials: RegisterRequestDto) => ({
        url: '/auth/register',
        method: 'POST',
        body: { ...credentials },
      }),
    }),
    fetchCurrentUser: builder.mutation({
      query: () => ({
        url: '/auth/current-user',
        method: 'POST',
        body: {},
      }),
    }),
    logOut: builder.mutation({
      query: () => ({
        url: '/auth/logout',
        method: 'POST',
        body: {},
      }),
    }),
  }),
})
export const {
  useLoginMutation,
  useFetchCurrentUserMutation,
  useRegisterMutation,
  useLogOutMutation,
} = authApiSlice
