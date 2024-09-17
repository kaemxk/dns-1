import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { CatalogItem } from '@/widgets/header/ui/header-desktop-catalog'
import { DNSSupportData } from '@/widgets/header/ui/header-desktop'
import { ChatMessage } from '@/widgets/chat/interfaces'

export const baseApi = createApi({
  reducerPath: 'serviceAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:4000/',
  }),
  endpoints: builder => ({
    getCatalogMenu: builder.query<CatalogItem[], void>({
      query: () => `catalogMenu`,
    }),
    getMenuHeader: builder.query<DNSSupportData, void>({
      query: () => 'headerInfo',
    }),
    getChatHistory: builder.query<ChatMessage[], void>({
      query: () => `chatHistory`,
    }),
  }),
})

export const { useGetCatalogMenuQuery, useGetMenuHeaderQuery, useGetChatHistoryQuery } = baseApi
