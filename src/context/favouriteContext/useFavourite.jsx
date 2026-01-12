import { useContext } from "react"
import { FavouriteContext } from "./FavouriteContext"

export const useFavourites = () =>{
    const context = useContext(FavouriteContext);
    if(!context){
        throw new Error("useFavorites must inside Provider");
    }
    return context;
}