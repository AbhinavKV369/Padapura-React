import MovieCard from "./MovieCard";

const MovieGrid = ({ movies }) => {
  return (
    <section className="px-6 md:px-12 py-16">
      <div
        className="
          grid gap-8
          grid-cols-2
          sm:grid-cols-3
          md:grid-cols-4
          lg:grid-cols-5
        ">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  );
};

export default MovieGrid;
