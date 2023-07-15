import {get, ref, set} from 'firebase/database';
import {Database} from '../../index.ts';
import {IFact} from '../../../types';
import ITable from '../../../types/ITable.ts';

export const DeleteTable = async (projectId: string, tableId: number) => {
    try {
        const entryIds = [];
        const tableSnap = await get(
            ref(Database, `projects/${projectId}/tables/${tableId}`),
        );

        if (tableSnap.exists()) {
            const table = tableSnap.val() as ITable;

            if (table.facts === undefined) table.facts = {};
            if (table.events === undefined) table.events = {};
            if (table.rules === undefined) table.rules = {};

            entryIds.push(...Object.keys(table.facts));
            entryIds.push(...Object.keys(table.events));
            entryIds.push(...Object.keys(table.rules));
        }

        const entryMap = (
            await get(ref(Database, `projects/${projectId}/entryMap`))
        ).val();

        for (const entryId of entryIds) entryMap[entryId] = null;

        await set(ref(Database, `projects/${projectId}/entryMap`), entryMap);

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
