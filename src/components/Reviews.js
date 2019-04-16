import React, { useState } from "react";

import Review from "./Review";
import styled from "styled-components";

const StyledGrid = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  margin: 50px;
`;

const Reviews = ({ reviews, business }) => {
  return (
    <StyledGrid>
      {reviews.map(review => (
        <Review review={review} key={review.text} />
      ))}
    </StyledGrid>
  );
};

export default Reviews;
