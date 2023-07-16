import {ref, set} from 'firebase/database';
import {Database} from '../../../index.ts';

export const DeleteScope = async (projectId: string, scopeId: number) => {
    try {
        await set(
            ref(Database, `projects/${projectId}/scopes/${scopeId}`),
            null,
        );

        console.log(`Deleted scope ${scopeId} from project ${projectId}.`);
    } catch (error) {
        console.log(
            `An error occurred while deleting scope ${scopeId} from project ${projectId}.`,
        );
        console.error(error);
    }
};
