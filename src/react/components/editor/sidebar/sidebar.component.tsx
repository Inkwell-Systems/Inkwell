import styled from 'styled-components';

import LogoIcon from './icons/logo.svg';
import ManagementIcon from './icons/management.icon.tsx';
import OverviewIcon from './icons/overview.icon.tsx';
import ViewsIcon from './icons/views.icon.tsx';

import HelpIcon from './icons/help.svg';
import FreeDownloadHere from './icons/free-download-here.svg';

import SidebarElement from './sidebar-element/sidebar-element.component.tsx';
import {useState} from 'react';
import UseUserProvider from '../../../hooks/user-provider/userProvider.hook.ts';
import UseProjectProvider from '../../../hooks/project-provider/project-provider.hook.ts';

const SidebarContainer = styled.div`
    width: 4rem;
    height: 100vh;

    background-color: #131315;
    border-right: 2px solid #000;

    padding: 0.5rem;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    overflow: hidden;
    position: fixed;
    left: 0;
    top: 0;
`;

const SidebarTop = styled.div`
    margin-top: 1rem;

    display: flex;
    flex-direction: column;

    align-items: center;
`;

const SidebarBottom = styled.div`
    display: flex;
    flex-direction: column;

    align-items: center;
`;

const SidebarLogo = styled.div`
    width: 100%;
    height: 2rem;

    margin-bottom: 2rem;

    display: flex;
    justify-content: center;
    align-items: center;
`;

const SidebarLink = styled.div`
    user-select: none;
    cursor: pointer;

    width: 100%;
    aspect-ratio: 1/1;

    margin-bottom: 0.5rem;
    border-radius: 50%;

    display: flex;
    justify-content: center;
    align-items: center;

    &:last-child {
        margin-bottom: 1rem;
    }
`;

// TODO(calco): Consider modularizing this. For now too diverse to do so?
const EditorSidebar = () => {
    const uCtx = UseUserProvider();
    const pCtx = UseProjectProvider();
    const [selected, setSelected] = useState(0);

    const elements = [
        {
            icon: <OverviewIcon selected={selected === 0} />,
            title: 'OVERVIEW',
            options: [],
        },
        {
            icon: <ManagementIcon selected={selected === 1} />,
            title: 'MANAGEMENT',
            options: [
                {
                    title: 'Project Settings',
                    element: <div>Project Settings</div>,
                },
                {
                    title: 'Collaboration',
                    element: <div>Collab screen</div>,
                },
                {
                    title: 'Custom Entries',
                    element: <div>Massive work in progress lmao</div>,
                },
            ],
        },
        {
            icon: <ViewsIcon selected={selected === 2} />,
            title: 'VIEWS',
            options: [],
        },
    ];

    const handleExportProject = () => {
        const text = JSON.stringify(pCtx.value, null, 4);

        const element = document.createElement('a');
        const file = new Blob([text], {type: 'inkwell'});
        element.href = URL.createObjectURL(file);
        element.download = `${pCtx.value.projectName}.inkwell`;

        document.body.appendChild(element); // Required for this to work in FireFox
        element.click();

        document.body.removeChild(element);
    };

    const openInNewTab = url => {
        window.open(url, '_blank', 'noreferrer');
    };

    return (
        <SidebarContainer>
            <SidebarTop>
                <SidebarLogo>
                    <img src={LogoIcon} alt="Inkwell Logo" />
                </SidebarLogo>
                {elements.map((element, index) => {
                    return (
                        <SidebarElement
                            key={index}
                            icon={element.icon}
                            selected={selected === index}
                            onClick={() => setSelected(index)}
                        />
                    );
                })}
            </SidebarTop>

            <SidebarBottom>
                <SidebarLink onClick={handleExportProject}>
                    <img alt="Export Project File" src={FreeDownloadHere} />
                </SidebarLink>
                <SidebarLink
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
                    <img alt="Help" src={HelpIcon} />
                </SidebarLink>
                <SidebarLink onClick={() => console.log('aaa')}>
                    <img src={uCtx.value.profilePicture} alt="User profile" />
                </SidebarLink>
            </SidebarBottom>
        </SidebarContainer>
    );
};

export default EditorSidebar;
