import gql from "graphql-tag";

export const query = gql`
  query {
    search(
      term: "burrito"
      location: "san francisco"
      categories: "Restaurants"
      limit: 10
    ) {
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
