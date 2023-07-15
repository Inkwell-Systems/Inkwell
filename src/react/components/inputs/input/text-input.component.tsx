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

export interface ITextInputProps extends IInputProps<string, HTMLInputElement> {
    type?: string;
    disabled?: boolean;
}

const TextInput = (props: ITextInputProps) => {
    return (
        <InputContainer style={props.styles}>
            <TextBasedInput style={props.labelStyles} value={props.value}>
                {props.label}
            </TextBasedInput>

            <Inp
                disabled={props?.disabled ?? false}
                style={props.innerStyles}
                type={props.type}
                value={props.value}
                onChange={props.onChange}
            />
        </InputContainer>
    );
};

export default TextInput;
