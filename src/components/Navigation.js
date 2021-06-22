import React from "react";

import KitNavbar from "../kit/KitNavbar";
//import { KitDropdown } from "../kit/KitDropdown";
//import { KitDropdownItem } from "../kit/KitDropdown";

export default function Navigation(props) {
	/*
    const renderItem = (theme, index) => {
    	return (
    		<KitDropdownItem
    		    onSelect={() => props.setThemeIndex(index)}
    		    key={index}
    		>
    		    {theme.title}
    		</KitDropdownItem>
    	);
    };

	const renderThemeMenu = () => {
		const { themes, themeIndex: current } = props;
		return (
			<KitDropdown
			    alignRight
			    label={themes[current].title}
			    items={props.themes.map((theme, index) => renderItem(theme, index))}
			/>
		);
	};
    */
	return (
		<KitNavbar {...props}>
		</KitNavbar>
	);
}
