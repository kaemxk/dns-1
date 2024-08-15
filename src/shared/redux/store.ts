import { configureStore, Store } from '@reduxjs/toolkit'

import { baseApi } from './api'
import { configSlice } from './api/configSlice'

export const store: Store = configureStore({
  reducer: {
    // Добавляем другие редукторы (слайсы)
    [baseApi.reducerPath]: baseApi.reducer,
    [configSlice.reducerPath]: configSlice.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(baseApi.middleware, configSlice.middleware),
})
