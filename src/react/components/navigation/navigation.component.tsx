import styled from 'styled-components';
import {Button} from '../inputs/button/button.component.tsx';

import DiscordIcon from './logos/discord.svg';
import GitHubIcon from './logos/github.svg';
import ThemeIcon from './logos/theme.svg';
import InkwellLogo from './logos/inkwell.svg';

import Settings from './logos/settings.svg';
import SignOut from './logos/sign-out.svg';

import ProjectsIcon from './logos/projects.svg';

import {useNavigate} from 'react-router-dom';
import UseUserProvider from '../../hooks/user-provider/userProvider.hook.ts';
import {useState} from 'react';
import {SignUserOut} from '../../../firebase';
import {DefaultUser} from '../../../types';
import UseProjectProvider from '../../hooks/project-provider/project-provider.hook.ts';

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

    user-select: none;
    &:hover {
        text-decoration: underline;
    }
`;

const NavbarUserIcon = styled.img`
    width: 2.5em;
    height: 2.5em;
    border-radius: 50%;

    cursor: pointer;
`;

const UserDropdown = styled.div`
    position: absolute;
    width: 15rem;
    background: #3e3e3e;
    border-color: #1d1d1f;
    border-width: 3px;
    border-style: solid;
    border-radius: 0.5rem;

    overflow: hidden;
`;

const UserDropdownItem = styled.div`
    display: flex;
    align-items: center;
    padding: 0.8rem 1.2rem;

    cursor: pointer;
    user-select: none;

    transition: background 0.2s ease-in-out;

    &:hover {
        background-color: #747474;
    }
`;

const UserDropdownItemIcon = styled.img`
    width: 1.5rem;
    height: 1.5rem;
    margin-right: 1rem;
`;

const UserDropdownItemText = styled.p`
    font-size: 1rem;
    font-weight: 300;
    flex: 1;
`;

const Navigation = () => {
    const uCtx = UseUserProvider();
    const pCtx = UseProjectProvider();
    const nav = useNavigate();

    const [displayUserProfile, setDisplayUserProfile] = useState(false);
    const [iconRef, setIconRef] = useState<HTMLImageElement>();

    const openInNewTab = url => {
        window.open(url, '_blank', 'noreferrer');
    };

    const handleSignIn = () => {
        nav('/sign/in');
    };

    const navigateHome = () => {
        nav('/');
    };

    const handleAccountSettings = () => {
        setDisplayUserProfile(false);
        nav('/account');
    };

    // TODO(calco): Properly handle sign out.
    const handleSignOut = async () => {
        setDisplayUserProfile(false);

        uCtx.setValue(DefaultUser);
        pCtx.setValue(null);
        if (window.location.pathname !== '/') {
            nav('/');
        }

        await SignUserOut();
    };

    const toggleDisplayUserProfile = () => {
        setDisplayUserProfile(!displayUserProfile);
    };

    // TODO(calco): Add navigations
    return (
        <NavbarContainer>
            {displayUserProfile && (
                <UserDropdown
                    style={{
                        top: iconRef?.offsetTop + iconRef?.offsetHeight + 20,
                        right:
                            window.innerWidth -
                            iconRef?.offsetLeft -
                            iconRef?.offsetWidth,
                    }}
                >
                    <UserDropdownItem onClick={handleAccountSettings}>
                        <UserDropdownItemIcon src={Settings} />
                        <UserDropdownItemText>
                            Account Settings
                        </UserDropdownItemText>
                    </UserDropdownItem>

                    <UserDropdownItem
                        onClick={() => {
                            setDisplayUserProfile(false);
                            nav('/projects');
                        }}
                    >
                        <UserDropdownItemIcon src={ProjectsIcon} />
                        <UserDropdownItemText>Projects</UserDropdownItemText>
                    </UserDropdownItem>

                    <UserDropdownItem onClick={handleSignOut}>
                        <UserDropdownItemIcon src={SignOut} />
                        <UserDropdownItemText>Sign Out</UserDropdownItemText>
                    </UserDropdownItem>
                </UserDropdown>
            )}

            <NavbarSide>
                <NavbarLogoIcon src={InkwellLogo} onClick={navigateHome} />
                <NavbarLogoText onClick={navigateHome}>Inkwell</NavbarLogoText>

                <NavbarLink
                    onAuxClick={() =>
                        openInNewTab(
                            'https://github.com/Inkwell-Systems/InkwellAPI',
                        )
                    }
                    onClick={() =>
                        openInNewTab(
                            'https://github.com/Inkwell-Systems/InkwellAPI',
                        )
                    }
                >
                    Docs
                </NavbarLink>
                <NavbarLink
                    onAuxClick={() =>
                        openInNewTab('https://github.com/CalcoDev')
                    }
                    onClick={() => openInNewTab('https://github.com/CalcoDev')}
                >
                    Blog
                </NavbarLink>
                <NavbarLink
                    onAuxClick={() => () => nav('/projects')}
                    onClick={() => nav('/projects')}
                >
                    Showcase
                </NavbarLink>
            </NavbarSide>

            <NavbarSide>
                <NavbarIcon
                    onAuxClick={() =>
                        openInNewTab(
                            'https://discord.gg/QQx6Ucu96r',
                        )
                    }
                    onClick={() =>
                        openInNewTab(
                            'https://discord.gg/QQx6Ucu96r',
                        )
                    }
                    src={DiscordIcon}
                />
                <NavbarIcon
                    onAuxClick={() =>
                        openInNewTab(
                            'https://github.com/Inkwell-Systems/InkwellAPI',
                        )
                    }
                    onClick={() =>
                        openInNewTab(
                            'https://github.com/Inkwell-Systems/InkwellAPI',
                        )
                    }
                    src={GitHubIcon} />
                <NavbarIcon src={ThemeIcon} />

                {uCtx.value.isAuthenticated ? (
                    <NavbarUserIcon
                        ref={setIconRef}
                        src={uCtx.value.profilePicture}
                        onClick={toggleDisplayUserProfile}
                    />
                ) : (
                    <Button
                        onClick={handleSignIn}
                        config={{style: 'primary', inverted: false}}
                    >
                        SIGN IN
                    </Button>
                )}
            </NavbarSide>
        </NavbarContainer>
    );
};

export default Navigation;
