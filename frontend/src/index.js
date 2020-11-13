import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./styles/style.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";
ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();
