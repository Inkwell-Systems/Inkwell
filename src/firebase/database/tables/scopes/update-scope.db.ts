import {ref, update} from 'firebase/database';
import {Database} from '../../../index.ts';

export const UpdateScope = async (
    projectId: string,
    scopeId: number,
    newLevel?: number,
    newKey?: string,
) => {
    try {
        const newScope = {};
        if (newLevel) newScope['level'] = newLevel;
        if (newKey) newScope['key'] = newKey;

        const r = ref(Database, `projects/${projectId}/scopes/${scopeId}`);
        await update(r, newScope);

        console.log(`Scope ${scopeId} in project ${projectId} updated.`);
    } catch (error) {
        console.log(`Error updating scope ${scopeId} in project ${projectId}.`);
        console.error(error);
    }
};
