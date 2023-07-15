import React, {useEffect, useState} from 'react';
import {
    EditorElementContainer,
    EditorSectionContainer,
    EditorSectionTitle,
} from '../../utils.tsx';
import UseProjectProvider from '../../../../../hooks/project-provider/project-provider.hook.ts';
import {IFetchedUser} from '../../../../../../types';
import {FetchUser} from '../../../../../../firebase/database/user/fetch-user.db.ts';
import {ErrorMessage} from '../../../../../../styles/utils.styles.tsx';
import UserCard from './user-card.component.tsx';

const CollaborationView = () => {
    const pCtx = UseProjectProvider();
    const [users, setUsers] = useState<IFetchedUser[]>();

    const [error, setError] = useState<Error | null>(null);

    const fetchAllUsers = async () => {
        setError(null);

        const members = [];
        {
            const res = await FetchUser(pCtx.value.owner);
            setError(res.error);
            if (!res.error) {
                members.push(res.data);
            }
        }

        for (const memberId of pCtx.value.members) {
            const res = await FetchUser(memberId);
            setError(res.error);

            if (!res.error) {
                members.push(res.data);
            }
        }

        setUsers(members);
    };

    useEffect(() => {
        if (pCtx.value) {
            fetchAllUsers();
        }
    }, [pCtx.value]);

    return (
        <EditorElementContainer>
            <EditorSectionTitle>Current Members</EditorSectionTitle>
            {error !== null && <ErrorMessage>{error?.message}</ErrorMessage>}

            <EditorSectionContainer>
                <ErrorMessage>
                    Changing user roles has no effect. It is a work in progress.
                    For now, only the owner can delete the project and control
                    member flow.
                </ErrorMessage>

                {users?.map(user => (
                    <UserCard
                        id={user.id}
                        key={user.id}
                        name={user.name}
                        email={user.email}
                        profilePicture={user.profilePicture}
                    />
                ))}
            </EditorSectionContainer>
        </EditorElementContainer>
    );
};

export default CollaborationView;
