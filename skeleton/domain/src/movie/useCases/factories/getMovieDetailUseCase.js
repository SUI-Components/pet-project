import GetMovieDetailUseCase from '../GetMovieDetailUseCase'
import {httpMovieRepository} from '../../repositories/factory'

export default ({config}) => {
  return new GetMovieDetailUseCase({
    config,
    repository: httpMovieRepository({config})
  })
}
