import styled from 'styled-components';
import {Bar, Container, Section} from 'react-simple-resizer';

export const PanelHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 3rem;

    padding: 0.5rem 1rem;

    border-bottom: 5px solid #131315;
`;

export const PanelContentContainer = styled.div`
    width: 100%;
    padding: 1rem;
    flex: 1;

    overflow-y: auto;
`;

export const YeetableContainer = styled(Container)`
    height: 100%;
`;

export const YeetableSection = styled(Section)`
    background-color: #1d1d1f;
    display: flex;
    flex-direction: column;

    h1 {
        color: #b4b4b4;
        font-size: 1rem;
        font-weight: 300;
        margin: 0.5rem;
    }
`;

export const YeetableBar = styled(Bar)`
    background-color: #131315;
    cursor: col-resize;
`;
