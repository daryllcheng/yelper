import React from "react";
import Resturant from "./Resturant";
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

  console.log(JSON.stringify(data));

  if (loading) {
    return <span>Loading...</span>;
  }

  return (
    <div>
      <SwipeableViews
        enableMouseEvents
        resistance
        springConfig={{ tension: 1000, friction: 100 }}
      >
        {data.search.business.map(business => (
          <Resturant key={business.name} business={business} />
        ))}
      </SwipeableViews>
    </div>
  );
};

export default Resturants;
