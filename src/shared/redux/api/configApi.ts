import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

interface DataCity {
  licenses: []
  rate: object
  results: [
    {
      components: {
        state: string
      }
    },
  ]
  status: object
  stay_informed: object
  thanks: string
  timestamp: object
}

interface PropsFetchCity {
  lat: number
  lon: number
}

const apiKey = '3adb082e160b450e893045bb6d8ffb1c'

export const configApi = createApi({
  reducerPath: 'configApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `https://api.opencagedata.com/`,
  }),
  endpoints: builder => ({
    getCity: builder.query<DataCity, PropsFetchCity>({
      query: ({ lat, lon }) => `geocode/v1/json?q=${lat},${lon}&key=${apiKey}`,
    }),
  }),
})

export const { useGetCityQuery } = configApi
