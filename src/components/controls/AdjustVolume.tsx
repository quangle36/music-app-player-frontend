import {
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack
} from '@chakra-ui/react'
import React, { FC, useEffect, useState } from 'react'
import { GoUnmute, GoMute } from 'react-icons/go'
import { useDispatch, useSelector } from 'react-redux'
import { updateCurrentVolume } from 'redux/reducers/PlayListReducer'
import { RootState } from 'redux/store'
import { DEFAULT_VOLUME } from 'utils/constants'
interface SongVolumeProps {
  handleChangeSongVolume: (percent: number) => void
}

const AdjustVolume: FC<SongVolumeProps> = ({ handleChangeSongVolume }) => {
  const [volume, setVolume] = useState(DEFAULT_VOLUME)
  const playlistStore = useSelector((state: RootState) => state.playlist)
  const dispatch = useDispatch()
  const handleChangeVolume = (e: number) => {
    dispatch(updateCurrentVolume({ volume: e }))
    setVolume(e)
  }

  const handleClickSpeaker = () => {
    setVolume((prevVolume) =>
      prevVolume !== 0 ? 0 : playlistStore.currentVolume
    )
  }

  useEffect(() => {
    handleChangeSongVolume(volume)
  }, [handleChangeSongVolume, volume])
  return (
    <div className="group relative flex w-[20px] flex-col justify-center text-white">
      <div className="absolute -top-24 rounded-md bg-slate-300 px-2 pb-2 pt-4 opacity-0 transition-all duration-100 ease-in-out group-hover:opacity-100">
        <Slider
          color="red"
          aria-label="slider-ex-1"
          style={{ padding: 0 }}
          defaultValue={100}
          value={volume}
          onChange={handleChangeVolume}
          orientation="vertical"
          minH={20}
          className="w-2"
        >
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb boxSize={2} />
        </Slider>
      </div>
      <div
        className="flex h-full flex-col items-center justify-center"
        onClick={handleClickSpeaker}
      >
        {volume === 0 ? (
          <GoMute className="" color="white" size={24} />
        ) : (
          <GoUnmute className="" color="white" size={24} />
        )}
      </div>
    </div>
  )
}

export default AdjustVolume
