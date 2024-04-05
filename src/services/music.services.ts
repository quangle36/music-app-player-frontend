import { Music } from 'interface/music.interface'
import apiSlice from 'redux/apiSlice'

export const musicApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    fetchMusic: builder.query({
      query: () => ({
        url: '/music',
        method: 'GET'
      })
    })
  })
})

export const { useFetchMusicQuery } = musicApi
