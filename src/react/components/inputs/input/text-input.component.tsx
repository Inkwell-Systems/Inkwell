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

const TextInput = (props: IInputProps<string, HTMLInputElement>) => {
    return (
        <InputContainer style={props.styles}>
            <TextBasedInput value={props.value}>{props.label}</TextBasedInput>

            <Inp value={props.value} onChange={props.onChange} />
        </InputContainer>
    );
};

export default TextInput;
