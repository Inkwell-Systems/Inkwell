import React from 'react';
import styled from 'styled-components';

export interface IInputProps<TValue, TEvent> {
    label: string;
    value: TValue;
    onChange: (e: React.ChangeEvent<TEvent>) => void;
    styles?: React.CSSProperties;
    innerStyles?: React.CSSProperties;
    labelStyles?: React.CSSProperties;
}

export const InputContainer = styled.div`
    position: relative;
    width: 100%;

    color: ${p => p.theme.colors.text};
    background: ${p => p.theme.colors.midBackground};
    border-radius: 0.5em;
`;

export const DisjointInputContainer = styled.div`
    display: flex;
    width: fit-content;

    align-items: center;
`;

export const InputLabel = styled.label`
    pointer-events: none;
    position: absolute;

    color: #b4b4b4;
    font-weight: 400;

    transition: all 0.2s ease-in-out;

    left: 1rem;
    top: -1rem;
    font-size: 0.8rem;
`;

export const DisjointInputLabel = styled.label`
    pointer-events: none;

    margin-right: 1rem;
`;

export const InputStyles = params => `
    width: 100%;
    height: 100%;
    padding: 1rem;

    color: ${params.theme.colors.text};

    border: none;
    background: transparent;

    &:focus {
        outline: none;
    }
`;

export const TextBasedInput = styled(InputLabel)<{value: string}>`
    ${p =>
        p.value.length > 0
            ? 'left: 0rem; top: -1rem; font-size: 0.8rem'
            : 'top: 1.25rem'}
`;
