import 'styled-components';

interface IInkTheme {
    colors: {
        primary: string;
        secondary: string;

        lightBackground: string;
        midBackground: string;
        darkBackground: string;

        text: string;
        primaryText: string;
        secondaryText: string;
        darkText: string;

        transparent: string;
    };
    fonts: {
        primary: string;
        secondary: string;
    };
    paddings: {
        navbarPadding: {
            x: string;
            y: string;
        };
        buttonPadding: {
            x: string;
            y: string;
        };
    };
    margins: {};
    transitions: {
        duration: string;
        easing: string;
    };
}

declare module 'styled-components' {
    export interface DefaultTheme extends IInkTheme {}
}
