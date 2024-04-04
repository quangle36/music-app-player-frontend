import apiSlice from 'redux/apiSlice'

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials: { email: string; password: string }) => ({
        url: '/auth/login',
        method: 'POST',
        body: credentials
      })
    }),
    register: builder.mutation({
      query: (data: {
        name: string
        email: string
        password: string
        passwordConfirm: string
      }) => ({
        url: '/auth/register',
        method: 'POST',
        body: data
      })
    }),
    logout: builder.mutation({
      query: () => ({
        url: '/auth/logout',
        method: 'POST'
      })
    }),
    fetchMusic: builder.query({
      query: () => ({
        url: '/music',
        method: 'GET'
      })
    })
  })
})

export const {
  useLoginMutation,
  useRegisterMutation,
  useLogoutMutation,
  useFetchMusicQuery
} = authApi
