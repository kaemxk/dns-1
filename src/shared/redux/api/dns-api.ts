import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export type DNSLocationData = {
  data: {
    cities: DNSCityData[]
  }
}

export type DNSCityData = {
  id: string
  name: string
  regionId: number
  citySlug: string
  latitude: number
  longitude: number
  code: string
  shopUrl: string
}

export type DNSSupportData = {
  data: {
    phone: string
    work: string
  }
}

export const dnsApi = createApi({
  reducerPath: 'dnsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `https://restapi.dns-shop.ru/v1/`,
  }),
  endpoints: builder => ({
    getCityList: builder.query<DNSCityData[], void>({
      query: () => `get-city-list`,
      transformResponse: (response: DNSLocationData) => response.data.cities,
    }),
    getMenuHeader: builder.query<DNSSupportData, string>({
      query: (header: string) => {
        return {
          url: 'get-menu-header?shortMenu=1',
          headers: { CityId: header },
        }
      },
    }),
  }),
})

export const { useLazyGetCityListQuery, useLazyGetMenuHeaderQuery } = dnsApi
