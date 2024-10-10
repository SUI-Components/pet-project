import FromApiResponseToMovieEntityMapper from './FromApiResponseToMovieEntityMapper'
import {movieEntity} from '../entities/factory'

export const fromApiResponseToMovieEntityMapper = () => {
  return new FromApiResponseToMovieEntityMapper({movieEntity})
}
