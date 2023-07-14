import TextInput from '../../inputs/input/text-input.component.tsx';
import React, {useEffect, useState} from 'react';
import {Button} from '../../inputs/button/button.component.tsx';
import {
    AccountBottomElement,
    AccountElementContainer,
    AccountSettingsHeader,
} from './utils.tsx';
import UseUserProvider from '../../../hooks/user-provider/userProvider.hook.ts';
import IUser from '../../../../types/IUser.ts';
import {
    ErrorMessage,
    SuccessMessage,
} from '../../../../styles/utils.styles.tsx';
import {UpdateUserInDatabase} from '../../../../firebase/database';

const UserProfile = () => {
    const uCtx = UseUserProvider();

    const [error, setError] = useState<Error | null>(null);
    const [success, setSuccess] = useState<string | null>(null);

    const [displayName, setDisplayName] = useState('');
    const [profileUrl, setProfileUrl] = useState('');

    // TODO(calco): Send request to API.
    const handleSaveSettings = async () => {
        setError(null);
        setSuccess(null);

        const newUser: IUser = {
            ...uCtx.value,
            name: displayName,
            profilePicture: profileUrl,
        };

        const result = await UpdateUserInDatabase(newUser);
        setError(result.error);

        if (result.data) {
            uCtx.setValue(result.data);
            setSuccess('Successfully updated user!');
        }
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

            <SuccessMessage>{success}</SuccessMessage>
            <ErrorMessage>{error?.message}</ErrorMessage>

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
