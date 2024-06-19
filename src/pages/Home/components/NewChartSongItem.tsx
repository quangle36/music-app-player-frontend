import React from 'react'

export interface INewChartSongItem {
  order: number
  title: string
  artist: string
  album: string
  duration: string
  imgSrc: string
  index: number
}

const NewChartSongItem = (props: INewChartSongItem) => {
  const { order, title, album, duration, artist, index } = props
  console.log('index', index)
  return (
    // <div className="flex w-full justify-between">
    //   <div className="flex items-center ">{order}</div>
    //   <div className="flex flex-col">
    //     <h1 className={`${index === 0 ? 'block' : 'hidden'}`}>Title</h1>
    //     <div className="flex">
    //       <div className="size-[40px] bg-red-500" />
    //       <div>
    //         <h2>{title}</h2>
    //         <h3>{artist}</h3>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="flex flex-col">
    //     <h1 className={`${index === 0 ? 'block' : 'hidden'}`}>Album</h1>
    //     <h2>{album}</h2>
    //   </div>
    //   <div className="flex flex-col">
    //     <h1 className={`${index === 0 ? 'block' : 'hidden'}`}>Time</h1>
    //     <h2>{duration}</h2>
    //   </div>
    // </div>
    <>
      <div className="flex items-center">{order}</div>
      <div className="flex items-center space-x-2">
        <div className="size-[60px] rounded-lg bg-red-500"></div>
        <div>
          <h1 className="text-lg font-semibold">{title}</h1>
          <h2 className="text-sm opacity-70">{artist}</h2>
        </div>
      </div>
      <div className="flex items-center font-medium">{album}</div>
      <div className="flex items-center font-medium">{duration}</div>
    </>
  )
}

export default NewChartSongItem
