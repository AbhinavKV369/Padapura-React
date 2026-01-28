import { getImageUrl } from "../../../utils/imageURL";

const MovieInfo = ({ movie }) => {
  return (
    <section className="relative mt-20">
      <div
        className="
          grid grid-cols-1 lg:grid-cols-[320px_1fr]
          gap-14 items-center
        ">
        {/* 🎞 Poster */}
        <div className="relative">
          <img
            src={getImageUrl(movie.poster_path)}
            alt={movie.title}
            className="
              w-full rounded-2xl
              shadow-lg shadow-black/40
            "
          />

          {/* Rating */}
          <div
            className="
              absolute top-3 left-3
              rounded-lg px-3 py-1
              bg-black/70
              text-sm font-medium text-yellow-400
            ">
            ⭐ {movie.vote_average}
          </div>
        </div>

        {/* 📝 Info */}
        <div className="space-y-7">
          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            {movie.title}
          </h1>

          {/* Meta */}
          <div className="flex flex-wrap gap-4 text-sm opacity-70">
            <span>{movie.release_date}</span>
            <span>•</span>
            <span>{movie.runtime || "—"} min</span>
          </div>

          {/* Overview */}
          <p className="max-w-3xl leading-relaxed opacity-90">
            {movie.overview}
          </p>

          {/* 🎬 Actions */}
          <div className="flex items-center gap-6 pt-4">
            {/* Watch Trailer – Minimal Premium */}
            <button
              className="
                group inline-flex items-center gap-3
                px-6 py-3 rounded-xl
                text-sm font-medium
                bg-white text-black
                transition-all duration-300
                hover:scale-[1.03]
                active:scale-[0.97]
              ">
              <span
                className="
                  flex h-8 w-8 items-center justify-center
                  rounded-full bg-black/10
                  transition-transform
                  group-hover:scale-110
                ">
                ▶
              </span>
              Watch Trailer
            </button>

            {/* Watchlist */}
            <button
              className="
                text-sm font-medium
                opacity-70
                hover:opacity-100
                transition
              ">
              + Watchlist
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MovieInfo;
