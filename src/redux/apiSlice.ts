import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
// import axiosBaseQuery from './axiosBaseQuery'
import { BASE_URL } from 'utils/constants'
import { RootState } from './store'

const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
  prepareHeaders: (headers, { getState }) => {
    const accessToken = (getState() as RootState).auth.token?.access_token
    console.log('accessToken', accessToken)
    // If we have a token set in state, let's assume that we should be passing it.
    if (accessToken) {
      headers.set('authorization', `Bearer ${accessToken}`)
    }

    return headers
  }
})

const apiSlice = createApi({
  baseQuery: baseQuery,
  reducerPath: 'apiSlice',
  endpoints: () => ({})
})
export default apiSlice
