import {createGlobalStyle} from 'styled-components';

const GlobalStyles = createGlobalStyle`
    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }
    
    html {
        font-size: 100%;
    }
    
    body {
        margin: 0;
        padding: 0;
        overflow-x: hidden;
        //min-height: 100vh;
        text-rendering: optimizeSpeed;
        font-family: ${({theme}) => theme.fonts.primary}, sans-serif;
        font-size: 1rem;
        color: ${({theme}) => theme.colors.text};
        background-color: ${({theme}) => theme.colors.midBackground};
        line-height: 1;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    ul,
    figure,
    blockquote,
    dl,
    dd {
        padding: 0;
        margin: 0;
    }
    button {
        border: none;
        background-color: transparent;
        padding: 0;
        cursor: pointer;
        
      font-family: inherit;
      color: inherit;
    }

    /* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
    ul[role="list"],
    ol[role="list"] {
        list-style: none;
    }
    li {
        list-style-type: none;
    }

    /* Set core root defaults */
    html:focus-within {
        scroll-behavior: smooth;
    }

    /* Make images easier to work with */
    img,
    picture {
        max-width: 100%;
        display: block;
    }
    
    /* Inherit fonts for inputs and buttons */
    input,
    button,
    textarea,
    select {
        font: inherit;
    }
    
    /* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
    @media (prefers-reduced-motion: reduce) {
        html:focus-within {
            scroll-behavior: auto;
        }
        
        *,
        *::before,
        *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
            scroll-behavior: auto !important;
        }
    }
    
    // Custom preset styles
    h1 {
        font-size: 3.5em;
        font-weight: 800;
        margin-bottom: 0.25em;
    }
    
    h2 {
        font-weight: 100;
        font-size: 1.5em;
        margin-bottom: 0.15em;
    }
`;

export {GlobalStyles};
