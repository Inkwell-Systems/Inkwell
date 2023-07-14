import TextInput from '../../inputs/input/text-input.component.tsx';
import React, {useEffect, useState} from 'react';
import {Button} from '../../inputs/button/button.component.tsx';
import {
    AccountBottomElement,
    AccountElementContainer,
    AccountSettingsHeader,
} from './utils.tsx';
import UseUserProvider from '../../../hooks/user-provider/userProvider.hook.ts';

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
        <AccountElementContainer>
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

            <AccountBottomElement>
                <Button
                    config={{
                        style: 'primary',
                        inverted: false,
                    }}
                    onClick={handleSaveSettings}
                >
                    Save Settings
                </Button>
            </AccountBottomElement>
        </AccountElementContainer>
    );
};

export default UserProfile;
