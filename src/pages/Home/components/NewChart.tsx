import React from 'react'
import NewChartSongItem, { INewChartSongItem } from './NewChartSongItem'

const newChartSongList: Omit<INewChartSongItem, 'index'>[] = [
  {
    order: 1,
    title: 'title',
    artist: 'artist',
    album: 'album',
    duration: 'duration',
    imgSrc: 'imgSrc'
  },
  {
    order: 1,
    title: 'title',
    artist: 'artist',
    album: 'album',
    duration: 'duration',
    imgSrc: 'imgSrc'
  },
  {
    order: 1,
    title: 'title',
    artist: 'artist',
    album: 'album',
    duration: 'duration',
    imgSrc: 'imgSrc'
  },
  {
    order: 1,
    title: 'title',
    artist: 'artist',
    album: 'album',
    duration: 'duration',
    imgSrc: 'imgSrc'
  },
  {
    order: 1,
    title: 'title',
    artist: 'artist',
    album: 'album',
    duration: 'duration',
    imgSrc: 'imgSrc'
  },
  {
    order: 1,
    title: 'title',
    artist: 'artist',
    album: 'album',
    duration: 'duration',
    imgSrc: 'imgSrc'
  }
]

const NewChart = () => {
  return (
    <div className="w-1/2 px-4 py-6 text-white">
      <h1 className="mb-6 font-semibold">New Chart</h1>
      <div className="grid grid-cols-[min-content,auto,auto,auto] gap-4">
        {
          <>
            <div></div>
            <div className="font-semibold opacity-50">Title</div>
            <div className="font-semibold opacity-50">Album</div>
            <div className="font-semibold opacity-50">Time</div>
          </>
        }
        {newChartSongList.map((song, index) => {
          return <NewChartSongItem key={song.title} {...song} index={index} />
        })}
      </div>
    </div>
  )
}

export default NewChart
