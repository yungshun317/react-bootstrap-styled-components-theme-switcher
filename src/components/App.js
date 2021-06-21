import React, { useState } from "react";
import { ThemeProvider } from "styled-components";

import themes from "../theme/";

export default function App(props) {
	const [colorIndex, setColorIndex] = useState(0);
	const [theme, setTheme] = useState(themes.red);
	const color = props.colors[colorIndex];

    useEffect(() => {
    	setTheme(themes[color.theme]);
    }, [color]);

	return (
		<ThemeProvider theme={theme}>
		    <KitGlobal />
		</ThemeProvider>
	);
}