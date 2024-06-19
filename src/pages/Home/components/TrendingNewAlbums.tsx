import React from 'react'
import { CiHeart } from 'react-icons/ci'
const TrendingNewAlbums = () => {
  return (
    <div className="px-4 py-6 text-white">
      <h1 className="font-semibold">Trending New Album and Playlist</h1>
      <div className="flex w-full space-x-4">
        {/* Top album */}

        <div
          className="relative mt-4 h-[300px] flex-1 rounded-lg bg-[url('https://media.pitchfork.com/photos/6076fd2e17d37fe4717d4907/16:9/w_1280,c_limit/Olivia-Rodrigo-SOUR.jpeg')] bg-cover bg-center"
          // src="https://media.pitchfork.com/photos/6076fd2e17d37fe4717d4907/16:9/w_1280,c_limit/Olivia-Rodrigo-SOUR.jpeg"
        >
          <div className="absolute size-full rounded-lg bg-transparent-white opacity-50"></div>

          <div className="absolute top-0 flex size-full flex-col p-4">
            <p className="flex-1 font-semibold">Top Album</p>
            <div className=" flex items-end justify-between">
              <div>
                <h1 className="font-semibold">SOUR</h1>
                <p className="text-sm font-light">Olivia Rodrigo • 2021</p>
              </div>

              <div>
                <CiHeart size={24} />
              </div>
            </div>
          </div>
        </div>

        {/* New album */}
        <div className="flex flex-1  flex-col space-y-2">
          <div
            className="relative mt-4 size-full rounded-lg bg-[url('https://media.pitchfork.com/photos/6076fd2e17d37fe4717d4907/16:9/w_1280,c_limit/Olivia-Rodrigo-SOUR.jpeg')] bg-cover bg-center"
            // src="https://media.pitchfork.com/photos/6076fd2e17d37fe4717d4907/16:9/w_1280,c_limit/Olivia-Rodrigo-SOUR.jpeg"
          >
            <div className="absolute size-full rounded-lg bg-transparent-white opacity-50"></div>

            <div className="absolute top-0 flex size-full flex-col p-4 text-white">
              <p className="flex-1 font-semibold">Top Album</p>
              <div className=" flex items-end justify-between">
                <div>
                  <h1 className="font-semibold">SOUR</h1>
                  <p className="text-sm font-light">Olivia Rodrigo • 2021</p>
                </div>

                <div>
                  <CiHeart size={24} />
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-2 text-white">
            <div className="size-[40px] rounded-md bg-red-500"></div>
            <div className="flex-1">
              <h1 className="font-semibold">Jpop</h1>
              <p className="text-sm font-light">Playlist • Fariabadi</p>
            </div>
            <div>
              <CiHeart size={24} />
            </div>
          </div>
          <div className="flex items-center space-x-2 text-white">
            <div className="size-[40px] rounded-md bg-red-500"></div>
            <div className="flex-1">
              <h1 className="font-semibold">Dora The Explosion</h1>
              <p className="text-sm font-light">Playlist • Abdul</p>
            </div>
            <div>
              <CiHeart size={24} />
            </div>
          </div>
        </div>

        <div className="flex flex-1 flex-col space-y-2">
          <div
            className="relative mt-4 size-full rounded-lg bg-[url('https://media.pitchfork.com/photos/6076fd2e17d37fe4717d4907/16:9/w_1280,c_limit/Olivia-Rodrigo-SOUR.jpeg')] bg-cover bg-center"
            // src="https://media.pitchfork.com/photos/6076fd2e17d37fe4717d4907/16:9/w_1280,c_limit/Olivia-Rodrigo-SOUR.jpeg"
          >
            <div className="absolute size-full rounded-lg bg-transparent-white opacity-50"></div>

            <div className="absolute top-0 flex size-full flex-col p-4 text-white">
              <p className="flex-1 font-semibold">Top Album</p>
              <div className=" flex items-end justify-between">
                <div>
                  <h1 className="font-semibold">SOUR</h1>
                  <p className="text-sm font-light">Olivia Rodrigo • 2021</p>
                </div>

                <div>
                  <CiHeart size={24} />
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-2 text-white">
            <div className="size-[40px] rounded-md bg-red-500"></div>
            <div className="flex-1">
              <h1 className="font-semibold">Jpop</h1>
              <p className="text-sm font-light">Playlist • Fariabadi</p>
            </div>
            <div>
              <CiHeart size={24} />
            </div>
          </div>
          <div className="flex items-center space-x-2 text-white">
            <div className="size-[40px] rounded-md bg-red-500"></div>
            <div className="flex-1">
              <h1 className="font-semibold">Dora The Explosion</h1>
              <p className="text-sm font-light">Playlist • Abdul</p>
            </div>
            <div>
              <CiHeart size={24} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TrendingNewAlbums
