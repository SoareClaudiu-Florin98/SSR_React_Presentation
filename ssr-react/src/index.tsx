import React from 'react'
import './style.scss'
import { BrowserRouter } from 'react-router-dom'
import reportWebVitals from './reportWebVitals'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import Routes from './router/Routes'
import rootReducer from './reducers'
import { HelmetProvider } from 'react-helmet-async'
import { loadableReady } from '@loadable/component'
import { hydrateRoot } from 'react-dom/client'
import { apiSlice } from './api/apiSlice'

const store = configureStore({
  reducer: rootReducer,
  preloadedState: window.INITIAL_STATE,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
})

loadableReady(() => {
  hydrateRoot(
    document.querySelector('#root')!,
    <Provider store={store}>
      <HelmetProvider>
        <React.StrictMode>
          <BrowserRouter>
            <Routes />
          </BrowserRouter>
        </React.StrictMode>
      </HelmetProvider>
    </Provider>
  )
})
declare global {
  interface Window {
    INITIAL_STATE: any
  }
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
