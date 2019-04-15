import { Parallax } from "react-parallax";
import React from "react";
import ResturantMap from "./Map";
import Reviews from "./Reviews";

const insideStyles = {
  padding: 20,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)"
};

const Resturant = ({ business }) => {
  return (
    <div>
      <Parallax
        bgImage={business.photos[0]}
        strength={200}
        renderLayer={percentage => (
          <div>
            <div
              style={{
                position: "absolute",
                background: `rgba(255, 125, 0, ${percentage * 1})`,
                left: "50%",
                top: "50%",
                borderRadius: "50%",
                transform: "translate(-50%,-50%)",
                width: percentage * 500,
                height: percentage * 500
              }}
            />
          </div>
        )}
      >
        <div style={{ height: 500 }}>
          <div style={insideStyles}>{`${business.name}: ${
            business.location.city
          }`}</div>
        </div>
      </Parallax>
      <Reviews reviews={business.reviews} />
      <ResturantMap />
    </div>
  );
};

export default Resturant;
