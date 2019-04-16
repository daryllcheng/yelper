import * as serviceWorker from "./serviceWorker";

import App from "./App";
import { Normalize } from "styled-normalize";
import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <React.Fragment>
    <Normalize />
    <App />
  </React.Fragment>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
