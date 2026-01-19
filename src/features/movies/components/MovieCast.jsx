import { getImageUrl } from "../../../utils/imageURL";

const MovieCast = ({ cast }) => {
  return (
    <section>
      <h3>Cast</h3>
      <div className="cast-grid">
        {cast.slice(0, 10).map((actor) => (
          <div key={actor.id}>
            <img src={getImageUrl(actor.profile_path)} alt={actor.name} />
            <p>{actor.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MovieCast;
