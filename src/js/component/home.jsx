import React from "react";
import PropTypes from "prop-types";

//create your first component
const Home = (props) => {
	return (
		<div className="bigCounter">
			<div className="calendar">
				<i className="far fa-clock"></i>
			</div>
			<div className="four">{props.four}</div>
			<div className="three">{props.three}</div>
			<div className="two">{props.two}</div>
			<div className="uno">{props.units}</div>
		</div>
	);
};

Home.propTypes = {
	one: PropTypes.number,
	two: PropTypes.number,
	three: PropTypes.number,
	four: PropTypes.number,
};

let counter = 0;
setInterval(function () {
	const thousands = Math.floor(counter / 1000);
	const hundreds = Math.floor(counter / 100);
	const tens = Math.floor(counter / 10);
	const units = Math.floor(counter / 1);
	counter++;
	return units, tens, hundreds, thousands;
}, 1000);

export default Home;
