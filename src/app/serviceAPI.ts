import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const serviceAPI = createApi({
  reducerPath: 'serviceAPI',
  baseQuery: fetchBaseQuery({
    // Указать ссылку
    baseUrl: '',
  }),
  endpoints: () => ({}),
  //   Определить эндпоинты необходимые
})

// Также экспортировать хуки основанные на эндпоинтах
export default serviceAPI
