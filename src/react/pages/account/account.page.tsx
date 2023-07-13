import {SignContainer} from '../../components/sign/sign.styles.tsx';
import Navigation from '../../components/navigation/navigation.component.tsx';

import AccountIcon from './icons/account.svg';
import SecurityIcon from './icons/security.svg';
import HelpIcon from './icons/help.svg';
import ManagementIcon from './icons/management.svg';
import {ReactElement, useState} from 'react';
import styled from 'styled-components';
import AccountNavElement from '../../components/account/nav-element.component.tsx';

const AccountSettingsContainer = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;

    padding: 4rem;
`;

const AccountSettingsHeader = styled.div`
    margin-bottom: 4rem;

    h1 {
        font-size: 2.5rem;
        font-weight: 700;
        color: #e3e3e3;
    }

    p {
        font-size: 1.25rem;
        font-weight: 300;
        color: #b4b4b4;
    }
`;

const AccountSettingsContent = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 2rem;
    flex: 1;
`;

const AccountSettingsNav = styled.div`
    display: flex;
    flex-direction: column;
    flex: 2;

    background-color: #3e3e3e;
    border-radius: 0.5rem;

    overflow: hidden;
`;

const AccountSettingsElement = styled.div`
    background-color: #3e3e3e;
    border-radius: 0.5rem;

    padding: 1rem;
    flex: 5;
`;

export interface INavElement {
    icon: string;
    title: string;
    element: ReactElement;
}

const Account = () => {
    const navs: INavElement[] = [
        {
            icon: AccountIcon,
            title: 'User Profile',
            element: <div>USER PROFILE AAA</div>,
        },
        {
            icon: SecurityIcon,
            title: 'Password & Security',
            element: <div>PASSWORD & SECURITY AAA</div>,
        },
        {
            icon: HelpIcon,
            title: 'Help & Support',
            element: <div>HELP & SUPPORT AAA</div>,
        },
        {
            icon: ManagementIcon,
            title: 'Project Management',
            element: <div>PROJECT MANAGEMENT AAA</div>,
        },
    ];

    const [active, setActive] = useState(0);

    return (
        <SignContainer>
            <Navigation />

            <AccountSettingsContainer>
                <AccountSettingsHeader>
                    <h1>Account Settings</h1>
                    <p>Change your profile and account settings.</p>
                </AccountSettingsHeader>

                <AccountSettingsContent>
                    <AccountSettingsNav>
                        {navs.map((nav, i) => (
                            <AccountNavElement
                                key={i}
                                props={nav}
                                onClick={() => setActive(i)}
                                selected={i === active}
                            />
                        ))}
                    </AccountSettingsNav>
                    <AccountSettingsElement>
                        {navs[active].element}
                    </AccountSettingsElement>
                </AccountSettingsContent>
            </AccountSettingsContainer>
        </SignContainer>
    );
};

export default Account;
