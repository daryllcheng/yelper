import gql from "graphql-tag";

export const RESTAURANTS_QUERY = gql`
  query restaurantsQuery($city: String, $term: String) {
    search(term: $term, location: $city, categories: "Restaurants", limit: 10) {
      business {
        name
        photos
        url
        location {
          city
        }
        reviews {
          text
          url
          user {
            name
            image_url
            profile_url
          }
        }
      }
    }
  }
`;
