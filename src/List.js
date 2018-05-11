import React from "react";
import Listitem from "./Listitem";

const List = ({ list, strike, del }) => {
	return (
		<div className="theList">
			<ul>
				{
					list.map(item => {
						return 	<Listitem item={item} strike={strike} del={del}/>
					})
				}
			</ul>
		</div>
	)
}

export default List;