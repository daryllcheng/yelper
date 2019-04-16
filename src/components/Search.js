import React, { useState } from "react";

import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/Input";
import PropTypes from "prop-types";
import axios from "axios";
import styled from "styled-components";
import { withStyles } from "@material-ui/core/styles";

const StyledHeader = styled.form`
  background: white;
  position: fixed;
  top: 0;
  width: 100%;
  height: 50px;
  z-index: 10;
  box-shadow: 0 1px 2px -2px gray;
  text-align: center;
  margin: 0 auto;
`;

const StyledSpan = styled.span`
  font-family: Roboto;
`;

const styles = theme => ({
  inputCenter: {
    textAlign: "center"
  }
});

const Search = ({ classes, setQueries, setCoordinates }) => {
  const [city, setCity] = useState("San Francisco");
  const [term, setTerm] = useState("Ramen");

  const getCoordinates = async () => {
    const data = await axios.get(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURI(
        city
      )}.json?types=place&access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`
    );
    setCoordinates(data.data.features[0].geometry.coordinates);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setQueries({ city, term });
    getCoordinates();
  };

  return (
    <StyledHeader onSubmit={handleSubmit}>
      <span>
        <Input
          value={term}
          onChange={e => setTerm(e.target.value)}
          classes={{
            input: classes.inputCenter
          }}
          style={{ width: "40%" }}
          hintText={"Ramen"}
          hintStyle={{ textAlign: "center" }}
        />
        <StyledSpan>in</StyledSpan>
        <Input
          value={city}
          onChange={e => setCity(e.target.value)}
          classes={{
            input: classes.inputCenter
          }}
          style={{ width: "40%" }}
          hintText={"San Francisco"}
          hintStyle={{ textAlign: "center" }}
        />
      </span>
      <Button type="submit" />
    </StyledHeader>
  );
};

Search.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Search);
