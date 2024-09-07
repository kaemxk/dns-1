import { configureStore, Store } from '@reduxjs/toolkit'

import { baseApi } from './api'
import { configSlice } from './api/configSlice'
import {dnsApi} from "@/shared/redux/api/dns-api";

export const store: Store = configureStore({
  reducer: {
    // Добавляем другие редукторы (слайсы)
    [baseApi.reducerPath]: baseApi.reducer,
    [configSlice.reducerPath]: configSlice.reducer,
    [dnsApi.reducerPath]: dnsApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(baseApi.middleware, configSlice.middleware, dnsApi.middleware),
})
