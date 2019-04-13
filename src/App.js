import { ApolloProvider } from "react-apollo";
import { ApolloProvider as ApolloProviderHooks } from "react-apollo-hooks";
import React from "react";
import Resturants from "./components/Resturants";
import client from "./ApolloClient";

const App = () => (
  <ApolloProvider client={client}>
    <ApolloProviderHooks client={client}>
      <div>
        <Resturants />
      </div>
    </ApolloProviderHooks>
  </ApolloProvider>
);

export default App;
