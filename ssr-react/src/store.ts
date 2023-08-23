import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './reducers'
import { apiSlice } from './api/apiSlice'
const store = configureStore({
  reducer: rootReducer,
})
const createStore = (req: any) => {
  const initialState = {
    api: undefined,
    auth: {
      loading: false,
      error: '',
      currentUser: undefined,
      token: '',
      cookie: req.get('cookie') || '',
    },
  }
  const store = configureStore({
    reducer: rootReducer,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(apiSlice.middleware),
  })
  return store
}
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export { createStore }
export default store
