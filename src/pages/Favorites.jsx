import { useFavourites } from "../context/favouriteContext/useFavourite";
import MovieGrid from "../features/movies/components/MovieGrid";

const Favorites = () => {
  const { favourites, handleClearAllFavourites } = useFavourites();

  /* Empty State */
  if (!favourites || favourites.length === 0) {
    return (
      <div className="flex min-h-[70vh] flex-col items-center justify-center text-center">
        <span className="text-6xl mb-6">🎬</span>
        <h2 className="text-2xl font-semibold mb-2">No favorites yet</h2>
        <p className="max-w-sm text-sm opacity-70">
          Start exploring movies and tap the ❤️ icon to save your favorites
          here.
        </p>
      </div>
    );
  }

  return (
    <main className="mx-auto max-w-7xl px-4 pb-24">
      {/* Header */}
      <header className="mb-10 flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            Your Favorites
          </h1>
          <p className="mt-1 text-sm opacity-70">
            {favourites.length} saved movies
          </p>
        </div>

        {/* Clear Button */}
        <button
          onClick={handleClearAllFavourites}
          className="
            px-6 py-2.5 rounded-full text-sm font-medium
            border border-red-500/40 text-red-400
            transition-all duration-300
            hover:bg-red-500/10 hover:text-red-300
            active:scale-95
          ">
          Clear all
        </button>
      </header>

      {/* Grid */}
      <MovieGrid movies={favourites} />
    </main>
  );
};

export default Favorites;
