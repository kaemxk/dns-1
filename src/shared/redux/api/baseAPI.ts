import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const baseAPI = createApi({
  reducerPath: 'serviceAPI',
  baseQuery: fetchBaseQuery({
    // Указать ссылку
    baseUrl: '',
  }),
  endpoints: () => ({}),
  //   Определить эндпоинты необходимые
})

// Также экспортировать хуки основанные на эндпоинтах
