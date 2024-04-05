import React from 'react'
import NewMusicListSkeleton from './components/NewMusicListSkeleton'
import NewMusicList from './components/NewMusicList'

const Home = () => {
  return (
    <div className="relative size-full">
      <NewMusicList />
      <img
        src={`http://localhost:8000/api/files/1709177747810-bezkoder-hds.png`}
      />
    </div>
  )
}

export default Home
