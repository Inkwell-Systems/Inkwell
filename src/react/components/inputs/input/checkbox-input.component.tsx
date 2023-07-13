import {IInputProps, InputContainer, InputLabel, InputStyles} from './utils.ts';
import React from 'react';
import styled from 'styled-components';

const Inp = styled.input`
    ${p => InputStyles(p)}
`;

const CheckboxInput = (props: IInputProps<boolean, HTMLInputElement>) => {
    return (
        <InputContainer
            style={{
                aspectRatio: '1/1',
                width: '1.5rem',
                height: '1.5rem',
                ...props.styles,
            }}
        >
            <InputLabel
                style={{
                    left: '0px',
                }}
            >
                {props.label}
            </InputLabel>

            <Inp
                type="checkbox"
                checked={props.value}
                onChange={props.onChange}
            />
        </InputContainer>
    );
};

export default CheckboxInput;
