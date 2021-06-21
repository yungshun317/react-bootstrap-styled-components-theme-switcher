import React from "react";
import styled from "styled-components";
import { Navbar } from "react-bootstrap";

const StyledBootstrapNavbar = styled(Navbar)`
    background-color: ${props => props.theme.background};
`;

export default function KitNavbar(props) {
	return (
		<StyledBootstrapNavbar fixed="top" {...props} />
	);
} 
