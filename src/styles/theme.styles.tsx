import {DefaultTheme} from 'styled-components';

const InkDefaultTheme: DefaultTheme = {
    colors: {
        primary: 'var(--ink-blue-main)',
        secondary: 'var(--ink-turquoise-green-main)',

        lightBackground: 'var(--ink-grey-light)',
        midBackground: 'var(--ink-grey-medium)',
        darkBackground: 'var(--ink-grey-dark)',

        text: 'var(--ink-grey-lightest)',
        primaryText: 'var(--ink-blue-main)',
        secondaryText: 'var(--ink-turquoise-green-main)',
        darkText: 'var(--ink-grey-darkest)',

        transparent: 'transparent',
    },
    fonts: {
        primary: 'var(--ink-font-family-base)',
        secondary: 'var(--ink-font-family-desc)',
    },
    paddings: {
        navbarPadding: {
            x: '1rem',
            y: '0.5rem',
        },
        buttonPadding: {
            x: '1rem',
            y: '0.5rem',
        },
    },
    margins: {},
    transitions: {
        duration: '0.2s',
        easing: 'ease-in-out',
    },
};

export {InkDefaultTheme};
