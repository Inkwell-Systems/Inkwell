import styled from 'styled-components';
import {ReactElement} from 'react';

export interface ISidebarElementProps {
    icon: ReactElement;
    selected: boolean;
    onClick: () => void;
    setHovered: (hovered: boolean) => void;
}

const Container = styled.div<{selected: boolean}>`
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: ${p => (p.selected ? '#143649' : '#131315')};

    user-select: none;
    cursor: pointer;

    width: 100%;
    aspect-ratio: 1/1;

    margin-bottom: 0.5rem;
    border-radius: 50%;
`;

const SidebarElement = (props: ISidebarElementProps) => {
    return (
        <Container
            onMouseEnter={() => props.setHovered(true)}
            onMouseLeave={() => props.setHovered(false)}
            selected={props.selected}
            onClick={props.onClick}
        >
            {props.icon}
        </Container>
    );
};

export default SidebarElement;
