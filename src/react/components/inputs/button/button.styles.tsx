import styled, {DefaultTheme, useTheme} from 'styled-components';

interface IButtonStyleParams {
    scheme: IButtonScheme;
}

interface IButtonScheme {
    primary: string;
    background: string;
    text: string;
    border: string;
}

const ButtonSchemes: (p: DefaultTheme) => {
    [key: string]: IButtonScheme;
} = p => ({
    primary: {
        primary: p.colors.primary,
        background: p.colors.primary,
        text: p.colors.text,
        border: p.colors.primary,
    },
    secondary: {
        primary: p.colors.secondary,
        background: p.colors.secondary,
        text: p.colors.text,
        border: p.colors.secondary,
    },
    secondaryInverted: {
        primary: 'var(--ink-turquoise-green-main)',
        background: 'var(--ink-transparent)',
        text: 'var(--ink-turquoise-green-main)',
        border: 'var(--ink-turquoise-green-main)',
    },
});

// TODO: Should probably be caching this.
const GetButtonScheme = (scheme: string) => {
    const theme = useTheme();
    return ButtonSchemes(theme)[scheme];
};

const ButtonContainer = styled.div<IButtonStyleParams>`
    box-sizing: border-box;
    transition: all
        ${p => p.theme.transitions.duration + ' ' + p.theme.transitions.easing};

    border-radius: var(--ink-global-radius);

    background: ${p => p.scheme.background};
    color: ${p => p.scheme.text};
    border: 3px solid ${p => p.scheme.border};

    position: relative;
    &:active {
        transform: translateY(3px);
    }

    &::after,
    &::before {
        border-radius: var(--ink-global-radius);
    }

    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: transparent;
        border: 3px solid ${p => p.scheme.border};
        opacity: 0;
        z-index: -1;
        transform: scaleX(1.3) scaleY(1.5);
        transition: transform 0.3s, opacity 0.3s;
    }

    &:hover::after {
        opacity: 1;
        transform: scaleX(1) scaleY(1);
    }

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

export {ButtonContainer, GetButtonScheme};
