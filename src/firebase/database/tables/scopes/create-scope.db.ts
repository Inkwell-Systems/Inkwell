import {get, ref, set} from 'firebase/database';
import {Database} from '../../../index.ts';
import {GetMinimumScopeId} from '../../../../types';
import {CreateProjectScope} from '../../../../types/IScope.ts';

export const CreateScope = async (projectId: string) => {
    try {
        const scopes = (
            await get(ref(Database, `projects/${projectId}/scopes`))
        ).val();

        const scopeId = GetMinimumScopeId(scopes || {});
        const scope = CreateProjectScope(scopeId, 'New Scope', -1);

        await set(
            ref(Database, `projects/${projectId}/scopes/${scopeId}`),
            scope,
        );

        console.log(`Created scope ${scopeId} for project ${projectId}.`);
    } catch (error) {
        console.log(
            `An error occurred while creating a scope for project ${projectId}.`,
        );
        console.error(error);
    }
};
