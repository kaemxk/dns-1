import { configureStore } from '@reduxjs/toolkit'

import serviceAPI from './serviceAPI'

const store = configureStore({
  reducer: {
    // Добавляем другие редукторы (слайсы)
    [serviceAPI.reducerPath]: serviceAPI.reducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(serviceAPI.middleware),
})

export default store
