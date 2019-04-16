import React, { useEffect, useState } from "react";

import ReactMapGL from "react-map-gl";
import styled from "styled-components";

const StyledContainer = styled.div`
  margin: 0 auto;
`;

const ResturantMap = ({ coordinates }) => {
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
      <ReactMapGL
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        {...viewport}
        onViewportChange={newViewport => setViewport(newViewport)}
      />
    </StyledContainer>
  );
};

export default ResturantMap;
