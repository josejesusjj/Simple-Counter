import React from "react";
import PropTypes from "prop-types";

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
			<div className="calendar">
				<i className="far fa-clock"></i>
			</div>
			<div>{props.miles}</div>
			<div>{props.hundreds}</div>
			<div>{props.tens}</div>
			<div>{props.units}</div>
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
