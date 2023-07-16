import {IEvent, IFact, IRule} from './entries';
import IProject, {GetMinimumEntryIdFromProject} from './IProject.ts';

export default interface ITable {
    id: number;
    key: string;

    facts: {[key: number]: IFact};
    events: {[key: number]: IEvent};
    rules: {[key: number]: IRule};
}

export const GetTableEvents = (table: ITable): IEvent[] => {
    return Object.values(table.events);
};

export const GetTableFacts = (table: ITable): IFact[] => {
    return Object.values(table.facts);
};

export const GetTableRules = (table: ITable): IRule[] => {
    return Object.values(table.rules);
};

export const GetTableEntries = (table: ITable): (IEvent | IFact | IRule)[] => {
    return [
        ...GetTableEvents(table),
        ...GetTableFacts(table),
        ...GetTableRules(table),
    ];
};

export const GetTableEntriesIds = (table: ITable): number[] => {
    return GetTableEntries(table).map(entry => entry.id);
};

export const CreateProjectTable = (key: string, project: IProject): ITable => {
    const id = GetMinimumEntryIdFromProject(project);
    return {
        id,
        key,
        events: {},
        facts: {},
        rules: {},
    };
};
