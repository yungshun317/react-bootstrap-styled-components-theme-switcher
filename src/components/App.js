import React, { useState } from "react";
import { ThemeProvider } from "styled-components";

import themes from "../theme/";

export default function App(props) {
	const [theme, setTheme] = useState(themes.red);

	return (
		<ThemeProvider theme={theme}>
		</ThemeProvider>
	);
}