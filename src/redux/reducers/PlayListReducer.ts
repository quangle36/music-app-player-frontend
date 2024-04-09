/* eslint-disable react-hooks/rules-of-hooks */
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Music } from 'interface/music.interface'
import { PLAY_LIST_HISTORY } from 'redux/constants'
import { useLocalStorage } from 'utils'
import { SONG_DEFAULT } from 'utils/constants'

const playListHistoryStorage = useLocalStorage(PLAY_LIST_HISTORY)
const playlistHistory = playListHistoryStorage.getItem()

export interface IPlayListReducer {
  list: Music[]
  isOpenControl: boolean
  isPlay: boolean
  index: number
  isRepeat: boolean
  isOpenPlayListModal: boolean
  isRandom: boolean
}
const initialState: IPlayListReducer = {
  list:
    playlistHistory && playlistHistory.length
      ? playlistHistory
      : [SONG_DEFAULT],
  isOpenControl: playlistHistory && playlistHistory.length ? true : false,
  isPlay: false,
  index: 0,
  isRepeat: false,
  isOpenPlayListModal: false,
  isRandom: false
}

export const playListSlice = createSlice({
  name: 'playlist',
  initialState,
  reducers: {
    toggleControl: (state) => {
      state.isOpenControl = !state.isOpenControl
    },
    togglePlay: (state) => {
      state.isPlay = !state.isPlay
    },
    updateIndex: (state, action: PayloadAction<{ newIndex: number }>) => {
      state.index = action.payload.newIndex
      state.isPlay = true
    },
    incrementIndex: (state) => {
      state.index = ++state.index > state.list.length - 1 ? 0 : state.index
      state.isPlay = true
    },
    decrementIndex: (state) => {
      state.index = --state.index < 0 ? state.list.length - 1 : state.index
      state.isPlay = true
    },
    toggleRepeat: (state) => {
      state.isRepeat = !state.isRepeat
    },
    togglePlayPlayListModal: (state) => {
      state.isOpenPlayListModal = !state.isOpenPlayListModal
    },
    updateIsOpenPlayPlaylistModal: (
      state,
      action: PayloadAction<{ newIsOpen: boolean }>
    ) => {
      state.isOpenPlayListModal = action.payload.newIsOpen
    },
    toggleRandom: (state) => {
      state.isRandom = !state.isRandom
    },
    addSongToPlayList: (
      state,
      action: PayloadAction<{ songs: Music[]; isOpenPlayListModal: boolean }>
    ) => {
      state.list = action.payload.songs
      state.isOpenControl = true
      state.isPlay = true
      state.isOpenPlayListModal = action.payload.isOpenPlayListModal
      state.index = 0
    }
  }
})

export const {
  toggleControl,
  togglePlay,
  togglePlayPlayListModal,
  toggleRandom,
  toggleRepeat,
  updateIndex,
  incrementIndex,
  decrementIndex,
  addSongToPlayList,
  updateIsOpenPlayPlaylistModal
} = playListSlice.actions

export default playListSlice.reducer
