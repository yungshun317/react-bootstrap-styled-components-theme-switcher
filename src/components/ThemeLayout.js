import React from "react";

import { 
	KitContainer, 
	KitRow, 
	KitCol,
	KitHero,
	KitButton,
	KitCard
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
	};

	const renderCard = () => {
		return (
			<KitCard>
			    <KitCardBody>
                    <KitCardTitle></KitCardTitle>
                    <KitCardSubtitle></KitCardSubtitle>
                    <KitList>
                         <KitListItem></KitListItem>
                         <KitListItem></KitListItem>
                    </KitList>
                </KitCardBody>
                <KitCardFooter></KitCardFooter>
			</KitCard>
		);
	};

	return (
		<KitContainer>
		    <KitRow>
		        <KitCol>
		            {renderHero()}
		        </KitCol>
		    </KitRow>
		    <KitRow>
		        <KitCol lg={true}>
		            {renderCard()}
		        </KitCol>
		        <KitCol sm></KitCol>
		        <KitCol sm></KitCol>
		    </KitRow>
		</KitContainer>
	);
}