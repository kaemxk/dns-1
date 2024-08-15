import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

interface DataCity {
  results: [
    {
      components: {
        city: string
      }
    },
  ]
}

interface PropsFetchCity {
  lat: number
  lon: number
}

const apiKey = '3adb082e160b450e893045bb6d8ffb1c'

export const configSlice = createApi({
  reducerPath: 'configApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `https://api.opencagedata.com/`,
  }),
  endpoints: builder => ({
    getCity: builder.query<string, PropsFetchCity>({
      query: position => `geocode/v1/json?q=${position.lat},${position.lon}&key=${apiKey}`,
      transformResponse: (response: DataCity) => response.results[0].components.city,
    }),
  }),
})

export const { useGetCityQuery } = configSlice
