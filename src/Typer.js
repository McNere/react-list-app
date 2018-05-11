import React from "react";

const Typer = ({ onType, text, enter }) => {
	return (
		<input onChange={onType} onKeyDown={enter} type="text" value={text}/>
	)
}

export default Typer;