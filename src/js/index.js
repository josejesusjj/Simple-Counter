//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";
import Home from "./component/home.jsx";

//import your own components

ReactDOM.render(
	<Home four={4} three={3} two={2} one={1} />,
	document.querySelector("#app")
);
