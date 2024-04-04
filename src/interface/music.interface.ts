import { Genre } from './genre.interface'

export interface Music {
  _id: string
  title: string
  artists: string
  slug: string
  image: string
  src: string
  views: number
  likes: number
  genre: Genre | string
}
