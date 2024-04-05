import SwiperActionInput from 'components/Swiper/SwiperActionInput'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { SWIPER_NEW_MUSIC_BREAK_POINTS } from 'utils/constants'
// import { Autoplay } from 'swiper'
// import SwiperActionInput from '@/components/shared/SwiperActionInput'
// import { SWIPER_NEW_MUSIC_BREAK_POINTS } from '@/constants'

const NewMusicSkeletonList = () => {
  return (
    <Swiper
      className="w-full"
      wrapperClass="flex mt-16"
      spaceBetween={10}
      breakpoints={SWIPER_NEW_MUSIC_BREAK_POINTS}
      modules={[Autoplay]}
      // loop={true}
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
      {[1, 2, 3, 4, 5, 6, 7, 9, 10].map((item) => (
        <SwiperSlide key={item}>
          <div className="size-[200px] animate-pulse-opacity overflow-hidden rounded-lg bg-slate-500 object-cover ">
            <figure className="size-[200px]animate-pulse-opacity relative overflow-hidden bg-gradient-to-r from-app to-text-2"></figure>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
export default NewMusicSkeletonList
