import React from "react";
import useFetch from "../../../hooks/useFetch";
import {
  fetchMovieCredits,
  fetchMovieDetails,
  fetchSimilarMovies,
} from "../services/movieService";

const useMovieDetails = (movieId) => {
  const details = useFetch(() => fetchMovieDetails(movieId), [movieId]);
  const credits = useFetch(() => fetchMovieCredits(movieId), [movieId]);
  const similar = useFetch(() => fetchSimilarMovies(movieId), [movieId]);
  return {details,credits,similar};
};

export default useMovieDetails;
