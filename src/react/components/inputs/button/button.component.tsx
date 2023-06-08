import React from 'react';
import {BuildButtonStyle} from './button.styles.tsx';

// Create the prototype for button props
type ButtonStyle = 'primary' | 'secondary';
type ButtonColorStyle = 'filled' | 'outlined';

interface IButtonProps {
    style: React.CSSProperties;
    onClick?: () => void;
    children: React.ReactNode[] | React.ReactNode;

    config: {
        style: ButtonStyle;
        color: ButtonColorStyle;
    };
}

const PrimaryButtonStyle = BuildButtonStyle({
    mainColor: 'var(--ink-blue-main)',
    secondaryColor: 'var(--ink-grey-darkest)',
    inverted: false,
});

const SecondaryButtonStyle = BuildButtonStyle({
    mainColor: 'var(--ink-turquoise-green-main)',
    secondaryColor: 'var(--ink-grey-darkest)',
    inverted: true,
});

const StringToButtonStyle = {
    primary: PrimaryButtonStyle,
    secondary: SecondaryButtonStyle,
};

const Button = (props: IButtonProps) => {
    const Container = StringToButtonStyle[props.config.style];

    return (
        <Container onClick={props.onClick} style={props.style}>
            <button>{props.children}</button>
        </Container>
    );
};

export {Button};
