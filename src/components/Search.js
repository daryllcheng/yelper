import React, { useState } from "react";

import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/Input";
import PropTypes from "prop-types";
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

const Search = ({ classes, setQueries }) => {
  const [city, setCity] = useState("San Francisco");
  const [term, setTerm] = useState("Ramen");

  const handleSubmit = e => {
    e.preventDefault();
    setQueries({ city, term });
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
