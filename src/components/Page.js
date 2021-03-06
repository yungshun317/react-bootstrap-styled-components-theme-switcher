import React from "react";

import ThemeCarousel from "./ThemeCarousel";
import ThemeLayout from "./ThemeLayout";
import { KitContainer, KitRow, KitCol } from "../kit";

export default function Page(props) {
	return (
		<KitContainer>
		    <KitRow>
		        <KitCol xl={2} lg={4} md={4} sm={4} xs={12}>
		            <ThemeCarousel {...props} />
		        </KitCol>
		        <KitCol xl={10} lg={8} md={8} sm={8} xs={12}>
		            <ThemeLayout {...props} />
		        </KitCol>
		    </KitRow>
		</KitContainer>
	);
}