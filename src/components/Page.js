import React from "react";

import Carousel from "./Carousel";
import { KitContainer, KitRow, KitCol } from "../kit/KitContainer";

export default function Page(props) {
	return (
		<KitContainer>
		    <KitRow>
		        <KitCol xl={2} lg={4} md={4} sm={4} xs={12}>
		            <Carousel {...props} />
		        </KitCol>
		        <KitCol xl={10} lg={8} md={8} sm={8} xs={12}>
		        </KitCol>
		    </KitRow>
		</KitContainer>
	);
}