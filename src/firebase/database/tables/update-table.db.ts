import {ref, update} from 'firebase/database';
import {Database} from '../../index.ts';

export const UpdateTableKey = async (
    key: string,
    projectId: string,
    tableId: number,
) => {
    try {
        await update(ref(Database, `projects/${projectId}/tables/${tableId}`), {
            key: key,
        });
    } catch (error) {
        console.log(
            `Error updating table key ${key} in project ${projectId}. (UpdateTableName)`,
        );
        console.error(error);
    }
};
