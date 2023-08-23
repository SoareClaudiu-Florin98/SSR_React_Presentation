import { createSlice } from '@reduxjs/toolkit'
import UserState from '../user/userState'

const initialState: UserState = {
  loading: false,
  error: '',
  currentUser: undefined,
  token: '',
  cookie: '',
}
const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    setAuthToken: (state, actions) => {
      state.token = actions.payload.token
      state.currentUser = actions.payload.user
    },
    logOut: (state) => {
      state.token = ''
      state.currentUser = undefined
    },
    setCurrentUser: (state, actions) => {
      state.currentUser = actions.payload
    },
  },
})

const authReducer = authSlice.reducer
export const { setAuthToken, logOut, setCurrentUser } = authSlice.actions
export { authReducer }
