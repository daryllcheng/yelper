import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { createHttpLink } from "apollo-link-http";
import { setContext } from "apollo-link-context";

const httpLink = createHttpLink({
  uri: "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/graphql"
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: `Bearer ${process.env.REACT_APP_YELP_API_KEY}`,
      Origin: "http://localhost:3000",
      "Accept-Language": "en-US"
    }
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

export default client;
