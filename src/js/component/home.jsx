import React from "react";
import PropTypes from "prop-types";

//create your first component
const Home = (props) => {
	return (
		<div className="bigCounter">
			<div className="calendar">
				<i className="far fa-clock"></i>
			</div>
			<div className="miles">45</div>
			<div className="three">{props.hundreds}</div>
			<div className="two">{counter.tens}</div>
			<div className="units">{props.units}</div>
		</div>
	);
};

Home.propTypes = {
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
}, 1000);

export default Home;
