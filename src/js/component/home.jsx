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
			<div className="one">{props.one}</div>
		</div>
	);
};

Home.propTypes = {
	one: PropTypes.number,
	two: PropTypes.number,
	three: PropTypes.number,
	four: PropTypes.number,
};
export default Home;
