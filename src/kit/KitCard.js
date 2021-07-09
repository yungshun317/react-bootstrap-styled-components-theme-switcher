import React from "react";
import styled from "styled-components";
import { Card } from "react-bootstrap";

const StyledBootstrapCard = styled(Card)``;

export function KitCard(props) {
	return (
		<StyledBootstrapCard {...props} />
	);
}

export const KitCardTitle = styled(Card.Title)``;
export const KitCardSubtitle = styled(Card.Subtitle)``;
export const KitCardBody = styled(Card.Body)``;
export const KitCardFooter = styled(Card.Footer)``;