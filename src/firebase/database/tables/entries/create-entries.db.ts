import {get, ref, set, update} from 'firebase/database';
import {Database} from '../../../index.ts';
import {
    GetMinimumEntryIdFromMap,
    IEvent,
    IFact,
    IRule,
} from '../../../../types';

export const CreateFact = async (projectId: string, tableId: number) => {
    try {
        const entryMap = (
            await get(ref(Database, `projects/${projectId}/entryMap`))
        ).val();
        const factId = GetMinimumEntryIdFromMap(entryMap);

        const fact: IFact = {
            key: 'New Fact',
            id: factId,
            value: 0,
            factGuard: 1,
        };

        await set(
            ref(
                Database,
                `projects/${projectId}/tables/${tableId}/facts/${factId}`,
            ),
            fact,
        );

        await update(ref(Database, `projects/${projectId}/`), {
            entryMap: {
                ...entryMap,
                [fact.id]: fact.key,
            },
        });

        console.log(
            `Fact ${factId} created in project ${projectId}. (CreateFact)`,
        );
    } catch (error) {
        console.log(
            `Error creating fact in project ${projectId}. (CreateFact)`,
        );
        console.error(error);
    }
};

export const CreateEvent = async (projectId: string, tableId: number) => {
    try {
        const entryMap = (
            await get(ref(Database, `projects/${projectId}/entryMap`))
        ).val();
        const eventId = GetMinimumEntryIdFromMap(entryMap);

        const event: IEvent = {
            key: 'New Event',
            id: eventId,
            value: 0,
            eventGuard: 1,
        };

        await set(
            ref(
                Database,
                `projects/${projectId}/tables/${tableId}/events/${eventId}`,
            ),
            event,
        );

        await update(ref(Database, `projects/${projectId}/`), {
            entryMap: {
                ...entryMap,
                [event.id]: event.key,
            },
        });

        console.log(
            `Event ${eventId} created in project ${projectId}. (CreateEvent)`,
        );
    } catch (error) {
        console.log(
            `Error creating event in project ${projectId}. (CreateEvent)`,
        );
        console.error(error);
    }
};

export const CreateRule = async (projectId: string, tableId: number) => {
    try {
        const entryMap = (
            await get(ref(Database, `projects/${projectId}/entryMap`))
        ).val();
        const ruleId = GetMinimumEntryIdFromMap(entryMap);

        const rule: IRule = {
            key: 'New Rule',
            ruleGuard: 1,
            id: ruleId,
            value: 0,
            ruleCriteria: [],
            ruleModifications: [],
            ruleTriggers: [],
        };

        await set(
            ref(
                Database,
                `projects/${projectId}/tables/${tableId}/rules/${rule.id}`,
            ),
            rule,
        );

        await update(ref(Database, `projects/${projectId}/`), {
            entryMap: {
                ...entryMap,
                [rule.id]: rule.key,
            },
        });

        console.log(
            `Rule ${ruleId} created in project ${projectId}. (CreateRule)`,
        );
    } catch (error) {
        console.log(
            `Error creating rule in project ${projectId}. (CreateRule)`,
        );
        console.error(error);
    }
};
