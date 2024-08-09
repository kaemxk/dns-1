import { configureStore, Store } from '@reduxjs/toolkit'

import { baseApi } from './api'
import { configApi } from './api/configApi'

export const store: Store = configureStore({
  reducer: {
    // Добавляем другие редукторы (слайсы)
    [baseApi.reducerPath]: baseApi.reducer,
    [configApi.reducerPath]: configApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(baseApi.middleware, configApi.middleware),
})
