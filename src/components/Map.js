import "mapbox-gl/dist/mapbox-gl.css";

import React, { useEffect, useState } from "react";

import APIError from "./APIError";
import PropTypes from "prop-types";
import ReactMapGL from "react-map-gl";
import styled from "styled-components";

const StyledContainer = styled.div`
  margin: 0 auto;
`;

const RestaurantMap = ({ coordinates }) => {
  const [longitude, latitude] = coordinates;
  const [viewport, setViewport] = useState({
    width: "100%",
    height: 400,
    latitude,
    longitude,
    zoom: 9
  });

  useEffect(() => {
    setViewport({ ...viewport, latitude, longitude });
  }, [coordinates]);

  return (
    <StyledContainer>
      {(
        <ReactMapGL
          mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
          {...viewport}
          onViewportChange={newViewport => setViewport(newViewport)}
        />
      ) && (
        <APIError
          message={`Sorry! We're not able to fetch the map at the moment, please come
      back later!`}
        />
      )}
    </StyledContainer>
  );
};

RestaurantMap.propTypes = {
  coordinates: PropTypes.array.isRequired
};

export default RestaurantMap;
