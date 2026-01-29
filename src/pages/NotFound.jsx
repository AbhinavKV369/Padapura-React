import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
      {/* Emoji / Visual */}
      <div className="mb-6 text-7xl">🎥</div>

      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
        Page Not Found
      </h1>

      {/* Subtitle */}
      <p className="mt-4 max-w-md text-sm md:text-base opacity-70">
        Looks like this scene was cut from the final edit. The page you’re
        looking for doesn’t exist.
      </p>

      {/* Action */}
      <Link
        to="/"
        className="
          mt-8 inline-flex items-center gap-2
          rounded-full px-8 py-3
          text-sm font-semibold
          bg-accent text-white
          transition-all duration-300
          hover:bg-[var(--accent-hover)]
          hover:scale-105
          active:scale-95
        ">
        ⬅ Back to Home
      </Link>

      {/* Subtle Footer */}
      <span className="mt-10 text-xs opacity-50">
        Error 404 • Scene missing
      </span>
    </div>
  );
};

export default NotFound;
