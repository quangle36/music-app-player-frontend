import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperActionInput from 'components/Swiper/SwiperActionInput'
import { IoIosPause, IoIosPlay } from 'react-icons/io'
import IconPlayingGif from 'assets/icon-playing.gif'
import { Music } from 'interface/music.interface'
import { useFetchMusicQuery } from 'services/music.services'
import { SWIPER_NEW_MUSIC_BREAK_POINTS } from 'utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import {
  addSongToPlayList,
  // incrementIndex,
  togglePlay
} from 'redux/reducers/PlayListReducer'
import classNames from 'classnames'
import { RootState } from 'redux/store'

// interface NewMusicListProps {
//   musics: Music[]
// }

const NewMusicList = () => {
  const { data } = useFetchMusicQuery({})
  const dispatch = useDispatch()
  const playListStore = useSelector((state: RootState) => state.playlist)
  const handleToggleSong = (song: Music) => {
    if (song._id === playListStore.list[playListStore.index]._id) {
      return dispatch(togglePlay())
    }
    dispatch(addSongToPlayList({ songs: [song] }))
  }

  return (
    <>
      <Swiper
        className="w-full text-white"
        wrapperClass="flex mt-16"
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
          <h1 className="text-2xl">Mới cập nhật</h1>
          <div className="mx-5 h-[4px] flex-1 border-y-[1px] border-text-1"></div>
          <SwiperActionInput type="prev" />
          <SwiperActionInput type="next" />
        </div>
        {data?.data?.map((music: Music) => (
          <SwiperSlide key={music._id}>
            <div className="group relative flex cursor-pointer flex-col">
              <div className="absolute left-0 top-0 z-10 flex  size-full h-full items-center justify-center rounded-lg bg-transparent opacity-100 transition-all ease-in-out group-hover:bg-primary group-hover:opacity-50"></div>
              <div
                onClick={() => {
                  handleToggleSong(music)
                }}
                className="absolute left-0 top-0 z-20 flex size-full h-full items-center justify-center rounded-lg bg-transparent opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100"
              >
                {playListStore.list[playListStore.index]._id === music._id &&
                playListStore.isPlay ? (
                  <IoIosPause className="size-14 scale-180 text-high-light transition-all duration-300 ease-in-out group-hover:scale-100" />
                ) : (
                  <IoIosPlay className="size-14 scale-180 text-high-light transition-all duration-300 ease-in-out group-hover:scale-100" />
                )}
              </div>
              <figure className="relative z-0 size-[200px]">
                {playListStore.list[playListStore.index]._id === music._id &&
                  playListStore.isPlay && (
                    <div
                      className={classNames(
                        'absolute w-full h-full flex justify-center items-center group-hover:hidden'
                      )}
                    >
                      <img src={IconPlayingGif} className="size-8" alt="" />
                    </div>
                  )}
                <img
                  src={music.image}
                  alt=""
                  className="w-full rounded-lg object-cover"
                />
              </figure>
              {/* <div className="absolute right-1 top-2 z-30 opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100">
              <DropDownMusicOptions id={song._id} />
            </div> */}
            </div>
            {/* <h1 className="mt-1 line-clamp-2 px-1 text-sm lg:text-base">
            <Link to={`/bai-hat/${song.slug}`}>{song.title}</Link>
          </h1> */}
            <span className="line-clamp-2 px-1 font-semibold">
              {music.title}
            </span>
            <span className="line-clamp-1 px-1">{music.artists}</span>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}

export default NewMusicList
