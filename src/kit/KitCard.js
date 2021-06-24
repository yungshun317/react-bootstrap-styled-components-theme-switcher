import React from "react";
import styled from "styled-components";
import { Card } from "react-bootstrap";

const StyledBootstrapCard = styled(Card)``;

export function KitCard(props) {
	return (
		<StyledBootstrapCard {...props} />
	);
}