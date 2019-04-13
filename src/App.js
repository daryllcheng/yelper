import React, { Suspense, useState } from "react";

import { ApolloProvider } from "react-apollo";
import { ApolloProvider as ApolloProviderHooks } from "react-apollo-hooks";
import Search from "./components/Search";
import client from "./ApolloClient";

const Resturants = React.lazy(() => import("./components/Resturants"));

const App = () => {
  const [queries, setQueries] = useState({
    city: "San Francisco",
    term: "Ramen"
  });

  return (
    <ApolloProvider client={client}>
      <ApolloProviderHooks client={client}>
        <Search setQueries={setQueries} />
        <Suspense fallback={<span>Suspense loading...</span>}>
          <Resturants queries={queries} />
        </Suspense>
      </ApolloProviderHooks>
    </ApolloProvider>
  );
};

export default App;
