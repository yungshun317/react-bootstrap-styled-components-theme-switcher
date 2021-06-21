import React from "react";
import styled from "styled-components";
import { Dropdown } from "react-bootstrap";

export const StyledBootstrapDropdownItem = styled(Dropdown.Item)`
`;

export function KitDropdownItem(props) {
	return (
		<StyledBootstrapDropdownItem onClick={() => onSelect()} />
	);
}

export const StyledBootstrapDropdown = styled(Dropdown)``;

export function KitDropdown(props) {
	return (
		<StyledBootstrapDropdown
		>

		</StyledBootstrapDropdown>
	);
}