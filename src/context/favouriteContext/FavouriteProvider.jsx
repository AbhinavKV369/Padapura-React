import React, { useEffect, useReducer } from "react";
import { FavouriteContext } from "./FavouriteContext";

const initialState = {
  favourites: JSON.parse(localStorage.getItem("favourites")) || [],
};

const favouriteReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_FAVORITE":
      if (state.favourites.some((movie) => movie.id === action.payload.id)) {
        return state;
      }
      return { ...state, favourites: [...state.favourites, action.payload] };
      case "REMOVE_FROM_FAVOURIE":
        return  {...state,favourites:state.favourites.filter(movie => movie.id !== action.payload.id)};
      case "CLEAR_FAVOURITES":
        return {...state,favourites:[]}
  }
};

export const FavouriteProvider = ({ children }) => {
  const [state, dispatch] = useReducer(favouriteReducer, initialState);

  useEffect(() => {
    localStorage.setItem("favourites", JSON.stringify(state.favourites));
  }, [state.favourites]);

  const handleAddFavourite = (movie) => {
    dispatch({ type: "ADD_TO_FAVORITE", payload: movie });
  };
  const handleRemoveFavourite = (movie) => {
    dispatch({ type: "REMOVE_FROM_FAVOURIE", payload: movie });
  };

  const handleClearAllFavourites = () => {
    dispatch({ type: "CLEAR_FAVOURITES" });
  };

  const value = {
    favourites: state.favourites,
    handleAddFavourite,
    handleRemoveFavourite,
    handleClearAllFavourites,
  };

  return (
    <FavouriteContext.Provider value={value}>
      {children}
    </FavouriteContext.Provider>
  );
};
