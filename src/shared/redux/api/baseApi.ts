import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { CatalogItem } from '@/widgets/header/ui/header-desktop-catalog'

export const baseApi = createApi({
  reducerPath: 'serviceAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:4000/',
  }),
  endpoints: builder => ({
    getCatalogMenu: builder.query<CatalogItem[], void>({
      query: () => `catalogMenu`,
    }),
  }),
})

export const { useGetCatalogMenuQuery } = baseApi
