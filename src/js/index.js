//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
function SimpleCounter(props) {
	return (
		<div
			className="bigCounter d-flex d-inline justify-content-center"
			style={{ fontSize: "50px", backgroundColor: "grey" }}>
			<div className="clock" style={{ marginRight: "1%" }}>
				<i className="far fa-clock" />
			</div>
			<div className="four"> {props.dfour % 10} </div>
			<div className="three">{props.dthree % 10}</div>
			<div className="two">{props.dtwo % 10}</div>
			<div className="one">{props.done % 10}</div>
		</div>
	);
}
SimpleCounter.PropTypes = {
	dfour: PropTypes.number,
	dthree: PropTypes.number,
	dtwo: PropTypes.number,
	done: PropTypes.number
};

let counter = 0;
setInterval(function() {
	const four = Math.floor(counter / 1000);
	const three = Math.floor(counter / 100);
	const two = Math.floor(counter / 10);
	const one = Math.floor(counter / 1);
	//render your react application
	counter++;
	ReactDOM.render(
		<SimpleCounter done={one} dtwo={two} dthree={three} dfour={four} />,
		document.querySelector("#app")
	);
}, 1000);
