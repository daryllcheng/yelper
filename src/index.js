import * as serviceWorker from "./serviceWorker";

import { ApolloProvider } from "react-apollo";
import { ApolloProvider as ApolloProviderHooks } from "react-apollo-hooks";
import App from "./App";
import { Normalize } from "styled-normalize";
import React from "react";
import ReactDOM from "react-dom";
import client from "./ApolloClient";

ReactDOM.render(
  <React.Fragment>
    <Normalize />
    <ApolloProvider client={client}>
      <ApolloProviderHooks client={client}>
        <App />
      </ApolloProviderHooks>
    </ApolloProvider>
  </React.Fragment>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
