import styled from 'styled-components';

const SignContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100vw;
    height: 100vh;

    background: ${p => p.theme.colors.midBackground};
`;

const GoogleButton = styled.img`
    width: 3rem;
    height: 3rem;

    cursor: pointer;
`;

const SignUpStyles = styled.span`
    color: #18a5ec;
    cursor: pointer;

    &:hover {
        text-decoration: underline;
    }
`;

export {SignContainer, GoogleButton, SignUpStyles};
