// localStorage
export const PLAY_LIST_HISTORY = 'PLAY_LIST_HISTORY'
export const ACCESS_TOKEN = 'access_token'

export const BASE_URL = 'http://localhost:8000/api'

export const DEFAULT_SONG_TIME = { currentTime: '00:00', allTime: '00:00' }
export const SWIPER_NEW_MUSIC_BREAK_POINTS = {
  1: {
    slidesPerView: 2,
    spaceBetween: 2
  },
  320: {
    slidesPerView: 2
  },
  480: {
    slidesPerView: 2
  },
  768: {
    slidesPerView: 4,
    spaceBetween: 10
  },
  1280: {
    slidesPerView: 5
  },
  1900: {
    slidesPerView: 8
  }
}

export const SONG_DEFAULT = {
  _id: 'default',
  title: 'default',
  artists: 'default',
  slug: 'default',
  image: '/banner.png',
  src: '/anh-la-cua-em.mp3',
  views: 0,
  likes: 0,
  genre: 'default'
}

export const DEFAULT_VOLUME = 100
