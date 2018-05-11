import React from "react";
import Delete from "./Delete";

const Listitem = ({ item, strike, del }) => {
	return <li onClick={strike}>{item} <Delete del={del}/></li>
}

export default Listitem;