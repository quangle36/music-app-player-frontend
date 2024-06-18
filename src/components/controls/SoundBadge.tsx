import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from 'redux/store'

const SoundBadge = () => {
  const playlistStore = useSelector((state: RootState) => state.playlist)
  return (
    <div className="flex items-center text-sm text-white">
      <img className="mr-4 size-8" src={playlistStore.list[0].image} />
      <div className="flex flex-col">
        <h2>{playlistStore.list[0].artists}</h2>
        <p className="w-[200px] truncate">{playlistStore.list[0].title}</p>
      </div>
    </div>
  )
}

export default SoundBadge
