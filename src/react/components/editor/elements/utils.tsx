import styled from 'styled-components';

export const EditorElementContainer = styled.div`
    width: 60%;
    min-width: 40rem;

    margin-left: auto;
    margin-right: auto;

    height: 100%;

    overflow: hidden;
    overflow-y: scroll;

    padding: 2rem;
`;

export const EditorSectionTitle = styled.h1`
    font-size: 0.8rem;
    font-weight: 300;
    color: #b4b4b4;
    margin-bottom: 0.5rem;
`;

export const EditorSectionContainer = styled.div`
    width: 100%;
    background-color: #1e1e1f;
    border-radius: 1rem;
    padding: 2rem;
    margin-bottom: 2rem;

    display: flex;
    flex-direction: column;
    gap: 2rem;
`;
