import React from "react";
import MovieGrid from "../components/MovieGrid";

const SimilarMovies = ({ movies }) => {
  return (
    <section>
      <h3>Similar Movies</h3>
      <MovieGrid movies={movies} />
    </section>
  );
};

export default SimilarMovies;
