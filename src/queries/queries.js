import gql from "graphql-tag";

export const RESTAURANTS_QUERY = gql`
  query restaurantsQuery($city: String, $term: String) {
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
