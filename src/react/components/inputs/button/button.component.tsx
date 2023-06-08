import React from 'react';
import {PrimaryButtonStyle, SecondaryButtonStyle} from './button.styles.tsx';

// Create the prototype for button props
type ButtonStyle = 'primary' | 'secondary';
type ButtonInverted = boolean;

interface IButtonProps {
    style: React.CSSProperties;
    onClick?: () => void;
    children: React.ReactNode[] | React.ReactNode;

    config: {
        style: ButtonStyle;
        inverted: ButtonInverted;
    };
}

const StringToButtonStyle = {
    primary: PrimaryButtonStyle,
    secondary: SecondaryButtonStyle,
};

const Button = (props: IButtonProps) => {
    const Container = StringToButtonStyle[props.config.style];

    return (
        <Container
            onClick={props.onClick}
            style={props.style}
            inverted={props.config.inverted}
        >
            <button>{props.children}</button>
        </Container>
    );
};

export {Button};
