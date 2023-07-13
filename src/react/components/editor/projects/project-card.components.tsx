import IProject from '../../../../types/IProject.ts';
import styled from 'styled-components';

import CloudFalse from './icons/cloud-false.svg';
import CloudTrue from './icons/cloud-true.svg';

import FavouriteTrue from './icons/favourite-true.svg';
import FavouriteFalse from './icons/favourite-false.svg';

import Owner from './icons/owner.svg';
import {useNavigate} from 'react-router-dom';

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
    const getFormattedDate = (date: Date) => {
        const daysAgo = Math.floor(
            (new Date().getTime() - date.getTime()) / (1000 * 3600 * 24),
        );

        if (daysAgo < 7) return `${daysAgo} days ago`;
        if (daysAgo >= 365) return `${Math.floor(daysAgo / 365)} year(s) ago`;
        if (daysAgo >= 30) return `${Math.floor(daysAgo / 30)} month(s) ago`;
        if (daysAgo >= 7) return `${Math.floor(daysAgo / 4)} week(s) ago`;

        return `How did we get here?!`;
    };

    const nav = useNavigate();
    const handleSelect = () => {
        nav(`/editor/${project.projectId}`);
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
                <h2>{getFormattedDate(new Date(project.projectCreatedAt))}</h2>
                <ProjectInfo>
                    <img src={Owner} alt={'Owner'} />
                    <img src={CloudFalse} alt={'Cloud'} />
                </ProjectInfo>
            </ProjectRight>
        </ProjectContainer>
    );
};

export default ProjectCard;
