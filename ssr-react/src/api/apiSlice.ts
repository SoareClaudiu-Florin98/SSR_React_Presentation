import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  createApi,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react'
import { RootState } from '../store'
import { logOut, setAuthToken } from '../features/auth/authSlice'

const baseQuery = fetchBaseQuery({
  baseUrl: 'https://localhost:7091/api',
  credentials: 'include',
  method: 'POST',
  prepareHeaders(headers, api) {
    const state = api.getState() as RootState
    const token = state.auth.token
    const cookie = state.auth.cookie
    if (token) {
      headers.set('Authorization', `Bearer ${token}`)
      if (cookie.length > 0) {
        headers.set('cookie', `${cookie}`)
      }
    }
    return headers
  },
})

const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions)
  if (result.error?.status == 401) {
    const refreshResult = await baseQuery(
      '/auth/refresh-token',
      api,
      extraOptions
    )
    if (refreshResult.data) {
      api.dispatch(setAuthToken({ ...refreshResult.data }))
      result = await baseQuery(args, api, extraOptions)
    } else {
      api.dispatch(logOut())
    }
  }
  return result
}
export const apiSlice = createApi({
  baseQuery: baseQueryWithReauth,
  endpoints: () => ({}),
})
