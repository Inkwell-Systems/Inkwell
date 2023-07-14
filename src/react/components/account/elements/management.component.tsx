import {
    AccountButtonSubtext,
    AccountElementContainer,
    AccountSettingsHeader,
} from './utils.tsx';
import React from 'react';
import {Button} from '../../inputs/button/button.component.tsx';

const Management = () => {
    const handleAccountDeletion = () => {
        console.log('Deleting account.');
    };

    return (
        <AccountElementContainer>
            <AccountSettingsHeader>Management</AccountSettingsHeader>

            <AccountElementContainer>
                <div>
                    <Button
                        config={{
                            style: 'danger',
                            inverted: false,
                        }}
                        onClick={handleAccountDeletion}
                    >
                        DELETE ACCOUNT
                    </Button>
                    <AccountButtonSubtext>
                        WARNING: This action is irreversible, and there is no
                        confirmation prompt.
                    </AccountButtonSubtext>
                </div>
            </AccountElementContainer>
        </AccountElementContainer>
    );
};

export default Management;
