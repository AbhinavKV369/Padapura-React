import { getImageUrl } from "../../../utils/imageURL";

const MovieCast = ({ cast }) => {
  if (!cast?.length) return null;

  return (
    <section className="mt-20">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <h3 className="text-2xl md:text-3xl font-bold tracking-wide">Cast</h3>
        <span className="text-xs uppercase tracking-widest text-[var(--text-muted)]">
          Scroll
        </span>
      </div>

      {/* Horizontal Scroll */}
      <div
        className="
          flex gap-6 overflow-x-auto pb-4
          scroll-smooth
          snap-x snap-mandatory
          [-ms-overflow-style:none]
          [scrollbar-width:none]
        ">
        {cast.slice(0, 12).map((actor) => (
          <div key={actor.id} className="snap-start shrink-0 w-[150px] group">
            <div
              className="
                relative rounded-2xl
                bg-[var(--bg-secondary)]
                p-3
                transition-all duration-500
                hover:-translate-y-2
                hover:shadow-xl hover:shadow-black/40
              ">
              {/* Avatar */}
              <div className="relative aspect-square rounded-xl overflow-hidden">
                <img
                  src={getImageUrl(actor.profile_path)}
                  alt={actor.name}
                  className="
                    h-full w-full object-cover
                    transition-transform duration-700
                    group-hover:scale-105
                  "
                />
              </div>

              {/* Name */}
              <p className="mt-3 text-center text-sm font-medium leading-tight">
                {actor.name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MovieCast;
