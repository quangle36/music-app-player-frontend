/* eslint-disable react-hooks/rules-of-hooks */
import React, { useCallback, useEffect, useRef, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import classNames from 'classnames'
import { FiPlay, FiPause, FiSkipBack, FiSkipForward } from 'react-icons/fi'
import { IoShuffleOutline, IoRepeatOutline } from 'react-icons/io5'
import {
  incrementIndex,
  togglePlay,
  updateIndex
} from 'redux/reducers/PlayListReducer'
import { RootState } from 'redux/store'
import ProgressBar from './ProgressBar'
import AdjustVolume from './AdjustVolume'
import SoundBadge from './SoundBadge'
import { DEFAULT_SONG_TIME } from 'utils/constants'

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
  // const totalDuration = convertSeconds(audioRef.current?.duration || 0)
  // const currentDuration = convertSeconds(audioRef.current?.currentTime || 0)
  /**
   * Handle change song volume
   * @param {number} percent
   */
  const handleChangeSongVolume = (percent: number) => {
    if (audioRef.current) {
      audioRef.current.volume = percent / 100
    }
  }

  /**
   * Handle change song progress
   * @param {number} offsetX
   * @param {number} clientWidth
   */
  const handleChangeAudioProgress = (currentValue: number) => {
    if (audioRef.current) {
      const duration = audioRef.current.duration
      audioRef.current.currentTime = (currentValue / 100) * duration
    }
  }

  /**
   * Handle play song with current index
   */
  const handlePlayCurrentSong = useCallback(() => {
    if (audioRef.current && progressBarRef.current) {
      progressBarRef.current.handleUpdateProgressBar(0)
      audioRef.current.children[0].setAttribute(
        'src',
        playlistStore.list[playlistStore.index].src
      )
      audioRef.current.muted = false
      audioRef.current.load()
      audioRef.current.play()
    }
  }, [playlistStore.index, playlistStore.list])

  const handlePlayPauseSong = () => {
    dispatch(togglePlay())
  }

  /**
   * Listen to add song to playlist
   */
  // useEffect(() => {
  //   if (playlistStore.list) {
  //     handlePlayCurrentSong()
  //   }
  // }, [handlePlayCurrentSong, playlistStore.list])

  /**
   * Listen to play or pause song
   */

  // useEffect(() => {
  //   playlistStore.isPlay ? audioRef.current?.play() : audioRef.current?.pause()
  // }, [playlistStore.isPlay])

  /**
   * Listen to change song index
   */
  useEffect(() => {
    if (playlistStore.isPlay) {
      return handlePlayCurrentSong()
    }
    audioRef.current?.pause()
  }, [handlePlayCurrentSong, playlistStore.isPlay])

  /**
   * Handle play audio
   */
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.onplaying = () => {
        // if (audioRef.current && audioRef.current.duration) {
        //   const duration = audioRef.current.duration
        //   const minutes = String(Math.floor(duration / 60)).padStart(2, '0')
        //   const seconds = String(Math.floor(duration % 60)).padStart(2, '0')
        //   setSongTime((prev) => ({
        //     ...prev,
        //     allTime: `${minutes}:${seconds}`
        //   }))
        // }
        //Get playlist history and save this song to local storage
        // const playlistHistoryStorage = useLocalStorage(PLAY_LIST_HISTORY)
        // const playlistHistory: Music[] = playlistHistoryStorage.getItem()
        // if (playlistHistory && playlistHistory.length) {
        //   const isSongExisted = playlistHistory.some(
        //     (song) => song._id === playlistStore.list[playlistStore.index]._id
        //   )
        //   if (!isSongExisted) {
        //     playlistHistoryStorage.setItem([
        //       ...playlistHistory,
        //       playlistStore.list[playlistStore.index]
        //     ])
        //   }
        // } else {
        //   playlistHistoryStorage.setItem([
        //     playlistStore.list[playlistStore.index]
        //   ])
        // }
      }

      /**
       * get current time of song when the song is playing
       */
      audioRef.current.ontimeupdate = () => {
        if (audioRef.current && progressBarRef.current) {
          const currentTime = audioRef.current.currentTime || 0
          const duration = audioRef.current.duration || 1
          const minutes = String(Math.floor(currentTime / 60) || 0).padStart(
            2,
            '0'
          )
          const seconds = String(Math.floor(currentTime % 60) || 0).padStart(
            2,
            '0'
          )
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
  }, [dispatch, playlistStore])
  return (
    <div
      className={classNames(
        'h-[150px] md:h-[80px] w-full fixed bottom-0 left-0 bg-primary flex shadow shadow-text-2 z-[999] justify-around',
        { hidden: !playlistStore.isOpenControl }
      )}
    >
      <audio autoPlay={false} muted ref={audioRef} className="hidden">
        <source src="/" />
      </audio>
      <div className="flex w-[240px] items-center justify-around text-slate-300">
        <FiSkipBack size={24} />
        {playlistStore.isPlay ? (
          <FiPause
            size={24}
            onClick={() => {
              handlePlayPauseSong()
            }}
          />
        ) : (
          <FiPlay
            size={24}
            onClick={() => {
              handlePlayPauseSong()
            }}
          />
        )}
        <FiSkipForward size={24} />
        <IoShuffleOutline size={24} />
        <IoRepeatOutline size={24} />
      </div>
      <div className="w-[50px] self-center text-white">
        {songTime.currentTime}
      </div>
      <ProgressBar
        ref={progressBarRef}
        handleChangeAudioProgress={handleChangeAudioProgress}
      />
      <div className="w-[50px] self-center text-white">{songTime.allTime}</div>
      <SoundBadge />
      <AdjustVolume handleChangeSongVolume={handleChangeSongVolume} />
    </div>
  )
}

export default ControlBar
