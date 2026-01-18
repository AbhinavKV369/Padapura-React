import { useState } from "react";
import { fetchPopularMovies } from "../services/movieService";
import useFetch from "../../../hooks/useFetch";

const useMovies = () => {
  const [page, setPage] = useState(1);
  const { data, loading, error } = useFetch(
    () => fetchPopularMovies(page),
    [page]
  );

  const loadMore = () => {
    setPage((prev) => prev + 1);
  };
  return { movies: data?.results || [], loading, error, loadMore };
};

export default useMovies;
