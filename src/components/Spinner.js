import { PacmanLoader } from "react-spinners";
import React from "react";
import { css } from "@emotion/core";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
  padding: 20;
  position: absolute !important;
  top: 30%;
  left: 40%;
  transform: translate(-50%, -50%);
`;

const Spinner = () => {
  return (
    <div className="sweet-loading">
      <PacmanLoader
        css={override}
        sizeUnit={"px"}
        size={150}
        color={"#123abc"}
        loading={true}
      />
    </div>
  );
};

export default Spinner;
