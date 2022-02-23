import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";
import Home from "./component/home.jsx";

ReactDOM.render(<Home />, document.querySelector("#app"));
