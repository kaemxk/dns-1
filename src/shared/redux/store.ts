import { configureStore } from '@reduxjs/toolkit'

import { baseAPI } from './api'

export const store = configureStore({
  reducer: {
    // Добавляем другие редукторы (слайсы)
    [baseAPI.reducerPath]: baseAPI.reducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(baseAPI.middleware),
})
