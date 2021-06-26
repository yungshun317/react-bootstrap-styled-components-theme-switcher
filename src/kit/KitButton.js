import React from "react";
import styled from "styled-components";
import { Button } from "react-bootstrap";

const StyledBootstrapButton = styled(Button)``;

export function KitButton(props) {
	return (
		<StyledBootstrapButton {...props} />;
	);
} 