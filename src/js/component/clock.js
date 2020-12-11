import React from "react";

export function Clock(props) {
	return (
		<div
			className="card text-white bg-dark mb-3"
			style={{ maxWidth: "15rem", marginRight: "1%" }}>
			{props.title1}
		</div>
	);
}
CounterMaker.propTypes = {
	title1: propTypes.string
};
