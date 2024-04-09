import React from 'react'
import NewMusicListSkeleton from './components/NewMusicListSkeleton'
import NewMusicList from './components/NewMusicList'

const Home = () => {
  return (
    <div className="relative w-full overflow-hidden">
      <NewMusicList />
    </div>
  )
}

export default Home
