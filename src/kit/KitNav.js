import React from "react";
import styled from "styled-components";
import { Nav } from "react-bootstrap";

import KitNavDropdown from "./KitNavDropdown";

const StyledBootstrapNav = styled(Nav)``;
const StyledBootstrapNavLink = styled(Nav.Link)``;

export default function KitNav(props) {
	return (
		<StyledBootstrapNav>
		    <StyledBootstrapNavLink>Home</StyledBootstrapNavLink>
		    <StyledBootstrapNavLink>Link</StyledBootstrapNavLink>
		    <KitNavDropdown {...props}></KitNavDropdown>
		</StyledBootstrapNav>
	);
}