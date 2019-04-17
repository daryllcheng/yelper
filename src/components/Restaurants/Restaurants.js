import React, { useEffect, useState } from "react";

import IosArrowDropleft from "react-ionicons/lib/IosArrowDropleft";
import IosArrowDropright from "react-ionicons/lib/IosArrowDropright";
import PropTypes from "prop-types";
import Resturant from "./Restaurant";
import SwipeableViews from "react-swipeable-views";
import styled from "styled-components";

const StyledLeftSVG = styled(IosArrowDropleft)`
  position: fixed;
  z-index: 100;
  top: 40%;
  cursor: pointer;
`;

const StyledRightSVG = styled(IosArrowDropright)`
  position: fixed;
  z-index: 100;
  top: 40%;
  right: 0;
  cursor: pointer;
`;

const Restaurants = ({ restaurants }) => {
  const [index, setIndex] = useState(0);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  const handlePageChange = newIndex => {
    if (newIndex >= 0 && newIndex <= 9) {
      setIndex(newIndex);
    }
  };

  return (
    <div>
      {width > 500 && (
        <div>
          <StyledLeftSVG
            onClick={() => handlePageChange(index - 1)}
            fontSize="50px"
            color="rgba(255, 125, 0, 1.5)"
          />
          <StyledRightSVG
            onClick={() => handlePageChange(index + 1)}
            fontSize="50px"
            color="rgba(255, 125, 0, 1.5)"
          />
        </div>
      )}
      <SwipeableViews
        index={index}
        onChangeIndex={i => setIndex(i)}
        enableMouseEvents
      >
        {restaurants.search.business.map(restaurant => (
          <Resturant key={restaurant.alias} restaurant={restaurant} />
        ))}
      </SwipeableViews>
    </div>
  );
};

Restaurants.propTypes = {
  restaurants: PropTypes.object.isRequired
};

export default Restaurants;
