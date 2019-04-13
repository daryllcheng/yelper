import React, { useState } from "react";

const Search = ({ setQueries }) => {
  const [city, setCity] = useState("San Francisco");
  const [term, setTerm] = useState("Ramen");

  const handleSubmit = e => {
    e.preventDefault();
    setQueries({ city, term });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={city}
        placeholder={city}
        onChange={e => setCity(e.target.value)}
      />
      <input
        type="text"
        value={term}
        placeholder={term}
        onChange={e => setTerm(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default Search;
