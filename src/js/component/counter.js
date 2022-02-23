//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle

import PropTypes from "prop-types";

const Counter = (props) => {
	return (
		<div className="bigCounter">
			<span className="calendar">
				<i className="far fa-clock"></i>
			</span>
			<span>{props.miles % 10}</span>
			<span>{props.hundreds % 10}</span>
			<span>{props.tens % 10}</span>
			<span>{props.units % 10}</span>
		</div>
	);
};

Counter.propTypes = {
	units: PropTypes.number,
	tens: PropTypes.number,
	hundreds: PropTypes.number,
	miles: PropTypes.number,
};
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
		document.querySelector("#counterDiv")
	);
}, 1000);

export default Counter;
