import {
    CheckEventValidity,
    CheckFactValidity,
    CheckRuleValidity,
    IEvent,
    IFact,
    IRule,
} from './entries';
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

export const CreateProjectTable = (key: string, project: IProject): ITable => {
    const id = GetMinimumEntryIdFromProject(project);
    return {
        id,
        key,
        events: [],
        facts: [],
        rules: [],
    };
};

export const CheckTableValidity = (table: ITable): boolean => {
    const isIdValid = 'id' in table && typeof table.id === 'number';
    const isKeyValid = 'key' in table && typeof table.key === 'string';

    const isEventsValid =
        'events' in table &&
        Array.isArray(table.events) &&
        table.events.every(event => CheckEventValidity(event));

    const isFactsValid =
        'facts' in table &&
        Array.isArray(table.facts) &&
        table.facts.every(fact => CheckFactValidity(fact));

    const isRulesValid =
        'rules' in table &&
        Array.isArray(table.rules) &&
        table.rules.every(rule => CheckRuleValidity(rule));

    return (
        isIdValid && isKeyValid && isEventsValid && isFactsValid && isRulesValid
    );
};
