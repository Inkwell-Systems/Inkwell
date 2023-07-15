import {AccountElementContainer, AccountSettingsHeader} from '../utils.tsx';
import React, {useEffect, useState} from 'react';
import {IInvitation} from '../../../../../types/IInvitation.ts';
import Notification from './notification.component.tsx';
import {FetchUserInvitations} from '../../../../../firebase';
import UseUserProvider from '../../../../hooks/user-provider/userProvider.hook.ts';
import {ErrorMessage} from '../../../../../styles/utils.styles.tsx';

const Notifications = () => {
    const uCtx = UseUserProvider();
    const [notifs, setNotifs] = useState<IInvitation[]>([]);
    const [error, setError] = useState<Error | null>(null);

    const fetchInvitations = async () => {
        setError(null);

        const res = await FetchUserInvitations(uCtx.value.id);
        setError(res.error);
        if (!res.error) {
            setNotifs(res.data);
        }
    };

    useEffect(() => {
        if (uCtx.value.isAuthenticated) {
            fetchInvitations();
        }
    }, [uCtx.value]);

    return (
        <AccountElementContainer
            style={{
                width: 'unset',
            }}
        >
            <AccountSettingsHeader>Notifications</AccountSettingsHeader>
            <ErrorMessage>{error?.message}</ErrorMessage>

            <AccountElementContainer
                style={{
                    flex: '1',
                    width: 'unset',
                }}
            >
                {notifs.map(notif => (
                    <Notification
                        key={notif.id}
                        setError={setError}
                        invitation={notif}
                    />
                ))}
            </AccountElementContainer>
        </AccountElementContainer>
    );
};

export default Notifications;
