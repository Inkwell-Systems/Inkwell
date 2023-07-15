import {ref, set} from 'firebase/database';
import {Database} from '../../../index.ts';
import {IEntryType} from '../../../../types';

export const DeleteEntry = async (
    projectId: string,
    tableId: number,
    type: IEntryType,
    entryId: number,
) => {
    try {
        await set(
            ref(
                Database,
                `projects/${projectId}/tables/${tableId}/${type}/${entryId}`,
            ),
            null,
        );
        await set(
            ref(Database, `projects/${projectId}/entryMap/${entryId}`),
            null,
        );
    } catch (error) {
        console.log(
            `Error deleting entry ${entryId} in project ${projectId}. (DeleteEntry)`,
        );
        console.error(error);
    }
};
