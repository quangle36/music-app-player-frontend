// import storage from 'redux-persist/lib/storage'
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore
} from 'redux-persist'
import storageSession from 'redux-persist/lib/storage/session'
import { setupListeners } from '@reduxjs/toolkit/query'
import apiSlice from './apiSlice'
import authReducer from 'redux/reducers/authReducer'
import { configureStore } from '@reduxjs/toolkit'
import PlayListReducer from './reducers/PlayListReducer'

const authPersistConfig = {
  key: 'auth',
  storage: storageSession
}
const persistedReducer = persistReducer(authPersistConfig, authReducer)
export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: persistedReducer,
    playlist: PlayListReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    }).concat(apiSlice.middleware)
})

setupListeners(store.dispatch)
export const persistor = persistStore(store)
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
