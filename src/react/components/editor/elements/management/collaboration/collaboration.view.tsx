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
import Invitations from './invitations/invitations.component.tsx';
import {RemoveUserFromProject} from '../../../../../../firebase';

const CollaborationView = () => {
    const pCtx = UseProjectProvider();
    const [users, setUsers] = useState<IFetchedUser[]>();

    const [error, setError] = useState<Error | null>(null);

    const handleKickUser = async (userId: string) => {
        setError(null);

        const res = await RemoveUserFromProject(pCtx.value.projectId, userId);
        setError(res.error);
    };

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
        <>
            {pCtx.value.cloud ? (
                <EditorElementContainer>
                    <EditorSectionTitle>Current Members</EditorSectionTitle>
                    {error !== null && (
                        <ErrorMessage>{error?.message}</ErrorMessage>
                    )}

                    <EditorSectionContainer>
                        <ErrorMessage>
                            Changing user roles has no effect. It is a work in
                            progress. For now, only the owner can delete the
                            project and control member flow.
                        </ErrorMessage>

                        {users?.map(user => (
                            <UserCard
                                user={user}
                                handleKick={() => handleKickUser(user.id)}
                                key={user.id}
                            />
                        ))}
                    </EditorSectionContainer>

                    <EditorSectionTitle>Invitations</EditorSectionTitle>
                    <EditorSectionContainer
                        style={{
                            gap: '1rem',
                        }}
                    >
                        <Invitations />
                    </EditorSectionContainer>
                </EditorElementContainer>
            ) : (
                <h1>A cloud project is required for this.</h1>
            )}
        </>
    );
};

export default CollaborationView;
