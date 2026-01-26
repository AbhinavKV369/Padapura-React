import { useFavourites } from "../context/favouriteContext/useFavourite";
import MovieGrid from "../features/movies/components/MovieGrid";

const Favorites = () => {
  const { favourites, handleClearAllFavourites } = useFavourites();

  if (!favourites || favourites.length === 0) {
    return <p>No favorite movies yet ❤️</p>;
  }

  return (
    <div>
      <h2>Your Favorites</h2>
      <button onClick={handleClearAllFavourites}>Clear All</button>
      <MovieGrid movies={favourites} />
    </div>
  );
};

export default Favorites;
