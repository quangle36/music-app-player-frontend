import React from 'react'
import NewMusicListSkeleton from './components/NewMusicListSkeleton'
import NewMusicList from './components/NewMusicList'
import TrendingNewAlbums from './components/TrendingNewAlbums'

const Home = () => {
  return (
    <div className="relative w-full overflow-hidden">
      {/* <NewMusicList /> */}
      <TrendingNewAlbums />
    </div>
  )
}

export default Home
