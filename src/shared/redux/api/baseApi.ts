import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { SliderProduct } from '@/pages/main-page/components/slider-products/interfaces'
import { ChatMessage } from '@/shared/redux/api/chatSlice'
import { DNSSupportData } from '@/widgets/header/ui/header-desktop'
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
    getMenuHeader: builder.query<DNSSupportData, void>({
      query: () => 'headerInfo',
    }),
    getChatHistory: builder.query<ChatMessage[], void>({
      query: () => `chatHistory`,
    }),
    getSliderProducts: builder.query<SliderProduct[], void>({
      query: () => `sliderProducts`,
    }),
  }),
})

export const {
  useGetCatalogMenuQuery,
  useGetMenuHeaderQuery,
  useGetChatHistoryQuery,
  useGetSliderProductsQuery,
} = baseApi
