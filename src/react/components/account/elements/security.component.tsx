import {
    AccountBottomElement,
    AccountElementContainer,
    AccountSettingsHeader,
} from './utils.tsx';
import React, {useState} from 'react';
import {Button} from '../../inputs/button/button.component.tsx';
import TextInput from '../../inputs/input/text-input.component.tsx';

const Security = () => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSaveSettings = () => {
        console.log('Saving user settings.');
    };

    return (
        <AccountElementContainer>
            <AccountSettingsHeader>Security</AccountSettingsHeader>

            <TextInput
                type={'password'}
                label={'PASSWORD'}
                value={password}
                onChange={e => setPassword(e.target.value)}
            />

            <TextInput
                type={'password'}
                label={'CONFIRM PASSWORD'}
                value={confirmPassword}
                onChange={e => setConfirmPassword(e.target.value)}
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

export default Security;
