import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline'
import { FC } from 'react'
import { useSwiper } from 'swiper/react'

interface SwiperActionInputProps {
  type: 'prev' | 'next'
}
const SwiperActionInput: FC<SwiperActionInputProps> = ({ type }) => {
  const swiper = useSwiper()
  const handleAction = (type: 'prev' | 'next') => {
    if (type === 'next') swiper.slideNext()
    else swiper.slidePrev()
  }

  return (
    <div
      className="mr-1 flex size-10 cursor-pointer items-center justify-center rounded-full bg-primary text-white transition-all ease-in-out hover:bg-high-light"
      onClick={() => handleAction(type)}
    >
      {type === 'next' ? (
        <ChevronRightIcon className="w-6" />
      ) : (
        <ChevronLeftIcon className="w-6" />
      )}
    </div>
  )
}
export default SwiperActionInput
