import {
    IInputProps,
    InputContainer,
    InputStyles,
    TextBasedInput,
} from './utils.ts';
import styled from 'styled-components';

const Inp = styled.input`
    ${InputStyles}
`;

const NumberInput = (props: IInputProps<number, HTMLInputElement>) => {
    return (
        <InputContainer style={props.styles}>
            <TextBasedInput style={props.labelStyles} value={'a'}>
                {props.label}
            </TextBasedInput>

            <Inp
                type="number"
                style={props.innerStyles}
                value={props.value}
                onChange={props.onChange}
            />
        </InputContainer>
    );
};

export default NumberInput;
