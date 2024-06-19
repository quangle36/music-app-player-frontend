import React from 'react'

const Genre = () => {
  return (
    <div className="w-fit py-6">
      <div className="flex justify-between">
        <h1 className="mb-6 font-semibold text-white">Genres</h1>
        <p className="text-blue-500">See more</p>
      </div>
      <div className="flex space-x-4">
        <div className="size-[150px] rounded-lg bg-red-500"></div>
        <div className="size-[150px] rounded-lg bg-red-500"></div>
        <div className="size-[150px] rounded-lg bg-red-500"></div>
      </div>
    </div>
  )
}

export default Genre
