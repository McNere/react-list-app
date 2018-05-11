import React from "react";

const Display = ({ text, reverser }) => {
	return (
		<h1 className="display">{reverser(text)}</h1>
	)
}

export default Display;