import React, {useState} from 'react';
import TextInput from '../../../../../inputs/input/text-input.component.tsx';
import MultilineInput from '../../../../../inputs/input/multiline-input.component.tsx';
import styled from 'styled-components';
import {Button} from '../../../../../inputs/button/button.component.tsx';

const EmailInvitationContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    gap: 1rem;
`;

const EmailInvitation = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const handleEmailInvitation = async () => {
        console.log('email invitation');
    };

    return (
        <EmailInvitationContainer>
            <div
                style={{
                    flex: '1',
                }}
            >
                <TextInput
                    styles={{
                        backgroundColor: '#131315',
                        marginBottom: '1.5rem',
                    }}
                    innerStyles={{
                        color: '#b4b4b4',
                        fontSize: '0.8rem',
                    }}
                    label="Email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <MultilineInput
                    styles={{
                        backgroundColor: '#131315',
                    }}
                    innerStyles={{
                        height: '10rem',
                        color: '#b4b4b4',
                        fontSize: '0.8rem',
                    }}
                    label="Message - OPTIONAL"
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                />
            </div>
            <div
                style={{
                    width: '10rem',
                }}
            >
                <Button
                    config={{
                        style: 'primary',
                        inverted: false,
                    }}
                    onClick={handleEmailInvitation}
                >
                    Send
                </Button>
            </div>
        </EmailInvitationContainer>
    );
};

export default EmailInvitation;
