import {get, ref, set, update} from 'firebase/database';
import {Database} from '../../../index.ts';
import {ICriterion, IEntryType, IModification} from '../../../../types';

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

export const UpdateEventTriggers = async (
    projectId: string,
    tableId: number,
    eventId: number,
    triggers: number[],
) => {
    try {
        console.log(triggers);

        // Check if triggers exists in the event
        const r = ref(
            Database,
            `projects/${projectId}/tables/${tableId}/events/${eventId}`,
        );
        const s = (await get(r)).val();
        if (typeof s.triggers === 'undefined') {
            await set(r, {
                ...s,
                triggers: triggers,
            });
        } else {
            await update(r, {
                triggers: triggers,
            });
        }

        console.log(
            `Updated triggers for event ${eventId} in project ${projectId}. (UpdateEventTriggers)`,
        );
    } catch (error) {
        console.log(
            `Error updating triggers for event ${eventId} in project ${projectId}. (UpdateEventTriggers)`,
        );
        console.error(error);
    }
};

export const UpdateRuleSpecific = async (
    projectId: string,
    tableId: number,
    ruleId: number,
    criteria: ICriterion[],
    modifications: IModification[],
) => {
    try {
        const r = ref(
            Database,
            `projects/${projectId}/tables/${tableId}/rules/${ruleId}`,
        );
        const s = (await get(r)).val();

        console.log(
            'Trying to update rule specific with',
            criteria,
            modifications,
        );

        await set(r, {
            ...s,
            ruleCriteria: criteria,
            ruleModifications: modifications,
        });

        console.log(
            `Updated rule ${ruleId} in project ${projectId}. (UpdateRuleSpecific)`,
        );
    } catch (error) {
        console.log(
            `Error updating rule ${ruleId} in project ${projectId}. (UpdateRuleSpecific)`,
        );
        console.error(error);
    }
};
