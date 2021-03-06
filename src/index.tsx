import React from "react";
import ReactDOM from "react-dom";
import "./app/layout/styles.css";
import App from "./app/layout/App";
import * as serverWorker from "./serviceWorker";

ReactDOM.render(<App />, document.getElementById("root"));

serverWorker.unregister();
