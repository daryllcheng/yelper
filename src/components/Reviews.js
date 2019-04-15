import React, { useState } from "react";

import Review from "./Review";
import StackGrid from "react-stack-grid";

const Reviews = ({ reviews, business }) => {
  // const [fullReviews, setFullReviews] = useState([]);
  // const { data, loading } = useQuery(REVIEWS_QUERY, {
  //   variables: { business }
  // });

  // console.log(JSON.stringify(data));

  return (
    <StackGrid columnWidth={300}>
      {reviews.map(review => (
        <Review review={review} key={review.text} />
      ))}
    </StackGrid>
  );
};

export default Reviews;
