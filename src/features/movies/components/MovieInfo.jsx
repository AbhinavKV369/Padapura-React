import React from 'react'
import { getImageUrl } from "../../../utils/imageURL"

const MovieInfo = ({movie}) => {
  return (
    <section className="movie-info">
      <img src={getImageUrl()} alt={movie.title} />
      <div>
        <h2>{movie.title}</h2>
        <p>{movie.overview}</p>
        <p>⭐ {movie.vote_average}</p>
        <p>Release: {movie.release_date}</p>
      </div>
    </section>
  );
}

export default MovieInfo