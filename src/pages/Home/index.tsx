import React from 'react'
import NewMusicListSkeleton from './components/NewMusicListSkeleton'
import NewMusicList from './components/NewMusicList'
import TrendingNewAlbums from './components/TrendingNewAlbums'
import NewChart from './components/NewChart'
import TrendingArtist from './components/TrendingArtist'
import Genre from './components/Genre'

const Home = () => {
  return (
    <div className="relative w-full overflow-hidden">
      {/* <NewMusicList /> */}
      <TrendingNewAlbums />
      <div className="flex w-full justify-center">
        <NewChart />

        <div>
          <TrendingArtist />
          <Genre />
        </div>
      </div>
    </div>
  )
}

export default Home
