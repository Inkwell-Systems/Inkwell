import React, {useState} from 'react';
import TextInput from '../../../../../inputs/input/text-input.component.tsx';
import MultilineInput from '../../../../../inputs/input/multiline-input.component.tsx';
import styled from 'styled-components';
import {Button} from '../../../../../inputs/button/button.component.tsx';
import {CreateInvitation} from '../../../../../../../firebase';
import UseUserProvider from '../../../../../../hooks/user-provider/userProvider.hook.ts';
import UseProjectProvider from '../../../../../../hooks/project-provider/project-provider.hook.ts';
import {ErrorMessage} from '../../../../../../../styles/utils.styles.tsx';

const EmailInvitationContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    gap: 1rem;
`;

const EmailInvitation = () => {
    const uCtx = UseUserProvider();
    const pCtx = UseProjectProvider();

    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState<Error | null>();

    const handleEmailInvitation = async () => {
        setError(null);

        setEmail('');
        setMessage('');

        const result = await CreateInvitation(
            email,
            uCtx.value.id,
            pCtx.value.projectId,
            message,
        );

        setError(result.error);
        if (!result.error) {
            console.log(
                `Successfully sent invitation to ${email}. (email-invitation.component.tsx)`,
            );
        }
    };

    return (
        <>
            {error && <ErrorMessage>{error.message}</ErrorMessage>}
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
        </>
    );
};

export default EmailInvitation;
