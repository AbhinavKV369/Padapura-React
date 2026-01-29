import MovieCard from "./MovieCard";

const MovieGrid = ({ movies }) => {
  return (
    <section className=" py-6">
      <div
        className="
          grid gap-6
          grid-cols-2
          sm:grid-cols-3
          md:grid-cols-4
          lg:grid-cols-4
        ">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  );
};

export default MovieGrid;
