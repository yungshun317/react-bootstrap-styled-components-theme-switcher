import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";

import themes from "../theme/";
import { KitGlobal } from "../kit/KitGlobal";
import Navigation from "./Navigation";

export default function App(props) {
	// Set default themeIndex = 0
	const [themeIndex, setThemeIndex] = useState(0);
	// Set default theme = themes.red from the `themes` dataset
	const [theme, setTheme] = useState(themes.red);
	// Get values from the `themes` prop 
	const colorTheme = props.themes[themeIndex];

    // Set theme according to the values from the `themes` prop
    useEffect(() => {
    	setTheme(themes[colorTheme.theme]);
    }, [colorTheme]);

	return (
		<ThemeProvider theme={theme}>
		    <KitGlobal />
		    <Navigation
		        {...props}
		        themeIndex={themeIndex}
		        setThemeIndex={setThemeIndex}
		    />
		</ThemeProvider>
	);
}