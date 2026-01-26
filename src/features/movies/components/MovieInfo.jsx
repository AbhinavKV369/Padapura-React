import React from "react";
import { getImageUrl } from "../../../utils/imageURL";

const MovieInfo = ({ movie }) => {
  return (
    <section
      className="
        relative mt-10
        grid grid-cols-1 md:grid-cols-[300px_1fr]
        gap-8 items-start
        rounded-3xl
        bg-bg-secondary/60 backdrop-blur-xl
        p-6 md:p-8
        shadow-xl shadow-black/40
      ">
      {/* 🎬 Poster */}
      <div className="relative group">
        <img
          src={getImageUrl(movie.poster_path)}
          alt={movie.title}
          className="
            w-full rounded-2xl
            shadow-lg shadow-black/60
            transition-transform duration-500
            group-hover:scale-105
          "
        />

        {/* Rating Badge */}
        <div
          className="
            absolute top-3 left-3
            rounded-full px-3 py-1
            bg-black/70 backdrop-blur-md
            text-yellow-400 font-semibold text-sm
            shadow-md
          ">
          ⭐ {movie.vote_average}
        </div>
      </div>

      {/* 📝 Info */}
      <div className="space-y-5">
        <h2
          className="
            text-3xl md:text-4xl font-extrabold
            tracking-wide text-white
          ">
          {movie.title}
        </h2>

        {/* Meta */}
        <div className="flex flex-wrap gap-4 text-sm text-gray-300">
          <span>
            📅 <span className="text-white">{movie.release_date}</span>
          </span>
          <span>
            ⭐ <span className="text-white">{movie.vote_average}</span>
          </span>
          <span>
            🎬 <span className="text-white">{movie.runtime || "—"} min</span>
          </span>
        </div>

        {/* Overview */}
        <p className="text-gray-300 leading-relaxed max-w-3xl">
          {movie.overview}
        </p>

        {/* Actions */}
        <div className="flex gap-4 pt-4 flex-wrap">
          <button
            className="
              px-6 py-3 rounded-xl font-semibold
              bg-accent text-white
              shadow-lg shadow-red-500/40
              transition
              hover:scale-105 hover:shadow-red-500/60
            ">
            ▶ Watch Trailer
          </button>

          <button
            className="
              px-6 py-3 rounded-xl
              border border-white/20
              text-white
              hover:bg-white/10
              transition
            ">
            + Add to Watchlist
          </button>
        </div>
      </div>

      {/* 🔥 Ambient Glow */}
      <div
        className="
          pointer-events-none absolute -inset-1
          rounded-3xl
          bg-gradient-to-br from-red-500/10 via-transparent to-transparent
          opacity-60
        "
      />
    </section>
  );
};

export default MovieInfo;
