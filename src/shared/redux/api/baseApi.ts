import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { CatalogItem } from '@/widgets/header/ui/header-desktop-catalog'
import { DNSSupportData } from '@/widgets/header/ui/header-desktop'
import { ChatMessage } from '@/shared/redux/api/chatSlice'
import { SliderProduct } from '@/widgets/slider-products/interfaces'
import { SliderContent } from '@/widgets/news-blogs-reviews/ui/content-slider.types'

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
    getSliderContent: builder.query<SliderContent, void>({
      query: () => `sliderContent`,
    }),
  }),
})

export const {
  useGetCatalogMenuQuery,
  useGetMenuHeaderQuery,
  useGetChatHistoryQuery,
  useGetSliderProductsQuery,
  useGetSliderContentQuery,
} = baseApi
