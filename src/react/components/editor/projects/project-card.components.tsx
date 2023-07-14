import IProject, {GetFormattedProjectDate} from '../../../../types/IProject.ts';
import styled from 'styled-components';

import CloudFalse from './icons/cloud-false.svg';
import CloudTrue from './icons/cloud-true.svg';

import FavouriteTrue from './icons/favourite-true.svg';

import Owner from './icons/owner.svg';
import {useNavigate} from 'react-router-dom';
import UseUserProvider from '../../../hooks/user-provider/userProvider.hook.ts';

const ProjectContainer = styled.div`
    width: 100%;
    display: flex;
    border-radius: 0.5rem;

    padding: 1rem;

    cursor: pointer;

    transition: background-color 0.2s ease-in-out;

    &:hover {
        background-color: #1d1d1f;
    }
`;

const ProjectLeft = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 2rem;
`;

const ProjectMain = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;

    padding-right: 2rem;

    h1 {
        font-size: 1.3rem;
        font-weight: normal;
        margin: 0;
        color: #e3e3e3;
    }

    p {
        font-size: 1rem;
        font-weight: lighter;
        color: #b4b4b4;
    }
`;

const ProjectRight = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    h2 {
        font-size: 1rem;
        font-weight: lighter;
        color: #b4b4b4;
        margin: 0;
    }

    img {
        margin-left: 1rem;
        margin-top: 0.5rem;

        width: 1.5rem;
        height: 1.5rem;
    }
`;

const ProjectInfo = styled.div`
    display: flex;
`;

// TODO(calco): Add project owner and cloud status.
// TODO(calco): Add favourite status.
const ProjectCard = ({project}: {project: IProject}) => {
    const uCtx = UseUserProvider();
    const nav = useNavigate();
    const handleSelect = () => {
        if (!project.cloud) nav('/editor/local');
        else nav(`/editor/${project.projectId}`);
    };

    return (
        <ProjectContainer onClick={handleSelect}>
            <ProjectLeft>
                <img src={FavouriteTrue} alt={'Favourite'} />
            </ProjectLeft>
            <ProjectMain>
                <h1>{project.projectName}</h1>
                <p>{project.projectDescription}</p>
            </ProjectMain>
            <ProjectRight>
                <h2>
                    {GetFormattedProjectDate(
                        new Date(project.projectCreatedAt),
                    )}
                </h2>
                <ProjectInfo>
                    {project.owner == uCtx.value.id || !project.cloud ? (
                        <img src={Owner} alt={'Owner'} />
                    ) : null}
                    {project.cloud ? (
                        <img src={CloudTrue} alt={'Cloud'} />
                    ) : (
                        <img src={CloudFalse} alt={'Local'} />
                    )}
                </ProjectInfo>
            </ProjectRight>
        </ProjectContainer>
    );
};

export default ProjectCard;
