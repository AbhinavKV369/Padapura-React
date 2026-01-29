import React from "react";
import useMovies from "../hooks/useMovies";
import MovieGrid from "../components/MovieGrid";

const Movies = () => {
  const { movies, loading, error, loadMore } = useMovies();

  if (error) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <p className="text-sm text-red-400">Failed to load movies</p>
      </div>
    );
  }

  return (
    <main className="mx-auto max-w-7xl px-4 pb-24">
      {/* Header */}
      <header className="mb-10 flex items-center justify-between">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
          Popular Movies
        </h1>

        <span className="text-sm opacity-70">{movies.length} titles</span>
      </header>

      {/* Grid */}
      <MovieGrid movies={movies} />

      {/* Loading */}
      {loading && (
        <div className="mt-12 flex justify-center">
          <span className="text-sm opacity-70">Loading more…</span>
        </div>
      )}

      {/* Load More */}
      {!loading && (
        <div className="mt-16 flex justify-center">
          <button
            onClick={loadMore}
            className="
              px-10 py-4 rounded-full font-medium
              border border-white/20
              backdrop-blur
              transition-all duration-300
              hover:bg-white/10 hover:scale-105
              active:scale-95
            ">
            Load more
          </button>
        </div>
      )}
    </main>
  );
};

export default Movies;
