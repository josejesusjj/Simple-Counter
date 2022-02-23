import React from "react";
import PropTypes from "prop-types";

const Counter = (props) => {
	return (
		<div className="bigCounter">
			<div className="calendar">
				<i className="far fa-clock"></i>
			</div>
			<div className="four">{props.miles}</div>
			<div className="three">{props.hundreds}</div>
			<div className="two">{props.tens}</div>
			<div className="one">{props.units}</div>
		</div>
	);
};

Counter.propTypes = {
	units: PropTypes.number,
	tens: PropTypes.number,
	hundreds: PropTypes.number,
	miles: PropTypes.number,
};

let counter = 0;
setInterval(function () {
	const miles = Math.floor(counter / 1000);
	const hundreds = Math.floor(counter / 100);
	const tens = Math.floor(counter / 10);
	const units = Math.floor(counter);
	counter++;
	console.log(miles, hundreds, tens, units);
	return counter;
}, 1000);

export default Counter;
