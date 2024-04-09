export const ACCESS_TOKEN = 'access_token'
export const BASE_URL = 'http://localhost:8000/api'
export const SWIPER_NEW_MUSIC_BREAK_POINTS = {
  1: {
    slidesPerView: 1,
    spaceBetween: 10
  },
  320: {
    slidesPerView: 1,
    spaceBetween: 10
  },
  480: {
    slidesPerView: 2
  },
  768: {
    slidesPerView: 4,
    spaceBetween: 10
  },
  1280: {
    slidesPerView: 5,
    spaceBetween: 10
  },
  1900: {
    slidesPerView: 7,
    spaceBetween: 10
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
