import styled from 'styled-components';

import LogoIcon from './icons/logo.svg';
import HelpIcon from './icons/help.svg';
import FreeDownloadHere from './icons/free-download-here.svg';

import SidebarElement from './sidebar-element/sidebar-element.component.tsx';
import UseUserProvider from '../../../hooks/user-provider/userProvider.hook.ts';
import UseProjectProvider from '../../../hooks/project-provider/project-provider.hook.ts';
import {useNavigate} from 'react-router-dom';

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

    user-select: none;
    cursor: pointer;
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

const PermaSidebar = ({selected, setSelected, elements, setHovered}) => {
    const uCtx = UseUserProvider();
    const pCtx = UseProjectProvider();
    const nav = useNavigate();

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
                <SidebarLogo onClick={() => nav('/')}>
                    <img src={LogoIcon} alt="Inkwell Logo" />
                </SidebarLogo>
                {elements.map((element, index) => {
                    return (
                        <SidebarElement
                            key={index}
                            icon={element.icon}
                            selected={selected === index}
                            onClick={() => setSelected(index)}
                            setHovered={setHovered}
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
                <SidebarLink onClick={() => nav('/account')}>
                    <img
                        style={{
                            borderRadius: '50%',
                        }}
                        src={uCtx.value.profilePicture}
                        alt="User profile"
                    />
                </SidebarLink>
            </SidebarBottom>
        </SidebarContainer>
    );
};

export default PermaSidebar;
