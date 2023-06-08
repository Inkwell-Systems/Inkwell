import styled from 'styled-components';

interface IButtonStyleConfig {
    mainColor: string;
    secondaryColor?: string;
    inverted: boolean;
}
const BuildButtonStyle = (config: IButtonStyleConfig) => {
    return styled(BaseButtonStyle)`
        background: ${config.inverted
            ? config.secondaryColor
            : config.mainColor};

        ${config.inverted && 'border: 2px solid ' + config.mainColor + ';'}

        button {
            color: ${config.inverted
                ? config.mainColor
                : config.secondaryColor};
        }

        // TODO: Add hover effects.
    `;
};

const BaseButtonStyle = styled.div`
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

        // Will be overwritten by the styled component
        background: none;
    }
`;

export {BuildButtonStyle};
