import React from "react";
import PropTypes from "prop-types";
import reactDom from "react-dom";

const Counter = (props) => {
	let seconds = 0;
	setInterval(function () {
		const miles = Math.floor(seconds / 1000);
		const hundreds = Math.floor(seconds / 100);
		const tens = Math.floor(seconds / 10);
		const units = Math.floor(seconds);
		seconds++;
		console.log(miles, hundreds, tens, units);

		return seconds;
	}, 1000);

	return (
		<div className="bigCounter">
			<span className="calendar">
				<i className="far fa-clock"></i>
			</span>
			<span>{props.miles}</span>
			<span>{props.hundreds}</span>
			<span>{props.tens}</span>
			<span>{props.units}</span>
		</div>
	);
};

Counter.propTypes = {
	units: PropTypes.number,
	tens: PropTypes.number,
	hundreds: PropTypes.number,
	miles: PropTypes.number,
};

export default Counter;
