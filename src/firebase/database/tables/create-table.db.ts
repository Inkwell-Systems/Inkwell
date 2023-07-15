import {IResult} from '../../../types/IResult.ts';
import ITable, {CreateProjectTable} from '../../../types/ITable.ts';
import {FetchProject} from '../project';
import {ref, set, update} from 'firebase/database';
import {Database} from '../../index.ts';

export const CreateTable = async (
    tableName: string,
    projectId: string,
): Promise<IResult<ITable>> => {
    try {
        const projRes = await FetchProject(projectId);
        if (projRes.error) {
            console.log(`Error fetching project ${projectId}. (CreateTable)`);
            return {
                data: null,
                error: projRes.error,
            };
        }

        const entryMap = projRes.data.entryMap || {};

        const table = CreateProjectTable(tableName, projRes.data);
        console.log(table);

        await set(
            ref(Database, `projects/${projectId}/tables/${table.id}`),
            table,
        );
        await update(ref(Database, `projects/${projectId}/`), {
            entryMap: {
                ...entryMap,
                [table.id]: tableName,
            },
        });

        console.log(
            `Created table ${tableName} in project ${projectId}. (CreateTable)`,
        );
        return {
            data: table,
            error: null,
        };
    } catch (error) {
        console.log(
            `Error creating table ${tableName} in project ${projectId}. (CreateTable)`,
        );
        return {
            data: null,
            error: error,
        };
    }
};
