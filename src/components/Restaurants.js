import React from "react";
import Resturant from "./Restaurant";
import SwipeableViews from "react-swipeable-views";

const Restaurants = ({ restaurants }) => {
  return (
    <div>
      <SwipeableViews enableMouseEvents>
        {restaurants.search.business.map(business => (
          <Resturant key={business.name} business={business} />
        ))}
      </SwipeableViews>
    </div>
  );
};

export default Restaurants;
