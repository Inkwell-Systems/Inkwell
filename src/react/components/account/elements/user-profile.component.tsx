import TextInput from '../../inputs/input/text-input.component.tsx';
import React, {useEffect, useState} from 'react';
import {Button} from '../../inputs/button/button.component.tsx';
import styled from 'styled-components';
import {AccountSettingsHeader} from './utils.tsx';
import UseUserProvider from '../../../hooks/user-provider/userProvider.hook.ts';

const Container = styled.div`
    height: 100%;
`;

const ButtonContainer = styled.div`
    min-width: 20rem;
    width: 30%;
    height: 100%;

    display: flex;
    flex-direction: column;
    gap: 1.25rem;
`;

const MarginButton = styled.div`
    margin-top: auto;
`;

const UserProfile = () => {
    const uCtx = UseUserProvider();
    const [displayName, setDisplayName] = useState('');
    const [profileUrl, setProfileUrl] = useState('');

    // TODO(calco): Send request to API.
    const handleSaveSettings = () => {
        console.log('Saving user settings.');
    };

    useEffect(() => {
        setDisplayName(uCtx.value.name);
        setProfileUrl(uCtx.value.profilePicture);
    }, []);

    return (
        <ButtonContainer>
            <AccountSettingsHeader>General Info</AccountSettingsHeader>

            <TextInput
                label={'DISPLAY NAME'}
                value={displayName}
                onChange={e => setDisplayName(e.target.value)}
            />

            <TextInput
                label={'PROFILE URL'}
                value={profileUrl}
                onChange={e => setProfileUrl(e.target.value)}
            />

            <MarginButton>
                <Button
                    config={{
                        style: 'primary',
                        inverted: false,
                    }}
                    onClick={handleSaveSettings}
                >
                    Save Settings
                </Button>
            </MarginButton>
        </ButtonContainer>
    );
};

export default UserProfile;
