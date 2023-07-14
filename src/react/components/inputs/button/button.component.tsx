import React from 'react';
import {ButtonContainer, GetButtonScheme} from './button.styles.tsx';

// Create the prototype for button props
type ButtonStyle = 'primary' | 'secondary' | 'danger';

interface IButtonProps {
    style?: React.CSSProperties;
    onClick?: () => void;
    children: React.ReactNode[] | React.ReactNode;

    config: {
        style: ButtonStyle;
        inverted: boolean;
    };
}

const Button = (props: IButtonProps) => {
    return (
        <ButtonContainer
            onClick={props.onClick}
            style={props.style}
            scheme={GetButtonScheme(
                props.config.style + (props.config.inverted ? 'Inverted' : ''),
            )}
        >
            <button>{props.children}</button>
        </ButtonContainer>
    );
};

export {Button};
