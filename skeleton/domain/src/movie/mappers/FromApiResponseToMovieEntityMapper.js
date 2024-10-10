export default class FromApiResponseToMovieEntityMapper {
  constructor({movieEntity}) {
    this._movieEntity = movieEntity
  }

  map(response) {
    const {
      genres,
      homepage,
      id,
      original_language: language,
      overview: description,
      poster_path: image,
      production_companies: productionCompanies,
      release_date: releaseDate,
      runtime,
      tagline,
      title,
      vote_average: rating
    } = response

    return this._movieEntity({
      description,
      genres,
      homepage,
      id,
      image,
      language,
      productionCompanies,
      rating,
      releaseDate,
      runtime,
      tagline,
      title
    })
  }
}
