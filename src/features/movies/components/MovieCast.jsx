import { getImageUrl } from "../../../utils/imageURL";

const MovieCast = ({ cast }) => {
  if (!cast?.length) return null;

  return (
    <section className="mt-16 relative">
      {/* Title */}
      <div className="mb-8 flex items-center justify-between">
        <h3 className="text-3xl font-extrabold tracking-wide text-white">
          Top Cast
        </h3>
        <span className="text-sm text-gray-400">Swipe to explore →</span>
      </div>

      {/* Cast Scroll */}
      <div
        className="
          flex gap-8 overflow-x-auto pb-6
          scroll-smooth
          [-ms-overflow-style:none]
          [scrollbar-width:none]
        ">
        {cast.slice(0, 12).map((actor) => (
          <div
            key={actor.id}
            className="
              group relative min-w-[170px]
              perspective-1000
            ">
            {/* Card */}
            <div
              className="
                relative preserve-3d
                rounded-3xl
                bg-bg-secondary/60 backdrop-blur-xl
                p-4
                shadow-xl shadow-black/50
                transition-all duration-700
                group-hover:-translate-y-3
                group-hover:shadow-red-500/30
              ">
              {/* Avatar */}
              <div
                className="
                  relative mx-auto
                  h-36 w-36 rounded-full
                  overflow-hidden
                  shadow-lg shadow-black/50
                  transform translate-z-[40px]
                ">
                <img
                  src={getImageUrl(actor.profile_path)}
                  alt={actor.name}
                  className="
                    h-full w-full object-cover
                    transition-transform duration-700
                    group-hover:scale-110
                  "
                />

                {/* Inner Glow */}
                <div
                  className="
                    absolute inset-0 rounded-full
                    bg-gradient-to-tr
                    from-accent/40 via-transparent to-transparent
                    opacity-0 group-hover:opacity-100
                    transition-opacity duration-500
                  "
                />
              </div>

              {/* Name */}
              <div className="mt-4 text-center transform translate-z-[50px]">
                <p
                  className="
                    text-base font-semibold text-white
                    transition-colors duration-300
                    group-hover:text-accent
                  ">
                  {actor.name}
                </p>
              </div>

              {/* Ambient Glow */}
              <div
                className="
                  pointer-events-none absolute -inset-1 rounded-3xl
                  bg-gradient-to-br from-accent/20 via-transparent to-transparent
                  opacity-0 group-hover:opacity-100
                  transition-opacity duration-700
                "
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MovieCast;
