import React, { Suspense, useState } from "react";

import { ApolloProvider } from "react-apollo";
import { ApolloProvider as ApolloProviderHooks } from "react-apollo-hooks";
import ResturantMap from "./components/Map";
import Search from "./components/Search";
import client from "./ApolloClient";

const Resturants = React.lazy(() => import("./components/Resturants"));

const App = () => {
  const [queries, setQueries] = useState({
    city: "San Francisco",
    term: "Ramen"
  });

  const [coordinates, setCoordinates] = useState([-122.4376, 37.7577]);

  return (
    <ApolloProvider client={client}>
      <ApolloProviderHooks client={client}>
        <Search setQueries={setQueries} setCoordinates={setCoordinates} />
        <Suspense fallback={<span>Suspense loading...</span>}>
          <Resturants queries={queries} />
        </Suspense>
        <ResturantMap coordinates={coordinates} />
      </ApolloProviderHooks>
    </ApolloProvider>
  );
};

export default App;
