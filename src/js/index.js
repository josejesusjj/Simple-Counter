import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";
import Counter from "./component/counter.js";

let seconds = 0;
setInterval(function () {
	const miles = Math.floor(seconds / 1000);
	const hundreds = Math.floor(seconds / 100);
	const tens = Math.floor(seconds / 10);
	const units = Math.floor(seconds);
	seconds++;
	console.log(miles, hundreds, tens, units);
	ReactDOM.render(
		<Counter miles={miles} hundreds={hundreds} tens={tens} units={units} />,
		document.querySelector("#app")
	);
}, 1000);
