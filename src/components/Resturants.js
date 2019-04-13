import React from "react";
import gql from "graphql-tag";
import { useQuery } from "react-apollo-hooks";

const query = gql`
  query {
    search(term: "burrito", location: "san francisco", limit: 5) {
      total
      business {
        name
        url
      }
    }
  }
`;

const Resturants = () => {
  const { data, error, loading } = useQuery(query, {
    suspend: false
  });

  console.log(JSON.stringify(data));

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error! {error.message}</div>;
  }

  return (
    <div>
      <ul>
        {data.search.business.map(business => (
          <li key={business.name}>{business.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Resturants;
