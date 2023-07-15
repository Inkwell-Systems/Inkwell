import React from 'react';
import styled from 'styled-components';
import TextInput from '../../../../../inputs/input/text-input.component.tsx';
import {Button} from '../../../../../inputs/button/button.component.tsx';

const LinkInvitationContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

const LinkInvitation = ({link}) => {
    const handleCopyLink = async () => {
        await navigator.clipboard.writeText(link);
        console.log(
            `Copied link ${link} invitation to clipboard. (link-invitation.component.tsx)`,
        );
    };

    return (
        <LinkInvitationContainer>
            <TextInput
                disabled={true}
                styles={{
                    backgroundColor: '#131315',
                    marginBottom: '1.5rem',
                }}
                innerStyles={{
                    color: '#b4b4b4',
                    fontSize: '0.8rem',
                }}
                label="Invitation Link"
                value={link}
                onChange={_ => {}}
            />
            <div>
                <Button
                    config={{
                        style: 'secondary',
                        inverted: true,
                    }}
                    onClick={handleCopyLink}
                >
                    Copy
                </Button>
            </div>
        </LinkInvitationContainer>
    );
};

export default LinkInvitation;
