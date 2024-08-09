import { createSlice } from '@reduxjs/toolkit'

interface State {
  city: string
  loading: boolean
}

interface PropsFetchCity {
  lat: number
  lon: number
}

interface FetchCity {
  licenses: []
  rate: object
  results: [
    {
      components: {
        city: string
      }
    },
  ]
  status: object
  stay_informed: object
  thanks: string
  timestamp: object
}

const initialState: State = {
  city: '',
  loading: false,
}

const apiKey = '3adb082e160b450e893045bb6d8ffb1c'

const configSlice = createSlice({
  name: 'config',
  initialState,
  reducers: create => ({
    fetchCity: create.asyncThunk(
      async ({ lat, lon }: PropsFetchCity) => {
        const res = await fetch(
          `https://api.opencagedata.com/geocode/v1/json?q=${lat},${lon}&key=${apiKey}`,
        )
        const data = (await res.json()) as FetchCity
        return data.results[0].components.city
      },
      {
        pending: state => {
          state.loading = true
        },
        rejected: state => {
          state.loading = false
        },
        fulfilled: (state, action) => {
          state.loading = false
          state.city = action.payload
        },
      },
    ),
  }),
})

export const { fetchCity } = configSlice.actions

export default configSlice.reducer
