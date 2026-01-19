import React, { useState } from "react";
import useDebounce from "../../../hooks/useDebounce";
import useFetch from "../../../hooks/useFetch";
import searchMovies from "../services/searchService";

const useSearch = () => {
  const [query, setQuery] = useState("");
  const debounceQuery = useDebounce(query, 500);

  const { data, loading, error } = useFetch(
    () => searchMovies(debounceQuery),
    [debounceQuery],
  );

  return {
    query,
    setQuery,
    results: data?.results || [],
    loading,
    error,
  };
};

export default useSearch;
