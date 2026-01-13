import { useState } from "react"
import {useFetch} from "../../../hooks/useFetch"
import { fetchPopularMovies } from "../services/movieService";

const useMovies = () =>{
    const [page,setPage] = useState(1);
    const {data,loading,error} = useFetch(()=> fetchPopularMovies(page),[page]);

    const loadMore = () =>{
        setPage((prev) => prev+1);
    }
    return {movies:data?.results || [],loading,error,loadMore,}
}

export default useMovies;