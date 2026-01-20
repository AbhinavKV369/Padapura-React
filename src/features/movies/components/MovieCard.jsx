import { Link } from "react-router-dom"
import {getImageUrl} from "../../../utils/imageURL"
import {useFavourites} from "../../../context/favouriteContext"
 
const MovieCard = ({movie}) => {
  const {favourites,addFavourites,removeFavourites} = useFavourites();
  const isFavourite = favourites.some((m)=>m.id === movie.id);

  const handleFavorite = (e) =>{
    e.preventDefault();
    isFavourite ? removeFavourites(movie) : addFavourites(movie);
  }

  return (
    <Link to={`/movie/${movie.id}`} className="movie-card">
      <img src={getImageUrl(movie.backdrop_path)} alt={movie.title} />
      <h3>{movie.title}</h3>
      <p>⭐{movie.vote_average}</p>
      <button
        className={`fav-btn ${isFavourite ? "active" : ""}`}
        onClick={handleFavorite}>
        {isFavourite ? "❤️" : "🤍"}
      </button>
    </Link>
  );
}

export default MovieCard