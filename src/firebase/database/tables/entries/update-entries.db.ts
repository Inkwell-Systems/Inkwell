import {ref, update} from 'firebase/database';
import {Database} from '../../../index.ts';
import {IEntryType} from '../../../../types';

export const UpdateEntryKey = async (
    key: string,
    type: IEntryType,
    projectId: string,
    tableId: number,
    entryId: number,
) => {
    try {
        await update(
            ref(
                Database,
                `projects/${projectId}/tables/${tableId}/${type}/${entryId}`,
            ),
            {
                key: key,
            },
        );

        await update(ref(Database, `projects/${projectId}/entryMap`), {
            [entryId]: key,
        });
    } catch (error) {
        console.log(
            `Error updating entry key ${key} in project ${projectId}. (UpdateEntryKey)`,
        );
        console.error(error);
    }
};
