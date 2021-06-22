import React from "react";
import styled from "styled-components";
import { Navbar } from "react-bootstrap";

import KitNav from "./KitNav";

const StyledBootstrapNavbar = styled(Navbar)`
    background-color: ${props => props.theme.background};
`;

const StyledBootstrapNavbarBrand = styled(Navbar.Brand)``;
const StyledBootstrapNavbarToggle = styled(Navbar.Toggle)``;
const StyledBootstrapNavbarCollapse = styled(Navbar.Collapse)``;

export default function KitNavbar(props) {
	return (
		<StyledBootstrapNavbar fixed="top" {...props}>
		    <StyledBootstrapNavbarBrand>Theme Switcher</StyledBootstrapNavbarBrand>
		    <StyledBootstrapNavbarToggle aria-controls="basic-navbar-nav" />
		    <StyledBootstrapNavbarCollapse><KitNav /> </StyledBootstrapNavbarCollapse>
		    
		</StyledBootstrapNavbar>
	);
} 
