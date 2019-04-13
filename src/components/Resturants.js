import React from "react";
import gql from "graphql-tag";
import { useQuery } from "react-apollo-hooks";

const RESTURANTS_QUERY = gql`
  query resturantsQuery($city: String, $term: String) {
    search(term: $term, location: $city, categories: "Restaurants", limit: 10) {
      total
      business {
        name
        alias
        photos
        location {
          city
        }
        reviews {
          text
          rating
          time_created
          url
        }
      }
    }
  }
`;

const Resturants = ({ queries }) => {
  const { city, term } = queries;
  const { data, loading } = useQuery(RESTURANTS_QUERY, {
    variables: { city, term }
  });

  if (loading) {
    return <span>Loading...</span>;
  }

  return (
    <div>
      {data.search.business.map(business => (
        <div key={business.name}>
          <span>{`${business.name}: ${business.location.city}`}</span>
        </div>
      ))}
    </div>
  );
};

export default Resturants;
