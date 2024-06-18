import React from 'react'

const TrendingNewAlbums = () => {
  return (
    <div className="px-4 py-6 text-lg text-white">
      Trending New Album and Playlist
      <div
        className="relative h-[300px] w-[500px] bg-[url('https://media.pitchfork.com/photos/6076fd2e17d37fe4717d4907/16:9/w_1280,c_limit/Olivia-Rodrigo-SOUR.jpeg')] bg-cover"
        // src="https://media.pitchfork.com/photos/6076fd2e17d37fe4717d4907/16:9/w_1280,c_limit/Olivia-Rodrigo-SOUR.jpeg"
      >
        <div className="absolute top-0 w-full bg-transparent-white opacity-50">
          quang
        </div>
        <div className="absolute bottom-0">le</div>
      </div>
      {/* <div className="relative size-80 overflow-hidden rounded-lg shadow-lg">
        <img
          src={
            'https://media.pitchfork.com/photos/6076fd2e17d37fe4717d4907/16:9/w_1280,c_limit/Olivia-Rodrigo-SOUR.jpeg'
          }
          alt={'title'}
          className="size-full object-cover"
        />
        <div className="absolute inset-0 bg-purple-500 opacity-50"></div>
        <div className="absolute inset-0 flex flex-col justify-between p-4">
          <div className="text-lg font-bold text-white">Top Album</div>
          <div className="text-white">
            <h3 className="text-2xl font-bold">{'title'}</h3>
            <p className="mt-1">
              {'artist'} &bull; {'year'}
            </p>
          </div>
        </div>
      </div> */}
    </div>
  )
}

export default TrendingNewAlbums
