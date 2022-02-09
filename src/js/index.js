//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";
import Home from "./component/home.jsx";

//import your own components

ReactDOM.render(
	<Home miles={0} hundreds={0} tens={0} units={0} />,
	document.querySelector("#app")
);
