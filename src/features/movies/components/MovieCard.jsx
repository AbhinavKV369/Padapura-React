import React from 'react'
import { Link } from "react-router-dom"
import {getImageUrl} from "../../../utils/imageURL"
 
const MovieCard = ({movie}) => {
  return (
    <Link to={`/movie/${movie.id}`} className="movie-card">
      <img src={getImageUrl(movie.backdrop_path)} alt={movie.title} />
      <h3>{movie.title}</h3>
      <p>⭐{movie.vote_average}</p>
    </Link>
  );
}

export default MovieCard