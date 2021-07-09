import React from "react";
import styled from "styled-components";
import { Button, ToggleButton, ToggleButtonGroup } from "react-bootstrap";

const StyledBootstrapButton = styled(Button)``;

export function KitButton(props) {
	return (
		<StyledBootstrapButton {...props} />
	);
} 

const StyledBootstrapToggleButton = styled(ToggleButton)``;

export function KitToggleButton(props) {
	return (
		<StyledBootstrapToggleButton {...props} />
	);
}

export const StyledBootstrapToggleButtonGroup = styled(ToggleButtonGroup)``;