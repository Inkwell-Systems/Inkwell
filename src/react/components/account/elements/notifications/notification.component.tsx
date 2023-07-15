import {Button} from '../../../inputs/button/button.component.tsx';
import styled from 'styled-components';
import {AcceptInvitation} from '../../../../../firebase';
import {Simulate} from 'react-dom/test-utils';
import {useNavigate} from 'react-router-dom';

const NotificationContainer = styled.div`
    display: flex;
    justify-content: space-between;

    gap: 1rem;
    padding: 1rem;
    border-radius: 0.5rem;
    background-color: #1d1d1f;
`;

const NotificationContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;

    h1 {
        font-size: 1.5rem;
        font-weight: 700;
        color: #e3e3e3;
    }

    p {
        font-size: 1rem;
        font-weight: 300;
        color: #b4b4b4;
    }

    span {
        font-size: 0.75rem;
        font-weight: 300;
        color: #b4b4b4;
    }
`;

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

const Notification = ({invitation, setError}) => {
    const nav = useNavigate();

    const handleAccept = async () => {
        setError(null);
        const res = await AcceptInvitation(invitation);
        setError(res.error);

        if (!res.error) {
            nav('/projects');
        }
    };

    const handleDecline = async () => {
        console.log('decline');
    };

    return (
        <NotificationContainer>
            <NotificationContent>
                <h1>{invitation.projectId}</h1>
                <div>
                    <p>"{invitation.message}"</p>
                    <span>- {invitation.userIdFrom}</span>
                </div>
            </NotificationContent>
            <ButtonContainer>
                <Button
                    style={{
                        scale: '0.75',
                    }}
                    config={{
                        style: 'secondary',
                        inverted: true,
                    }}
                    onClick={handleAccept}
                >
                    Accept
                </Button>
                <Button
                    style={{
                        scale: '0.75',
                    }}
                    config={{
                        style: 'danger',
                        inverted: false,
                    }}
                    onClick={handleDecline}
                >
                    Decline
                </Button>
            </ButtonContainer>
        </NotificationContainer>
    );
};

export default Notification;
