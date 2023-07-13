import styled from 'styled-components';

const InputContainer = styled.div`
    position: relative;
    width: 100%;

    color: ${p => p.theme.colors.text};
    background: ${p => p.theme.colors.midBackground};
    border-radius: 0.5em;
`;

const InputLabel = styled.label<{value: string}>`
    pointer-events: none;
    position: absolute;

    font-size: 1rem;
    color: #b4b4b4;
    font-weight: 400;

    left: 1rem;

    transition: all 0.2s ease-in-out;

    ${p =>
        p.value.length > 0
            ? 'left: 0rem; top: -1rem; font-size: 0.8rem'
            : 'top: 1.25rem'}
`;

const InputS = styled.input`
    width: 100%;
    height: 100%;
    padding: 1rem;

    color: ${p => p.theme.colors.text};

    border: none;
    background: transparent;
`;

const Input = ({label, value, onChange}) => {
    return (
        <InputContainer>
            <InputLabel value={value}>{label}</InputLabel>

            <InputS value={value} onChange={onChange} />
        </InputContainer>
    );
};

export default Input;
