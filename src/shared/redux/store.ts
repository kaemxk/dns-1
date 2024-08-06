import { configureStore } from '@reduxjs/toolkit'

import { baseApi } from './api'

export const store = configureStore({
  reducer: {
    // Добавляем другие редукторы (слайсы)
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(baseApi.middleware),
})
