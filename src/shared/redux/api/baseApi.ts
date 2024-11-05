import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { ICompanyInfo } from '@/pages/about/components/about-company/model/types/about-company.types'
import { IVacancies } from '@/pages/about/components/career/model/types/career.types'
import { SliderContent } from '@/pages/main-page/components/news-blogs-reviews/ui/content-slider.types'
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
    getSliderContent: builder.query<SliderContent, void>({
      query: () => `sliderContent`,
    }),
    getCompanyInfo: builder.query<ICompanyInfo, void>({
      query: () => `companyInfo`,
    }),
    getVacancies: builder.query<IVacancies, void>({
      query: () => 'vacancies',
    }),
  }),
})

export const {
  useGetCatalogMenuQuery,
  useGetMenuHeaderQuery,
  useGetChatHistoryQuery,
  useGetSliderProductsQuery,
  useGetSliderContentQuery,
  useGetCompanyInfoQuery,
  useGetVacanciesQuery,
} = baseApi
