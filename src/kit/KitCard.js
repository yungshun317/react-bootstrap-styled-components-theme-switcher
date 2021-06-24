import React from "react";
import styled from "styled-components";
import { Card } from "react-bootstrap";

const StyledBootstrapCard = styled(Card)``;

export function KitCard(props) {
	return (
		<StyledBootstrapCard {...props} />
	);
}

export function KitCardTitle = styled(Card.Title)``;
export function KitCardSubtitle = styled(Card.Subtitle)``;
export function KitCardBody = styled(Card.Body)``;
export function KitCardFooter = styled(Card.Footer)``;