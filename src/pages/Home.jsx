import { Link } from "react-router-dom";
import { useFavourites } from "../context/favouriteContext/useFavourite";
import MovieGrid from "../features/movies/components/MovieGrid";

const Home = () => {
  const { favourites } = useFavourites();

  return (
    <main className="space-y-24">
      {/* 🎬 Hero Section */}
      <section
        className="relative flex min-h-[75vh] items-center justify-center text-center text-white"
        style={{
          backgroundImage:
            "url('https://image.tmdb.org/t/p/original/9dKCd55IuTT5QRs989m9Qlb7d2B.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}>
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/70" />

        {/* Bottom fade */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent" />

        {/* Content */}
        <div className="relative z-10 max-w-3xl px-6">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            Watch Trailers.
            <span className="block text-accent">Discover Movies.</span>
          </h1>

          <p className="mt-6 text-base md:text-lg text-white/80">
            Explore trending movies, watch trailers, and build your personal
            watchlist.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              to="/movies"
              className="
          px-8 py-4 rounded-full font-semibold
          bg-accent text-white
          transition
          hover:bg-[var(--accent-hover)]
          hover:scale-105
        ">
              Browse Movies
            </Link>

            <Link
              to="/favorites"
              className="
          px-8 py-4 rounded-full
          border border-white/30 text-white
          hover:bg-white/10
          transition
        ">
              Your Watchlist
            </Link>
          </div>
        </div>
      </section>

      {/* ❤️ Favourites Preview */}
      {favourites.length > 0 && (
        <section className="px-6">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-[var(--text)]">
              Your Favourites
            </h2>
            <Link
              to="/favorites"
              className="text-sm text-[var(--accent)] hover:underline">
              View all →
            </Link>
          </div>

          <MovieGrid movies={favourites.slice(0, 6)} />
        </section>
      )}
    </main>
  );
};

export default Home;
