import {ref, set} from 'firebase/database';
import {Database} from '../../index.ts';

export const DeleteTable = async (projectId: string, tableId: number) => {
    try {
        await set(
            ref(Database, `projects/${projectId}/tables/${tableId}`),
            null,
        );

        await set(
            ref(Database, `projects/${projectId}/entryMap/${tableId}`),
            null,
        );
    } catch (error) {
        console.log(
            `Error deleting table ${tableId} in project ${projectId}. (DeleteTable)`,
        );
        console.error(error);
    }
};
