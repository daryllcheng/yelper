import PropTypes from "prop-types";
import React from "react";
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

Reviews.propTypes = {
  reviews: PropTypes.array.isRequired
};

export default Reviews;
