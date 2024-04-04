import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper'
import SwiperActionInput from 'components/Swiper/SwiperActionInput'
import { IoIosPause, IoIosPlay } from 'react-icons/io'
import { Music } from 'interface/music.interface'
import NewMusicSkeletonList from './NewMusicListSkeleton'

interface NewMusicListProps {
  musics: Music[]
}

const NewMusicList = () => {
  return (
    <div className=" w-full">
      <div className="relative mt-2 w-full max-w-[calc(100vw_-_40px)] overflow-hidden text-text-2 lg:max-w-[calc(100vw_-_290px)]">
        {/* {newMusics.length ? (
        <NewMusicList musics={newMusics} />
      ) : ( */}
        <NewMusicSkeletonList />
        {/* )} */}
      </div>
    </div>
  )
}
