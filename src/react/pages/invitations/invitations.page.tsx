import {useNavigate, useParams} from 'react-router-dom';
import UseUserProvider from '../../hooks/user-provider/userProvider.hook.ts';
import {useEffect, useState} from 'react';
import IProject from '../../../types/IProject.ts';
import {AcceptLinkInvitation, FetchProjectInviteLink} from '../../../firebase';
import {ErrorMessage} from '../../../styles/utils.styles.tsx';
import {Button} from '../../components/inputs/button/button.component.tsx';
import styled from 'styled-components';

const Container = styled.div`
    width: 100vw;
    height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    gap: 1rem;
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 20rem;
`;

const Invitations = () => {
    const {projectId, projectInviteKey} = useParams();
    const uCtx = UseUserProvider();
    const nav = useNavigate();

    const [project, setProject] = useState<IProject>(null);
    const [error, setError] = useState<Error | null>(null);

    const [i, setI] = useState(0);

    const handleAccept = async () => {
        const res = await AcceptLinkInvitation(uCtx.value.id, projectId);
        if (res.error) setError(res.error);
        else nav('/projects');
    };

    const handleReject = async () => {
        nav('/');
    };

    const fetchProject = async () => {
        setError(null);

        const projRes = await FetchProjectInviteLink(
            projectId,
            projectInviteKey,
        );
        setError(projRes.error);
        if (!projRes.error) setProject(projRes.data);
    };

    useEffect(() => {
        setI(i + 1);
        if (i < 1) return;

        if (!uCtx.value.isAuthenticated) {
            nav('/sign/in');
        } else {
            fetchProject();
        }
    }, [uCtx.value]);

    return (
        <>
            {project === null ? (
                error ? (
                    <ErrorMessage>{error.message}</ErrorMessage>
                ) : (
                    <h1>Loading</h1>
                )
            ) : (
                <Container>
                    <h3>You've been invited to join</h3>

                    <h1>{project.projectName}</h1>
                    <p>{project.projectDescription}</p>

                    <ButtonContainer>
                        <Button
                            config={{
                                style: 'secondary',
                                inverted: false,
                            }}
                            onClick={handleAccept}
                        >
                            Accept
                        </Button>
                        <Button
                            config={{
                                style: 'danger',
                                inverted: false,
                            }}
                            onClick={handleReject}
                        >
                            Reject
                        </Button>
                    </ButtonContainer>
                </Container>
            )}
        </>
    );
};

export default Invitations;
