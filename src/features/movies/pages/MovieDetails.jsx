import React from "react";
import { useParams } from "react-router-dom";
import useMovieDetails from "../hooks/useMovieDetails";
import MovieInfo from "../components/MovieInfo";
import MovieCast from "../components/MovieCast"
import SimilarMovies from "../components/SimilarMovies";

const MovieDetails = () => {
  const { id } = useParams();
  const { details, credits, similar } = useMovieDetails(id);
  if (details.loading) return <p>Loading...</p>;
  if (details.error) return <p>Error loading movie</p>;
  return (
    <div>
      <MovieInfo movie={details.data} />
      {credits.data && <MovieCast cast={credits.data.cast} />}
      {similar.data && <SimilarMovies movies={similar.data.results} />}
    </div>
  );
};

export default MovieDetails;
