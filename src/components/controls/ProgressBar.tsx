import React, {
  useImperativeHandle,
  useRef,
  MouseEvent,
  Ref,
  forwardRef
} from 'react'

interface RefObject {
  handleUpdateProgressBar: (percent: number) => void
}

interface ProgressBarProps {
  handleChangeAudioProgress: (offsetX: number, clientWidth: number) => void
}

const ProgressBar = (
  { handleChangeAudioProgress }: ProgressBarProps,
  ref: Ref<RefObject>
) => {
  const progressBarRef = useRef<HTMLDivElement>(null)
  const progressAreaRef = useRef<HTMLDivElement>(null)

  useImperativeHandle(ref, () => ({ handleUpdateProgressBar }))
  const handleUpdateProgressBar = (percent: number) => {
    if (progressBarRef.current) {
      progressBarRef.current.style.width = percent + '%'
    }
  }

  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    if (progressAreaRef.current) {
      handleChangeAudioProgress(
        e.nativeEvent.offsetX,
        progressAreaRef.current.clientWidth
      )
    }
  }
  return (
    <div
      ref={progressAreaRef}
      onClick={handleClick}
      className="progress-area absolute -top-1 left-0 z-30 h-2 w-full flex-1 cursor-pointer rounded-lg bg-text-2 lg:-top-2"
    >
      <div
        ref={progressBarRef}
        className="progress-bar h-full w-0 rounded-lg bg-gradient-to-r from-[rgb(255,85,62)] to-[rgb(255,0,101)]"
      ></div>
    </div>
  )
}

export default forwardRef(ProgressBar)
