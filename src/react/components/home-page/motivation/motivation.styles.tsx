import styled from 'styled-components';

const Container = styled.div`
    position: relative;

    height: 100vh;
    width: 100vw;

    padding-left: 5vw;
    padding-right: 5vw;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const ScrollHeader = styled.h1<{scroll: number}>`
    position: absolute;
    top: ${p => window.innerHeight - Math.abs(p.scroll)}px;
    left: 0;
`;

export {Container, ScrollHeader};
