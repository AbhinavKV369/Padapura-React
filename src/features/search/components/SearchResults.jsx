import React from "react";
import useSearch from "../hooks/useSearch";
import SearchInput from "./SearchInput";

const SearchResults = () => {
  const { query, setQuery, results, loading, error } = useSearch();
  return (
    <div>
      <h1>Search Movies</h1>
      <SearchInput value={query} onChange={setQuery} />
      {loading && <p>Searching...</p>}
      {error && <p>Something went wrong</p>}

      <SearchResults movies={results} />
    </div>
  );
};

export default SearchResults;
