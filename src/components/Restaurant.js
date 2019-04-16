import Button from "@material-ui/core/Button";
import { Parallax } from "react-parallax";
import React from "react";
import Reviews from "./Reviews";

const insideStyles = {
  padding: 20,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
  color: "white",
  fontFamily: "'Just Another Hand', cursive",
  fontSize: "32px"
};

const Restaurant = ({ business }) => {
  return (
    <div>
      <Parallax
        bgImage={business.photos[0]}
        bgImageAlt={business.name}
        bgImageStyle={{ opacity: 0.8 }}
        strength={-200}
        blur={{ min: -15, max: 5 }}
        renderLayer={percentage => (
          <div>
            <div
              style={{
                position: "absolute",
                background: `rgba(255, 125, 0, ${percentage * 1.5})`,
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
          <a href={business.url} target="_blank">
            <Button style={insideStyles}>{business.name}</Button>
          </a>
        </div>
      </Parallax>
      <Reviews reviews={business.reviews} />
    </div>
  );
};

export default Restaurant;
