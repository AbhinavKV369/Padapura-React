import React from "react";

const SearchInput = ({value,onChange}) => {
  return (
    <input
      type="text"
      placeholder="Search movies..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="search-input"
    />
  );
};

export default SearchInput;
