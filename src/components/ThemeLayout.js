import React from "react";

import { KitContainer, KitRow, KitCol } from "../kit/KitContainer";

export default function ThemeLayout(props) {
	return (
		<KitContainer>
		    <KitRow>
		        <KitCol></KitCol>
		    </KitRow>
		    <KitRow>
		        <KitCol lg={true}></KitCol>
		        <KitCol sm></KitCol>
		        <KitCol sm></KitCol>
		    </KitRow>
		</KitContainer>
	);
}