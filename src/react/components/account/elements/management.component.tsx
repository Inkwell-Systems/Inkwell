import {
    AccountButtonSubtext,
    AccountElementContainer,
    AccountSettingsHeader,
} from './utils.tsx';
import React from 'react';
import {Button} from '../../inputs/button/button.component.tsx';
import {DeleteUser} from '../../../../firebase/auth/init.ts';
import {useNavigate} from 'react-router-dom';

const Management = () => {
    const nav = useNavigate();

    const handleAccountDeletion = async () => {
        await DeleteUser();
        nav('/');
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
