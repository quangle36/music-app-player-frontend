import { Swiper, SwiperSlide } from 'swiper/react'
// import { Autoplay } from 'swiper'
import SwiperActionInput from 'components/Swiper/SwiperActionInput'
import { IoIosPause, IoIosPlay } from 'react-icons/io'
import { Music } from 'interface/music.interface'
import NewMusicSkeletonList from './NewMusicListSkeleton'
import { useFetchMusicQuery } from 'services/music.services'
import { SWIPER_NEW_MUSIC_BREAK_POINTS } from 'utils/constants'

interface NewMusicListProps {
  musics: Music[]
}

const NewMusicList = () => {
  const { data } = useFetchMusicQuery({})
  console.log('data', data)
  return (
    <Swiper
      spaceBetween={10}
      breakpoints={SWIPER_NEW_MUSIC_BREAK_POINTS}
      // modules={[Autoplay]}
      loop={true}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true
      }}
    >
      <div className="absolute left-0 top-0 flex w-full items-center">
        <h1 className="text-xl lg:text-2xl">Mới cập nhật</h1>
        <div className="mx-5 h-[4px] flex-1 border-y-[1px] border-text-1"></div>
        <SwiperActionInput type="prev" />
        <SwiperActionInput type="next" />
      </div>
      {data?.data?.map((music) => (
        <SwiperSlide key={music._id}>
          <div className="group relative flex cursor-pointer flex-col">
            <div className="absolute left-0 top-0 z-10 flex h-[150px] w-full items-center justify-center rounded-lg bg-transparent opacity-100 transition-all ease-in-out group-hover:bg-primary group-hover:opacity-50 md:h-[200px]"></div>
            <div className="absolute left-0 top-0 z-20 flex h-[150px] w-full items-center justify-center rounded-lg bg-transparent opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100 md:h-[200px]">
              {/* {playListStore.list[playListStore.index]._id === song._id &&
              playListStore.isPlay ? (
                <PauseIcon
                  className="size-14 scale-180 text-high-light transition-all duration-300 ease-in-out group-hover:scale-100"
                  onClick={handlePauseSong}
                />
              ) : (
                <PlayIcon
                  className="size-14 scale-180 text-high-light transition-all duration-300 ease-in-out group-hover:scale-100"
                  onClick={() => handlePlaySong(song)}
                />
              )} */}
            </div>
            <figure className="relative z-0 h-[150px] md:h-[200px]">
              {/* {playListStore.list[playListStore.index]._id === song._id &&
                playListStore.isPlay && (
                  <div
                    className={classNames(
                      'absolute w-full h-full flex justify-center items-center group-hover:hidden'
                    )}
                  >
                    <img src={IconPlayingGif} className="size-8" alt="" />
                  </div>
                )} */}
              <img
                src={music.image}
                alt=""
                className="h-[150px] w-full rounded-lg object-cover md:h-[200px]"
              />
            </figure>
            {/* <div className="absolute right-1 top-2 z-30 opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100">
              <DropDownMusicOptions id={song._id} />
            </div> */}
          </div>
          {/* <h1 className="mt-1 line-clamp-2 px-1 text-sm lg:text-base">
            <Link to={`/bai-hat/${song.slug}`}>{song.title}</Link>
          </h1> */}
          <span className="line-clamp-1 px-1 text-xs">{music.artists}</span>
          <span className="line-clamp-1 px-1 text-xs">{music.title}</span>
          <img src="files/1709177747810-bezkoder-hds.png" />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default NewMusicList
