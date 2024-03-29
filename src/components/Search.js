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
  font-family: "Just Another Hand", cursive;
  font-size: 32px;
`;

const StyledInput = styled(Input)`
  width: 40%;
`;

const styles = theme => ({
  inputCenter: {
    textAlign: "center",
    fontFamily: "'Just Another Hand', cursive",
    fontSize: "32px"
  }
});

const Search = ({ classes, queries, setQueries, setCoordinates }) => {
  const [city, setCity] = useState(queries.city);
  const [term, setTerm] = useState(queries.term);

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
        <StyledInput
          value={term}
          onChange={e => setTerm(e.target.value)}
          classes={{
            input: classes.inputCenter
          }}
        />
        <StyledSpan>in</StyledSpan>
        <StyledInput
          value={city}
          onChange={e => setCity(e.target.value)}
          classes={{
            input: classes.inputCenter
          }}
        />
      </span>
      <Button type="submit" />
    </StyledHeader>
  );
};

Search.propTypes = {
  classes: PropTypes.object.isRequired,
  queries: PropTypes.object.isRequired,
  setQueries: PropTypes.func.isRequired,
  setCoordinates: PropTypes.func.isRequired
};

export default withStyles(styles)(Search);
