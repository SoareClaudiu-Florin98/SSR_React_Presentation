import { combineReducers } from '@reduxjs/toolkit'
import { authReducer } from '../features/auth/authSlice'
import { apiSlice } from '../api/apiSlice'
import { serviceReducer } from '../features/services/serviceSlice'

const rootReducer = combineReducers({
  [apiSlice.reducerPath]: apiSlice.reducer,
  auth: authReducer,
  services: serviceReducer,
})

export default rootReducer
