export default class GetMovieDetailUseCase {
  constructor({repository}) {
    this._repository = repository
  }

  execute({id}) {
    const movieEntity = this._repository.getMovieDetail({id})
    return movieEntity.toJSON()
  }
}
