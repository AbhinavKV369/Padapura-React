import { Link } from "react-router-dom";
import { getImageUrl } from "../../../utils/imageURL";
import { useFavourites } from "../../../context/favouriteContext/useFavourite";

const MovieCard = ({ movie }) => {
  const { favourites, handleAddFavourite, handleRemoveFavourite } =
    useFavourites();

  const isFavourite =
    Array.isArray(favourites) && favourites.some((m) => m.id === movie.id);

  const handleFavorite = (e) => {
    e.preventDefault();
    isFavourite ? handleRemoveFavourite(movie) : handleAddFavourite(movie);
  };

  return (
    <Link
      to={`/movie/${movie.id}`}
      className="
        group relative block overflow-hidden
        rounded-xl bg-black
        shadow-lg shadow-black/40
        transition-transform duration-500
        hover:-translate-y-1
      ">
      {/* Poster */}
      <img
        src={getImageUrl(movie.poster_path)}
        alt={movie.title}
        className="
          aspect-[2/3] w-full object-cover
          transition-transform duration-700 ease-out
          group-hover:scale-105
        "
      />

      {/* Gradient overlay */}
      <div
        className="
          absolute inset-0
          bg-gradient-to-t from-black/90 via-black/40 to-transparent
          opacity-0 group-hover:opacity-100
          transition-opacity duration-500
        "
      />

      {/* Favourite */}
      <button
        onClick={handleFavorite}
        className="
          absolute top-3 right-3 z-10
          flex h-9 w-9 items-center justify-center
          rounded-full bg-black/40 backdrop-blur
          text-white
          transition-transform duration-300
          hover:scale-110
        ">
        {isFavourite ? "❤️" : "🤍"}
      </button>

      {/* Content */}
      <div
        className="
          pointer-events-none
          absolute bottom-0 w-full p-4
          translate-y-6 opacity-0
          transition-all duration-500
          group-hover:translate-y-0 group-hover:opacity-100
        ">
        <h3 className="text-sm text-white font-semibold leading-snug">{movie.title}</h3>

        <p className="mt-1 text-xs text-white/70">⭐ {movie.vote_average}</p>
      </div>
    </Link>
  );
};

export default MovieCard;
