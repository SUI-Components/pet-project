import {FetcherFactory} from '@s-ui/domain'
import HTTPMovieRepository from './HTTPMovieRepository'
import {fromApiResponseToMovieEntityMapper} from '../mappers/factory'
import {movieEntity} from '../entities/factory'

export const httpMovieRepository = ({config}) => {
  return new HTTPMovieRepository({
    config,
    fetcher: FetcherFactory.httpFetcher(config),
    movieEntityMapper: fromApiResponseToMovieEntityMapper({config, movieEntity})
  })
}
