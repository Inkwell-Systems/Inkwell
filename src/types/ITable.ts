import {
    CheckEventValidity,
    CheckFactValidity,
    CheckRuleValidity,
    IEvent,
    IFact,
    IRule,
} from './entries';

export default interface ITable {
    id: number;
    key: string;
    events: IEvent[];
    facts: IFact[];
    rules: IRule[];
}

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
