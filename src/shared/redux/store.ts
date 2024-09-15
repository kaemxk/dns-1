import { configureStore, Store } from '@reduxjs/toolkit'

import { baseApi } from './api'

import chatSlice from '@/shared/redux/api/chatSlice'
import { configSlice } from './api/configSlice'

export const store: Store = configureStore({
  reducer: {
    chat: chatSlice,
    // Добавляем другие редукторы (слайсы)
    [baseApi.reducerPath]: baseApi.reducer,
    [configSlice.reducerPath]: configSlice.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(baseApi.middleware, configSlice.middleware),
})

export type RootState = ReturnType<typeof store.getState>
// export type AppDispatch = typeof store.dispatch
