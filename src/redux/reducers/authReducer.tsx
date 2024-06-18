import { createSlice } from '@reduxjs/toolkit'
import { User } from 'interface/user.interface'
import { RootState } from 'redux/store'
import { authApi } from 'services/auth.services'

interface TokenType {
  access_token: string
  refresh_token: string
}

interface AuthState {
  user: User | null
  token: TokenType | null
  isLoggedIn?: boolean
}

const authSlice = createSlice({
  name: 'auth',
  initialState: { user: null, token: null } as AuthState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addMatcher(authApi.endpoints.login.matchFulfilled, (state, action) => {
        state.isLoggedIn = true
        state.user = action.payload.user
        state.token = action.payload.token
      })
      .addMatcher(authApi.endpoints.login.matchRejected, (state) => {
        state.isLoggedIn = false
      })
      .addMatcher(authApi.endpoints.register.matchFulfilled, (state) => {
        state.isLoggedIn = false
      })
      .addMatcher(authApi.endpoints.register.matchRejected, (state) => {
        state.isLoggedIn = false
      })
      .addMatcher(authApi.endpoints.logout.matchFulfilled, (state) => {
        state.isLoggedIn = false
        state.user = null
        state.token = null
      })
  }
})

export default authSlice.reducer

export const selectCurrentUser = (state: RootState) => state.auth.user
export const selectIsLoggedIn = (state: RootState) => state.auth.isLoggedIn
