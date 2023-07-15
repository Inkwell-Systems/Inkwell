import {
    IInputProps,
    InputContainer,
    InputStyles,
    TextBasedInput,
} from './utils.ts';
import styled from 'styled-components';

const Inp = styled.textarea`
    ${p => InputStyles(p)}
`;

const MultilineInput = (props: IInputProps<string, HTMLTextAreaElement>) => {
    return (
        <InputContainer style={props.styles}>
            <TextBasedInput value={props.value}>{props.label}</TextBasedInput>

            <Inp
                style={props.innerStyles}
                value={props.value}
                onChange={props.onChange}
            />
        </InputContainer>
    );
};

export default MultilineInput;
