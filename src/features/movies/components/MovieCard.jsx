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
    <Link to={`/movie/${movie.id}`} className="group perspective-1000">
      <div
        className="
          relative preserve-3d card-tilt
          overflow-hidden rounded-2xl
          bg-slate-900/70 backdrop-blur-xl
          shadow-xl shadow-black/60
        ">
        {/* 🎬 Poster */}
        <div className="relative preserve-3d">
          <img
            src={getImageUrl(movie.backdrop_path)}
            alt={movie.title}
            className="
              h-64 w-full object-cover
              transform translate-z-[40px]
              transition-transform duration-700
              group-hover:scale-110
            "
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

          {/* ❤️ Favourite */}
          <button
            onClick={handleFavorite}
            className={`
              absolute top-3 right-3 z-20
              flex h-10 w-10 items-center justify-center
              rounded-full backdrop-blur-md
              transition-all duration-300
              transform translate-z-[60px]
              ${
                isFavourite
                  ? "text-white scale-110 shadow-lg shadow-red-500/50"
                  : "bg-white/20 text-white hover:scale-110"
              }
            `}>
            <span className="text-lg">{isFavourite ? "❤️" : "🤍"}</span>
          </button>
        </div>

        {/* 📝 Content */}
        <div className="relative z-10 p-4 space-y-1 transform translate-z-[50px]">
          <h3
            className="
              line-clamp-1 text-lg font-semibold text-white
              transition-colors duration-300
              group-hover:text-red-400
            ">
            {movie.title}
          </h3>

          <p className="flex items-center gap-1 text-sm text-yellow-400">
            ⭐ <span className="text-white">{movie.vote_average}</span>
          </p>
        </div>

        {/* 🔥 Glow Layer */}
        <div
          className="
            pointer-events-none absolute inset-0 rounded-2xl
            bg-gradient-to-br from-red-500/0 via-red-500/10 to-red-500/0
            opacity-0 group-hover:opacity-100
            transition-opacity duration-500
          "
        />

        {/* Border */}
        <div
          className="
            pointer-events-none absolute inset-0 rounded-2xl border
            border-white/5 group-hover:border-red-500/40 transition-all
          "
        />
      </div>
    </Link>
  );
};

export default MovieCard;
