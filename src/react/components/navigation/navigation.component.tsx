import styled from 'styled-components';
import {Button} from '../inputs/button/button.component.tsx';

import DiscordIcon from './logos/discord.svg';
import GitHubIcon from './logos/github.svg';
import ThemeIcon from './logos/theme.svg';
import InkwellLogo from './logos/inkwell.svg';
import {useNavigate} from 'react-router-dom';

const NavbarIcon = styled.img`
    width: 1.5em;
    height: 1.5em;

    margin-right: 1em;

    cursor: pointer;
`;

const NavbarContainer = styled.div`
    z-index: 999;

    display: flex;
    justify-content: space-between;

    padding-left: 1em;
    padding-right: 1em;

    position: fixed;
    top: 0;
    left: 0;

    background: rgba(29, 29, 31, 0.13);
    width: 100%;
    height: 8vh;
`;

const NavbarLogoIcon = styled.img`
    width: 1.5em;
    height: 1.5em;
    margin-right: 0.5em;

    cursor: pointer;
    user-select: none;
`;

const NavbarLogoText = styled.h1`
    font-size: 1.5em;
    font-weight: 500;

    margin: 0 1em 0 0;

    cursor: pointer;
    user-select: none;
`;

const NavbarSide = styled.div`
    display: flex;
    align-items: center;
`;

const NavbarLink = styled.a`
    color: ${p => p.theme.colors.text};
    text-decoration: none;
    font-size: 1em;
    font-weight: 200;
    margin-right: 1em;
    cursor: pointer;
`;

const Navigation = () => {
    const nav = useNavigate();
    const handleSignIn = () => {
        nav('/sign/in');
    };

    const navigateHome = () => {
        nav('/');
    };

    // TODO(calco): Add navigations
    return (
        <NavbarContainer>
            <NavbarSide>
                <NavbarLogoIcon src={InkwellLogo} onClick={navigateHome} />
                <NavbarLogoText onClick={navigateHome}>Inkwell</NavbarLogoText>

                <NavbarLink>Docs</NavbarLink>
                <NavbarLink>Blog</NavbarLink>
                <NavbarLink>Showcase</NavbarLink>
            </NavbarSide>

            <NavbarSide>
                <NavbarIcon src={DiscordIcon} />
                <NavbarIcon src={GitHubIcon} />
                <NavbarIcon src={ThemeIcon} />

                <Button
                    onClick={handleSignIn}
                    config={{style: 'primary', inverted: false}}
                >
                    SIGN IN
                </Button>
            </NavbarSide>
        </NavbarContainer>
    );
};

export default Navigation;
