import React from "react";
import { useFavourites } from "../context/favouriteContext/useFavourite";

  const sample = { id: 1, title: "Sample Movie" };

const Home = () => {
  const { favourites,handleAddFavourite, handleRemoveFavourite,handleClearAllFavourites } = useFavourites();
  return (
    <>
      <div>Home Page</div>
      <button onClick={() => handleAddFavourite(sample)}>
        Add to favourites
      </button>
      <button onClick={() => handleRemoveFavourite(sample)}>
        Remove from favourites
      </button>
      <button onClick={() => handleClearAllFavourites()}>
        Clear favourites
      </button>
      <h3>Favourites:</h3>
      {favourites.map((movie)=>(
        <h1 key={movie.id}>{movie.id}</h1>
      ))}
    </>
  );
};

export default Home;
