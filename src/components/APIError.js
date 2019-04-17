import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  margin: 0 auto;
  padding: 50px;
  text-align: center;
`;
const StyledImg = styled.img`
  max-width: 90%;
`;

const StyledHeader = styled.h1`
  font-family: "Just Another Hand", cursive;
  font-size: 64px;
  font-weight: 100;
`;

const APIError = () => (
  <StyledContainer>
    <StyledHeader>
      Sorry! We're not able to fetch the restaurants at the moment, please come
      back later!
    </StyledHeader>
    <StyledImg src="/assets/sadBaby.jpg" />
  </StyledContainer>
);

export default APIError;
