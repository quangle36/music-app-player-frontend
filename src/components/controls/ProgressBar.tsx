import {
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack
} from '@chakra-ui/react'
import React, {
  useImperativeHandle,
  useRef,
  Ref,
  forwardRef,
  useState
} from 'react'

interface RefObject {
  handleUpdateProgressBar: (percent: number) => void
}

interface ProgressBarProps {
  handleChangeAudioProgress: (currentValue: number) => void
}

const ProgressBar = (
  { handleChangeAudioProgress }: ProgressBarProps,
  ref: Ref<RefObject>
) => {
  const progressBarRef = useRef<HTMLDivElement>(null)
  // const progressAreaRef = useRef<HTMLDivElement>(null)
  const [currentValue, setCurrentValue] = useState(0)
  useImperativeHandle(ref, () => ({ handleUpdateProgressBar }))
  const handleUpdateProgressBar = (percent: number) => {
    setCurrentValue(percent)
  }

  const handleOnChangeSongProgress = (e: number) => {
    setCurrentValue(e)
    handleChangeAudioProgress(e)
  }
  return (
    <Slider
      onChange={handleOnChangeSongProgress}
      aria-label="slider-ex-2"
      colorScheme="pink"
      value={currentValue}
      defaultValue={0}
      ref={progressBarRef}
      width={'40%'}
    >
      <SliderTrack>
        <SliderFilledTrack />
      </SliderTrack>
      <SliderThumb />
    </Slider>
  )
}

export default forwardRef(ProgressBar)
