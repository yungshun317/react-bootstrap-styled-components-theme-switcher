import React from "react";

import { 
	KitContainer, 
	KitRow, 
	KitCol,
	KitHero,
	KitButton
} from "../kit";

export default function ThemeLayout(props) {
	const renderHero = () => {
		return (
			<KitHero>
			    <h2></h2>
			    <p></p>
			    <KitButton></KitButton>
			</KitHero>
		);
	}

	return (
		<KitContainer>
		    <KitRow>
		        <KitCol>
		            { renderHero() }
		        </KitCol>
		    </KitRow>
		    <KitRow>
		        <KitCol lg={true}></KitCol>
		        <KitCol sm></KitCol>
		        <KitCol sm></KitCol>
		    </KitRow>
		</KitContainer>
	);
}