import React, { useState } from "react";

import APIError from "./components/APIError";
import { RESTAURANTS_QUERY } from "./queries/queries";
import Restaurants from "./components/Restaurants/Restaurants";
import ResturantMap from "./components/Map";
import Search from "./components/Search";
import Spinner from "./components/Spinner";
import { useQuery } from "react-apollo-hooks";

const App = () => {
  const [queries, setQueries] = useState({
    city: "San Francisco",
    term: "Ramen"
  });

  const [coordinates, setCoordinates] = useState([-122.4376, 37.7577]);

  const { data, loading } = useQuery(RESTAURANTS_QUERY, {
    variables: { city: queries.city, term: queries.term }
  });

  console.log(`data: ${JSON.stringify(data)}`);

  if (loading) {
    return <Spinner />;
  }

  return (
    <div>
      <Search
        queries={queries}
        setQueries={setQueries}
        setCoordinates={setCoordinates}
      />
      {Object.entries(data).length === 0 && data.constructor === Object ? (
        <APIError />
      ) : (
        <div>
          <Restaurants restaurants={data} />
          <ResturantMap coordinates={coordinates} />
        </div>
      )}
    </div>
  );
};

export default App;
