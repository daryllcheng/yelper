import React from "react";
import Resturant from "./Resturant";
import Spinner from "./Spinner";
import SwipeableViews from "react-swipeable-views";
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
        url
        location {
          city
        }
        reviews {
          text
          rating
          time_created
          url
          user {
            name
            image_url
          }
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
    return <Spinner />;
  }

  return (
    <div>
      <SwipeableViews enableMouseEvents>
        {data.search.business.map(business => (
          <Resturant key={business.name} business={business} />
        ))}
      </SwipeableViews>
    </div>
  );
};

export default Resturants;
