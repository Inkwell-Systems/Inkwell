import styled from 'styled-components';

interface IButtonStyleParams {
    inverted: boolean;
}

const BaseButtonStyle = styled.div<IButtonStyleParams>`
    box-sizing: border-box;
    transition: all 0.2s ease-in-out;
    overflow: hidden;

    border-radius: var(--ink-global-radius);

    // Will be overwritten by the styled component
    background: none;

    button {
        margin: 0;
        cursor: pointer;
        font-size: 1em;
        font-weight: bold;
        font-family: var(--ink-font-family-desc);
        padding: 0.75em 1.5em;
        border: none;

        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        // Will be overwritten by the styled component
        background: none;
    }
`;

const PrimaryButtonStyle = styled(BaseButtonStyle)`
    background: ${p =>
        p.inverted ? p.theme.colors.transparent : p.theme.colors.primary};

    ${p => p.inverted && 'border: 2px solid ' + p.theme.colors.primary + ';'}

    color: ${p =>
        p.inverted ? p.theme.colors.primary : p.theme.colors.darkBackground};
`;

const SecondaryButtonStyle = styled(BaseButtonStyle)`
    background: ${p =>
        p.inverted ? p.theme.colors.transparent : p.theme.colors.secondary};

    ${p => p.inverted && 'border: 2px solid ' + p.theme.colors.secondary + ';'}

    color: ${p =>
        p.inverted ? p.theme.colors.secondary : p.theme.colors.darkBackground};
`;

export {PrimaryButtonStyle, SecondaryButtonStyle};
