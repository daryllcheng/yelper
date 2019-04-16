import PropTypes from "prop-types";
import React from "react";
import Resturant from "./Restaurant";
import SwipeableViews from "react-swipeable-views";

const Restaurants = ({ restaurants }) => {
  return (
    <SwipeableViews enableMouseEvents>
      {restaurants.search.business.map((restaurant, index) => (
        <Resturant key={index} restaurant={restaurant} />
      ))}
    </SwipeableViews>
  );
};

Restaurants.propTypes = {
  restaurants: PropTypes.object.isRequired
};

export default Restaurants;
