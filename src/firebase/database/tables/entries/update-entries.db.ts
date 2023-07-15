import {ref, update} from 'firebase/database';
import {Database} from '../../../index.ts';
import {IEntryType} from '../../../../types';

export const UpdateEntry = async (
    type: IEntryType,
    projectId: string,
    tableId: number,
    entryId: number,
    key?: string,
    value?: number,
) => {
    try {
        const newEntry = {};
        if (key) newEntry['key'] = key;
        if (value) newEntry['value'] = value;

        const r = ref(
            Database,
            `projects/${projectId}/tables/${tableId}/${type}/${entryId}`,
        );
        await update(r, newEntry);

        if (key) {
            await update(ref(Database, `projects/${projectId}/entryMap`), {
                [entryId]: key,
            });
        }
    } catch (error) {
        console.log(
            `Error updating entry ${entryId} in project ${projectId}. (UpdateEntryKey)`,
        );
        console.error(error);
    }
};
