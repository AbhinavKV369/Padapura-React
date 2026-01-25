import { useFavourites } from "../context/favouriteContext/useFavourite";
import MovieGrid from "../features/movies/components/MovieGrid";

const Favorites = () => {
  const { favorites, clearFavorites } = useFavourites();

  if (!favorites.length) {
    return <p>No favorite movies yet ❤️</p>;
  }

  return (
    <div>
      <h2>Your Favorites</h2>
      <button onClick={clearFavorites}>Clear All</button>
      <MovieGrid movies={favorites} />
    </div>
  );
};

export default Favorites;
