import {
    AccountButtonSubtext,
    AccountElementContainer,
    AccountSettingsHeader,
} from './utils.tsx';
import React from 'react';
import {Button} from '../../inputs/button/button.component.tsx';
import {DeleteUser} from '../../../../firebase/auth/init.ts';
import {useNavigate} from 'react-router-dom';
import UseUserProvider from '../../../hooks/user-provider/userProvider.hook.ts';
import {DefaultUser} from '../../../../types';
import UseProjectProvider from '../../../hooks/project-provider/project-provider.hook.ts';

const Management = () => {
    const uCtx = UseUserProvider();
    const pCtx = UseProjectProvider();
    const nav = useNavigate();

    const handleAccountDeletion = async () => {
        uCtx.setValue(DefaultUser);
        pCtx.setValue(null);
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
