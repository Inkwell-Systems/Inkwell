import {
    CheckEventValidity,
    CheckFactValidity,
    CheckRuleValidity,
    IEvent,
    IFact,
    IRule,
} from './entries';
import IProject from './IProject.ts';

export default interface ITable {
    id: number;
    key: string;
    events: IEvent[];
    facts: IFact[];
    rules: IRule[];
}

export const GetTableEntries = (table: ITable): (IEvent | IFact | IRule)[] => {
    return [...table.events, ...table.facts, ...table.rules];
};

export const CreateProjectTable = (key: string, project: IProject): ITable => {
    const id = Object.keys(project.entryMap).length;
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
