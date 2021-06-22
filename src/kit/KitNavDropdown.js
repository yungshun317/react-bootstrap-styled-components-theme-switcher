import React, { useState } from "react";
import styled from "styled-components";
import { NavDropdown } from "react-bootstrap";

const StyledBootstrapNavDropdown = styled(NavDropdown)``;

const StyledBootstrapNavDropdownItem = styled(NavDropdown.Item);

export default function KitNavDropdown(props) {
	const renderItem = (theme, index) => {
		return (
			<StyledBootstrapNavDropdownItem
			    onSelect={() => props.setThemeIndex(index)}
			    key={index}
			>
			    {theme.title}
			</StyledBootstrapNavDropdownItem>
		);
	};

    const { themes, themeIndex: current } = props;

	return (
	    <StyledBootstrapNavDropdown
			alignRight
			label={themes[current].title}
			items={props.themes.map((theme, index) => renderItem(theme, index))}
		/>
	);
}

/*
export const StyledBootstrapDropdownToggle = styled(Dropdown.Toggle)`
`;

export function KitDropdownToggle(props) {
	const { showMenu, alignRight, ...rest } = props;
	return (
        <StyledBootstrapDropdownToggle
            {...rest}
            className={showMenu ? "dropdown-toggle show" : "dropdown-toggle"}
        />
    );
}

export const StyledBootstrapDropdownMenu = styled(Dropdown.Menu)``;

export function KitDropdownMenu(props) {
	const { showMenu, alignRight, ...rest } = props;
    return (
        <StyledBootstrapDropdownMenu
            {...rest}
            className={`
            	dropdown-menu 
            	${alignRight ? "dropdown-menu-right" : ""} 
            	${showMenu ? "show" : ""}
            `}
        />
    );
}

export const StyledBootstrapDropdownItem = styled(Dropdown.Item)`
`;

export function KitDropdownItem(props) {
	const { showMenu, alignRight, onSelect, ...rest } = props;
	return (
		<StyledBootstrapDropdownItem {...rest} onClick={() => onSelect()} />
	);
}

export const StyledBootstrapDropdown = styled(Dropdown)``;

export function KitDropdown(props) {
    const [showMenu, setShowMenu] = useState(true);

	return (
		<StyledBootstrapDropdown
		    {...props}
		    className={showMenu ? "show dropdown" : "dropdown"}
		>
		    <KitDropdownToggle
                {...props}
                showMenu={showMenu}
                onClick={() => setShowMenu(!showMenu)}
            >
                {props.label}
            </KitDropdownToggle>
		    <KitDropdownMenu
		        {...props}
		        onClick={() => setShowMenu(!showMenu)}
		        showMenu={showMenu}
		    >
		        {props.items}
		    </KitDropdownMenu>
		</StyledBootstrapDropdown>
	);
}
*/