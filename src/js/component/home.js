import React from "react";
import { Clock } from "./clock.js";

//create your first component
export function Home() {
	return (
		<span className="text-center mt-5 d-flex d-inline justify-content-center">
			<Clock />
			<Clock />
			<Clock />
			<Clock />
			<Clock />
		</span>
	);
}
