import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { CatalogItem } from '@/widgets/header/ui/header-desktop-catalog'
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
    getChatHistory: builder.query<ChatMessage[], void>({
      query: () => `chatHistory`,
    }),
  }),
})

export const { useGetCatalogMenuQuery, useGetChatHistoryQuery } = baseApi

