//import react into the bundle
import React from "react";
import PropTypes from "prop-types";

const Counter = (props) => {
	return (
		<div>
			<div className="bigCounter">
				<span className="calendar">
					<i className="far fa-clock"></i>
				</span>
				<span>{props.miles % 10}</span>
				<span>{props.hundreds % 10}</span>
				<span>{props.tens % 10}</span>
				<span>{props.units % 10}</span>
			</div>
			<div className="someText">
				<br></br>
				<br></br>
				<h3>Just a Simple Counter!</h3>
				<br></br>
				<h4>made by josejesusjj</h4>
			</div>
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
