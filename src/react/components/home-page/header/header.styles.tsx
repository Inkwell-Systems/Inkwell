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
`;

const LandingImage = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;

    object-fit: cover;
    z-index: -1;
`;

const Header = styled.h1``;

const SubHeader = styled.h2`
    font-family: ${p => p.theme.fonts.secondary};
`;

const ButtonContainer = styled.div`
    margin-top: 1em;

    display: flex;
    flex-direction: row;
`;

export {Container, Header, SubHeader, LandingImage, ButtonContainer};
