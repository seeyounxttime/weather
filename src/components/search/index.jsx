import React from "react";

const Search = ({ search, setSearch, handleSearch }) => {
  return (
    <div className="search-engine">
      <input
        type="text"
        name="search"
        placeholder="Enter city"
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      />
      <button onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

export default Search;
