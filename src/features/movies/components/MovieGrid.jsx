import React from "react";
import MovieCard from "./MovieCard";

const MovieGrid = ({ movies }) => {
  return (
    <section className="mt-8">
      <div
        className="
          grid
          grid-cols-2
          sm:grid-cols-3
          md:grid-cols-4
          lg:grid-cols-4
          xl:grid-cols-6
          gap-6
          animate-fadeIn
        ">
        {movies.map((movie, index) => (
          <div
            key={movie.id}
            className="transition-all duration-500"
            style={{ animationDelay: `${index * 60}ms` }}>
            <MovieCard movie={movie} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default MovieGrid;
