//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";
import Home from "./component/home.jsx";

//import your own components
let counter = 0;
setInterval(function () {
	const four = Math.floor(counter / 1000);
	const three = Math.floor(counter / 100);
	const two = Math.floor(counter / 10);
	const one = Math.floor(counter / 1);
	console.log(four, three, two, one);
	counter++;
}, 1000);

ReactDOM.render(
	<Home one={one} two={two} three={three} four={four} />,
	document.querySelector("#app")
);
