import styles from './styles.module.scss';
import React from 'react';
import styled from 'styled-components';

// Create the prototype for button props
interface IButtonProps {
    className?: string;
    style?: React.CSSProperties;
    onClick?: () => void;
    filled?: boolean;
    children: React.ReactNode[] | React.ReactNode;
}

interface IInternalButtonProps {
    style: React.CSSProperties;
    onClick?: () => void;
    children: React.ReactNode[] | React.ReactNode;

    config: {
        color: string;
        filled: boolean;
    };
}

const Button = (props: IInternalButtonProps) => {
    const Container = styled.div`
        box-sizing: border-box;
        transition: all 0.2s ease-in-out;
        overflow: hidden;

        border-radius: $ink-global-radius;

        &:hover {
            transform: scale(1.1);
        }

        button {
            margin: 0;
            cursor: pointer;
            font-size: 1.5rem;
            font-weight: bold;
            font-family: $ink-font-family-desc;
            padding: 1rem 2rem;
            border: none;
        }
    `;

    return (
        <Container
            className={styles.button_container}
            onClick={props.onClick}
            style={props.style}
        >
            <button>{props.children}</button>
        </Container>
    );
};

const PrimaryButton = (props: IButtonProps) => {
    return (
        <Button
            type="primary"
            filled={props.filled}
            children={props.children}
            style={props.style}
            onClick={props.onClick}
        />
    );
};

const SecondaryButton = (props: IButtonProps) => {
    return (
        <Button
            type="secondary"
            filled={props.filled}
            children={props.children}
            style={props.style}
            onClick={props.onClick}
        />
    );
};

export {PrimaryButton, SecondaryButton};
