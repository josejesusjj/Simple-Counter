import React from "react";
import Counter from "./counter";

const Home = () => {
	return (
		<div>
			<Counter miles={0} hundreds={0} tens={0} units={0} />

			<h1 className="text-center mt-5">Just a Simple Counter!</h1>
			<h2 className="text-center mt-5">Made by josejesusjj</h2>
		</div>
	);
};

export default Home;
