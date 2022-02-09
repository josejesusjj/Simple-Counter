import React from "react";
import PropTypes from 'prop-types';

//create your first component
const Home = (props) => {
	return (
		<div className="bigCounter">
			<div className="calendar">
				<i className="far fa-clock"></i>
			</div>
			<div className="four">4</div>
			<div className="three">3</div>
			<div className="two">0</div>
			<div className="one">{props.one}</div>
		</div>
	);
};

Home.propTypes = {
	one: PropTypes.number
  };
export default Home;
