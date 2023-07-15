import styled from 'styled-components';

export const PanelHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 3rem;

    padding: 0.5rem 1rem;

    border-bottom: 5px solid #131315;
`;

export const PanelContentContainer = styled.div`
    height: calc(100% - 3rem);
    width: 100%;
    padding: 1rem;
`;
