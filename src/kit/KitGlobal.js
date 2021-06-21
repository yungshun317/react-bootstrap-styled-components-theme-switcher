import { createGlobalStyle } from "styled-components";

export const KitGlobal = createGlobalStyle`
    body {
    	@import url('https://fonts.googleapis.com/css2?family=Raleway&display=swap');
    	background-color: ${props => props.theme.foreground};
    }
`;