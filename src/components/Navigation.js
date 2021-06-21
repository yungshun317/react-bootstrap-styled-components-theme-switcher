import React from "react";

import KitNavbar from "../kit/KitNavbar";
import KitDropdown from "../kit/KitDropdown";

export default function Navigation(props) {
    const renderColor = (color, index) => {
    	return (
    		<KitDropdownItem
    		    onSelect={() => props.setColorIndex(index)}
    		    key={index}
    		>
    		    {color.title}
    		</KitDropdownItem>
    	);
    };

	const renderColorMenu = () => {
		const { colors, colorIndex: current } = props;
		return (
			<KitDropdown
			    alignRight
			    label={colors[current].title}
			    items={props.destinations.map((color, index) => renderItem(color, index))}
			/>
		);
	};

	return (
		<KitNavbar></KitNavbar>
	);
}
