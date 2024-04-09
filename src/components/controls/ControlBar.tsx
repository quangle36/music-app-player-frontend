/* eslint-disable react-hooks/rules-of-hooks */
import { Music } from 'interface/music.interface'
import React, { useEffect, useRef, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import classNames from 'classnames'
import { DEFAULT_SONG_TIME, PLAY_LIST_HISTORY } from 'redux/constants'
import {
  incrementIndex,
  togglePlay,
  updateIndex
} from 'redux/reducers/PlayListReducer'
import { RootState } from 'redux/store'
import { useLocalStorage } from 'utils'
import ProgressBar from './ProgressBar'

interface RefObject {
  handleUpdateProgressBar: (percent: number) => void
}

interface ISongTime {
  currentTime: string
  allTime: string
}

const ControlBar = () => {
  const playlistStore = useSelector((state: RootState) => state.playlist)
  const dispatch = useDispatch()
  const [songTime, setSongTime] = useState<ISongTime>(DEFAULT_SONG_TIME)
  const randomList = useRef<Array<number>>([])
  const audioRef = useRef<HTMLAudioElement>(null)
  const progressBarRef = useRef<RefObject>(null)

  /**
   * Handle change song volume
   * @param {number} percent
   */
  const handleUpdateVolume = (percent: number) => {
    if (audioRef.current) {
      audioRef.current.volume = percent / 100
    }
  }

  /**
   * Handle change song progress
   * @param {number} offsetX
   * @param {number} clientWidth
   */
  const handleChangeAudioProgress = (offsetX: number, clientWidth: number) => {
    if (audioRef.current) {
      const duration = audioRef.current.duration
      audioRef.current.currentTime = (offsetX / clientWidth) * duration
    }
  }

  /**
   * Handle play song with current index
   */

  const handlePlayCurrentSong = () => {
    if (audioRef.current && progressBarRef.current) {
      progressBarRef.current.handleUpdateProgressBar(0)
      audioRef.current.children[0].setAttribute(
        'src',
        playlistStore.list[playlistStore.index].src
      )
      audioRef.current.load()
      if (playlistStore.isPlay) {
        audioRef.current.play()
      }
    }
  }

  /**
   * Listen to add song to playlist
   */
  useEffect(() => {
    if (playlistStore.list) {
      handlePlayCurrentSong()
    }
  }, [playlistStore.list])

  /**
   * Listen to play or pause song
   */
  useEffect(() => {
    playlistStore.isPlay ? audioRef.current?.play() : audioRef.current?.pause()
  }, [playlistStore.isPlay])

  /**
   * Listen to change song index
   */
  useEffect(() => {
    handlePlayCurrentSong()
  }, [playlistStore.index])

  /**
   * Handle play audio
   */
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.onplaying = () => {
        if (audioRef.current && audioRef.current.duration) {
          const duration = audioRef.current.duration
          const minutes = String(Math.floor(duration / 60)).padStart(2, '0')
          const seconds = String(Math.floor(duration % 60)).padStart(2, '0')
          setSongTime((prev) => ({
            ...prev,
            allTime: `${minutes}:${seconds}`
          }))
        }

        //Get playlist history and save this song to local storage
        const playlistHistoryStorage = useLocalStorage(PLAY_LIST_HISTORY)
        const playlistHistory: Music[] = playlistHistoryStorage.getItem()
        if (playlistHistory && playlistHistory.length) {
          const isSongExisted = playlistHistory.some(
            (song) => song._id === playlistStore.list[playlistStore.index]._id
          )
          if (!isSongExisted) {
            playlistHistoryStorage.setItem([
              ...playlistHistory,
              playlistStore.list[playlistStore.index]
            ])
          }
        } else {
          playlistHistoryStorage.setItem([
            playlistStore.list[playlistStore.index]
          ])
        }
      }

      /**
       * get current time of song when the song is playing
       */
      audioRef.current.ontimeupdate = () => {
        if (audioRef.current && progressBarRef.current) {
          const currentTime = audioRef.current.currentTime
          const duration = audioRef.current.duration
          const minutes = String(Math.floor(currentTime / 60)).padStart(2, '0')
          const seconds = String(Math.floor(currentTime % 60)).padStart(2, '0')
          setSongTime((prev) => ({
            ...prev,
            currentTime: `${minutes}:${seconds}`
          }))
          progressBarRef.current.handleUpdateProgressBar(
            (currentTime / duration) * 100
          )
        }
      }

      /**
       * handle end song
       */
      audioRef.current.onended = () => {
        if (audioRef.current && progressBarRef.current) {
          progressBarRef.current.handleUpdateProgressBar(0)
          dispatch(togglePlay())

          /**
           * handle repeat song
           */
          if (playlistStore.isRepeat) {
            dispatch(togglePlay())
            audioRef.current.play()
            return
          }

          /**
           * handle random song
           */
          if (playlistStore.isRandom && playlistStore.list.length > 1) {
            let index: number
            if (!randomList.current.length) {
              randomList.current = [playlistStore.index]
            }
            //Check random index already existed in the random list
            do {
              index = Math.floor(Math.random() * playlistStore.list.length)
            } while (randomList.current.includes(index))

            randomList.current = [...randomList.current, index]
            dispatch(updateIndex({ newIndex: index }))
            if (randomList.current.length === playlistStore.list.length)
              randomList.current = []
            return
          }

          /**
           * handle next song if length of list > 1
           */
          if (playlistStore.list.length > 1) {
            dispatch(incrementIndex())
          }
        }
      }
    }
  }, [playlistStore])
  return (
    <div
      className={classNames(
        'h-[150px] md:h-[80px] w-full fixed bottom-0 left-0 bg-primary flex justify-center shadow shadow-text-2',
        { hidden: !playlistStore.isOpenControl }
      )}
      style={{ zIndex: '999999' }}
    >
      <ProgressBar
        ref={progressBarRef}
        handleChangeAudioProgress={handleChangeAudioProgress}
      />
    </div>
  )
}

export default ControlBar
